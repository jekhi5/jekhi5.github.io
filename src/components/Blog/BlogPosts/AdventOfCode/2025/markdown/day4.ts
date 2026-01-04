const markdown = `## The Problem

[Puzzle link](https://www.adventofcode.com/2025/day/4)

Day 4 is a map traversing puzzle. These types of puzzles are usually quite difficult for me. I was pleasantly surprised that the solution is actually rather straightforward.

## Part 1

Part 1 tasks us with finding the number of paper rolls we can remove from a grid that looks like this:

\`\`\`
..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
\`\`\`

Where \`@\` are paper rolls and \`.\` are empty spaces. A roll of paper can be removed by a forklift if there are fewer than four rolls of paper in the immediately surrounding eight spots.

To start, I know I'm going to need some sort of function that counts how many rolls surround a space. I think preprocessing the input to map \`. -> 0\` and \`@ -> 1\` will help me total this conveniently.

I like to solve these puzzles in a [top-down design](https://en.wikipedia.org/wiki/Bottom-up_and_top-down_approaches#Programming), referencing functions that I haven't written yet but hope to implement. The code implementation of this procedure is thus quite straightforward:

\`\`\`python
lines = input.read().splitlines()
grid = [list(line) for line in lines]
num_grid = [[0 if char == "." else 1 for char in line] for line in grid]

total_movable_rolls = 0
for i in range(len(grid)):
    for j in range(len(grid[i])):
        if grid[i][j] == 1 and num_rolls_surrounding(grid, i, j) < 4:
            total_movable_rolls += 1

print(total_movable_rolls)
\`\`\`

This implementation uses \`range()\` to iterate over the indices of the grid. I've been told that isn't very "[Pythonic](https://en.wikipedia.org/wiki/Python_(programming_language)#Design_philosophy_and_features)," and so I'm trying to be better about iterating over elements rather than indices. After looking into alternatives, I was able to use \`enumerate\` instead of \`range(len(...))\` to clean it up a bit:

\`\`\`python
for i, row in enumerate(grid):
    for j, cell in enumerate(row):
        if cell == 1 and num_rolls_surrounding(grid, i, j) < 4:
            total_movable_rolls += 1
\`\`\`

Because the grid is made up of \`0\`s and \`1\`s, the imagined \`num_rolls_surrounding()\` function simply needs to sum the 8 surrounding squares and return it:

\`\`\`python
def num_rolls_surrounding(grid: list[int], row: int, col: int) -> int:
    lower_row_bound = max(0, row - 1)
    upper_row_bound = min(len(grid) - 1, row + 1)
    lower_col_bound = max(0, col - 1)
    upper_col_bound = min(len(grid[0]) - 1, col + 1)

    total = sum(
        grid[r][c]
        for r in range(lower_row_bound, upper_row_bound + 1)
        for c in range(lower_col_bound, upper_col_bound + 1)
        if (r, c) != (row, col)  # Exclude center cell
    )

    return total
\`\`\`

The key parts of this function are:

- accurately setting the boundaries so as not to go out of bounds when checking rolls of paper on the edge of the grid
- ensuring we don't count the central paper-roll-to-be-removed in the number of surrounding rolls

### Success! [*]

----
## Part 2

Part 2 asks us a more generalized question: how many paper rolls can be removed in total (even considering ones that are initially blocked, but become removable after other rolls are removed)? Because we already know how to determine if one roll can be removed, all we need to do is mark each removed roll as gone and continue trying to remove rolls until we can't any more:

\`\`\`python
total_movable_rolls = 0
removed_roll = True   <-
while removed_roll:   <-
    removed_roll = False
    for i, row in enumerate(grid):
        for j, cell in enumerate(row):
            if cell == 1 and num_rolls_surrounding(grid, i, j) < 4:
                grid[i][j] = 0 # set this roll as removed   <-
                removed_roll = True # continue iterating    <-

print(total_movable_rolls)
\`\`\`

### Success! [**]
`;

export default markdown;
