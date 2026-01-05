const markdown = `## The Problem

[Puzzle link](https://www.adventofcode.com/2025/day/7) 

Day 7 seems like a grid iteration puzzle, which can definitely be computationally expensive if not solved mathematically.

## Part 1

Part 1 gives us a grid of "\`.\`" and "\`^\`" in which a beam will shoot from the top to the bottom,
splitting to the left and right when they hit a \`^\`. I found it helpful to think of this like a
waterfall.

The example grid starts out looking like this:

\`\`\`
.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............
\`\`\`

The starting spot at the very top is labeled "\`S\`". As the beam is shot downward from the
starting spot, it hits the first "splitter" (\`^\`) and splits it into two beams, one to the left
and one to the right of the splitter and continues moving downward (like a waterfall):

\`\`\`
.......S.......      .......S.......      .......S.......      .......S.......         .......S.......
.......|.......      .......|.......      .......|.......      .......|.......         .......|.......
.......^.......      ......|^|......      ......|^|......      ......|^|......         ......|^|......
...............      ...............      ......|.|......      ......|.|......         ......|.|......
......^.^......      ......^.^......      ......^.^......      .....|^|^|.....         .....|^|^|.....
...............      ...............      ...............      ...............         .....|.|.|.....
.....^.^.^.....      .....^.^.^.....      .....^.^.^.....      .....^.^.^.....         ....|^|^|^|....
...............  ->  ...............  ->  ...............  ->  ...............  => =>  ....|.|.|.|.... 
....^.^...^....      ....^.^...^....      ....^.^...^....      ....^.^...^....         ...|^|^|||^|...
...............      ...............      ...............      ...............         ...|.|.|||.|...
...^.^...^.^...      ...^.^...^.^...      ...^.^...^.^...      ...^.^...^.^...         ..|^|^|||^|^|..
...............      ...............      ...............      ...............         ..|.|.|||.|.|..
..^...^.....^..      ..^...^.....^..      ..^...^.....^..      ..^...^.....^..         .|^|||^||.||^|.
...............      ...............      ...............      ...............         .|.|||.||.||.|.
.^.^.^.^.^...^.      .^.^.^.^.^...^.      .^.^.^.^.^...^.      .^.^.^.^.^...^.         |^|^|^|^|^|||^|
...............      ...............      ...............      ...............         |.|.|.|.|.|||.|
\`\`\`

The puzzle asks us to calculate how many times the initial beam is split. It notes an important
rule: beams don't overlap with one another, and if two splitters try to dump a beam into the same
space, only one beam survives. 

Example:

\`\`\`
.......S.......     .......S.......
.......|.......     .......|.......
......|^|...... ->  ......|^|......
......|.|......     ......|.|......
......^.^......     .....|^|^|.....
\`\`\`

Looking at this small subsection of the example grid, you'll notice in the last line that those two
splitters share the same space between them where a newly split beam would go. In this instance,
only _one_ beam ends up there.

In terms of processing this, a recursive solution feels most closely aligned with how this problem
functions, and therefore potentially the easiest way to translate this into code, specifically
because the beams themselves are recursively split until they reach the bottom. I figure each
recursive call represents one "generation" of the beam (or more simply: one step down for a specific
strand of the beam).

The non-overlapping caveat makes recursion a little tricky because I potentially need one
branch of the recursive tree to impact others (IE, if one branch splits a beam into a certain spot,
I need to ensure I don't double-up a second beam in that same spot from another split). As such,
I decided to keep a global \`manifold\` representing the state of the beam's total journey and to have
every branch of recursion mark where it's placing the next generation of its beam's journey.

The [pseudocode](https://en.wikipedia.org/wiki/Pseudocode) looks like this:

\`\`\`python
def find_total_splits(cur_row, beam_col):
    if cur_row is the last row or if the space below where we are now is a "|":
        return 0
    if the space below where we are now is empty space:
        mark that space in the manifold with a "|"
        # recur straight down:
        return find_total_splits(one down from current row, the same beam_col) 
    if the space below where we are now is a splitter:
        in the row below the current one, mark the space to the left
          and right of the splitter with a "|" only if it doesn't overlap
          with an existing beam
        
        return (
          find_total_splits(1 down from cur_row, left of beam_col)
          + find_total_splits(1 down from cur_row, right of beam_col)
          + 1 for this split
\`\`\`

This is pretty much the direct code version of how the puzzle states a beam's journey down the
manifold goes. Great! The actual code implementation follows this pretty closely. The only
complicating factors contributing to the verbosity of the Python code is
making sure we don't try to access an out-of-bound index when the beam is right along the edge,
as well as handing each permutation of potential beam overlaps:

\`\`\`python
manifold = []

def find_total_splits(cur_row, beam_col):
    if cur_row == len(manifold) - 1 or manifold[cur_row + 1][beam_col] == "|":
        # End of manifold or overlapping beam
        return 0
    if manifold[cur_row + 1][beam_col] == ".":
        # No splitter, move straight down
        manifold[cur_row + 1][beam_col] = "|"
        return find_total_splits(cur_row + 1, beam_col)
    if manifold[cur_row + 1][beam_col] == "^":
        # Split
        if beam_col == 0:
            # On left edge
            # Don't overlap with existing beams to the RIGHT
            if manifold[cur_row + 1][beam_col + 1] == "|":
                return 1

            manifold[cur_row + 1][beam_col + 1] = "|"
            return find_total_splits(cur_row + 1, beam_col + 1) + 1
        elif beam_col == len(manifold[cur_row]) - 1:
            # On right edge
            # Don't overlap with existing beams to the LEFT
            if manifold[cur_row + 1][beam_col - 1] == "|":
                return 1

            manifold[cur_row + 1][beam_col - 1] = "|"
            return find_total_splits(cur_row + 1, beam_col - 1) + 1
        else:
            # Somewhere in the middle of the manifold
            if (
                manifold[cur_row + 1][beam_col - 1] == "|"
                and manifold[cur_row + 1][beam_col + 1] == "|"
            ):
                # Both sides of splitter already have a beam
                return 1
            elif manifold[cur_row + 1][beam_col - 1] == "|":
                # Left side of splitter already had a beam, just set right
                manifold[cur_row + 1][beam_col + 1] = "|"
                return find_total_splits(cur_row + 1, beam_col + 1) + 1
            elif manifold[cur_row + 1][beam_col + 1] == "|":
                # Right side of splitter already had a beam, just set left
                manifold[cur_row + 1][beam_col - 1] = "|"
                return find_total_splits(cur_row + 1, beam_col - 1) + 1
            else:
                # Both sides need a splitter
                manifold[cur_row + 1][beam_col - 1] = "|"
                manifold[cur_row + 1][beam_col + 1] = "|"
                return (
                    find_total_splits(cur_row + 1, beam_col - 1)
                    + find_total_splits(cur_row + 1, beam_col + 1)
                    + 1
                )
    raise ValueError(f"Illegal manifold state: {manifold}")
\`\`\`

Once we have that, all we need to do is parse the input into lines and pass it through:

\`\`\`python
lines = input.read().splitlines()

manifold = [list(line) for line in lines]
starting_beam_col = "".join(manifold[0]).find("S")
print(find_total_splits(0, starting_beam_col))
\`\`\`

### Success! [*]

----
## Part 2

Part 2 complicates things by requiring us to understand quantum physics. Just kidding (sort of).
Part 2 states that rather than each \`^\` splitting the beam, it splits _time_, causing
there to be many different timelines of a single beam.

For example:

\`\`\`
In one timeline, the beam          In another timeline, the beam                 In another, the beam
always takes the left path:        alternated going left and right          took a totally different path
.......S.......                          .......S.......                          .......S.......
.......|.......                          .......|.......                          .......|.......
......|^.......                          ......|^.......                          ......|^.......
......|........                          ......|........                          ......|........
.....|^.^......                          ......^|^......                          .....|^.^......
.....|.........                          .......|.......                          .....|.........
....|^.^.^.....                          .....^|^.^.....                          ....|^.^.^.....
....|..........                          ......|........                          ....|..........
...|^.^...^....                          ....^.^|..^....                          ....^|^...^....
...|...........                          .......|.......                          .....|.........
..|^.^...^.^...                          ...^.^.|.^.^...                          ...^.^|..^.^...
..|............                          .......|.......                          ......|........
.|^...^.....^..                          ..^...^|....^..                          ..^..|^.....^..
.|.............                          .......|.......                          .....|.........
|^.^.^.^.^...^.                          .^.^.^|^.^...^.                          .^.^.^|^.^...^.
|..............                          ......|........                          ......|........
\`\`\`

There are countless other paths the beam will take, splitting at each splitter it encounters. In
fact, this is the exact question the puzzle asks us: How many timelines exist for this beam? This
question was a bit hard for me to wrap my head around, so I rephrased it to be: how many distinct
paths can the beam take if it fell down from top to bottom
[Pachinko](https://en.wikipedia.org/wiki/Pachinko) style?

Our code from part one can be easily modified to find this solution: simply take out the part
where we mark and check the location of the beams, allowing us to count each individual beam's
total potential paths. The problem with this is that for increasingly larger boards, like the
well over 100x100 grid with more than 1500 splitters we get as our actual puzzle input,
this takes an unimaginably long time. To put it in perspective, if the beam were to encounter, say, 300
of those more than 1500 splitters in its adventure down the grid, it would take 2^15 recursive calls
or about 300 years for a modern computer. If the beam hits 500, that's 2^30 recursive calls, which is
more time than the age of the universe. Moral of the story: we're going to need to use some kind of
[memoization](https://en.wikipedia.org/wiki/Memoization) or
[dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) to solve this if we want to
be alive when the answer is finally calculated.

Looking at this problem, I see something important about how we can count the number of splits a
path can take:

- At each space on the grid, the number of timelines that space can possibly be a part of is
the sum of the timelines of each splitter above it that pours a beam into it. Let me illustrate this:

Using our shortened example from earlier, I've relabeled the splitters as "\`A\`", "\`B\`",
and "\`C\`" with the starting point still labeled as "\`S\`"

\`\`\`
Fig. A
.......S.......
...............
.......A.......
...............
......B.C......
...............
\`\`\`

Splitter \`A\` receives a single beam from \`S\`. Let's mark \`A\` with the number 1, so we know
how many timelines precede it:


\`\`\`
Fig. B
.......S.......
...............
.......1.......
...............
......B.C......
...............
\`\`\`

Splitters \`B\` and \`C\` are each poured into with a single beam from \`A\`, let's label each of
these splitters with the number of timelines it can participate in as well:

\`\`\`
Fig. C
.......S.......
...............
.......1.......
...............
......1.1......
...............
\`\`\`

Now we're at the bottom. Since all the beams eventually reach the bottom, to count the total number
of timelines across the entire grid, we just need to count how many beams are poured into each
space in the final row and sum them up. I've labeled the total number of beam timelines that end up
at each space in the last row:

\`\`\`
Fig. D
.......S.......
...............
.......1.......
...............
......1.1......
000001020100000
\`\`\`

All summed, we get 4, which you can see agrees with the actual total number of paths our beam can
take:

\`\`\`
.......S.......      .......S.......      .......S.......      .......S.......
.......|.......      .......|.......      .......|.......      .......|.......
......|^.......      ......|^.......      .......^|......      .......^|......
......|........      ......|........      ........|......      ........|......
.....|^.^......      ......^|^......      ......^|^......      ......^.^|.....
.....|.........      .......|.......      .......|.......      .........|.....
\`\`\`

You can even see that the bottom spot to the left of the splitter \`B\` receives 1 total beam, the
bottom spot in the center receives 2 total beams, the bottom spot to the right of splitter \`C\`
receives 1 total beam, and all other spots receive 0 total beams. This conveniently aligns with our mathematically
derived totals for each spot in the bottom row in Fig. D.

So, to find all total timelines, we need to:

1. Fill a grid with 0s at the locations of all of the splitters to keep track of their timelines.
2. Move downward across the grid and sum up the total above timelines whenever we reach a splitter.
3. Document the total timelines for _this_ splitter.
4. Once we have all splitter documented, sum up all calculated timelines for the bottom row,
   since this is the place where all the beams will end up.


In practice, that looks like this:

\`\`\`python
memoized_manifold = [
    [0 if char == "^" else None for char in row] for row in manifold
]

def find_total_timelines() -> int:
    for i, row in enumerate(manifold):
        for j, spot in enumerate(row):
            if spot == "^":
                memoized_manifold[i][j] = sum_above_timelines(i, j)

    return sum(
        [
            sum_above_timelines(len(manifold) - 1, col) # Get the sum for the last row
            for col in range(len(manifold[-1]))
        ]
    )
\`\`\`

To calculate the sum of the above timelines, we'll do this:

\`\`\`python
def sum_above_timelines(row: int, col: int) -> int:
    ceiling_splitter_row = find_ceiling_splitter(row, col)

    # This is the first splitter and there is only one particle that can pass through it
    if ceiling_splitter_row == 0 and manifold[0][col] == "S":
        return 1

    total = 0
    for cur_row in range(row - 1, ceiling_splitter_row, -1):
        # The only splitters that will potentially pour into us are
        # directly to our right and left
        left = memoized_manifold[cur_row][col - 1] if col > 0 else None
        right = (
            memoized_manifold[cur_row][col + 1]
            if col < len(memoized_manifold[cur_row]) - 1
            else None
        )
        total += left if left != None else 0
        total += right if right != None else 0

    return total
\`\`\`

The important part of calculating the "\`ceiling_splitter_row\` is that if there's a splitter
directly above the current space, we know nothing above that splitter will ever pour into this
splitter because that splitter will pour it to the right and left of us:

\`\`\`
.......S.......
.......|.......
......|^|......
......|.|......
......|^|......
......|.|......
\`\`\`

That second splitter is never hit because the splitter directly above it splits around it.

Calculating where the ceiling is is as simple as walking up the grid until we hit a splitter or
the top of the grid:

\`\`\`python
def find_ceiling_splitter(row: int, col: int) -> int:
    for cur_row in range(row - 1, 0, -1):
        if manifold[cur_row][col] != ".":
            return cur_row

    return 0
\`\`\`

Now just call

\`\`\`python
print(find_total_timelines())
\`\`\`


### Success! [**]
`;

export default markdown;
