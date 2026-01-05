import { CHECK_MARK } from 'utils/unicodeMarks';

const markdown = `## The Problem

[Puzzle link](https://www.adventofcode.com/2025/day/5)

Day 5 is another ID verification puzzle. 

## Part 1

Part 1 tasks us with reading a series of valid ID ranges and then checking many individual IDs to
see if they fall within any of the ranges. In my effort to be a stronger Python user (and to show
that I do actually have _some_ design principles), I've decided to use a class to represent our ID
ranges:

\`\`\`python
class Range:
    """An inclusive range of two numbers"""

    def __init__(self, low: int, high: int):
        self.low = low
        self.high = high
\`\`\`

The reason I've decided to use a custom class and not, say, a tuple, is that I want to add some
custom functions. The puzzle specifically stipulates that some of the valid ID ranges might
overlap. This is a big clue for me that I might be able to significantly optimize this puzzle by
intelligently merging overlapping ranges:

\`\`\`python
class Range:
    """An inclusive range of two numbers"""

    def __init__(self, low: int, high: int):
        self.low = low
        self.high = high

    def contains(self, num: int) -> bool:
        """Is the given number contained within this range?"""
        return num >= self.low and num <= self.high

    def overlaps(self, other: "Range") -> bool:
        """Does this range overlap with the other range?"""
        return self.contains(other.low) or self.contains(other.high)
\`\`\`

_Note: There is a subtle bug in this code that won't surface until part 2. Can you find it?_


To implement this range-merging behavior, we'll start by processing each pair of numbers into a
range, and then determine if there are any overlaps with existing ranges (again, I'm using
[top-down design](https://en.wikipedia.org/wiki/Bottom-up_and_top-down_approaches#Programming),
so we'll implement \`insert_range_smart()\` after we get this logic done):

\`\`\`python
ranges = []
item_nums = []
reading_ranges = True
for line in input_text:
    if line == "\\n": # The empty line separating the ID ranges from the list of IDs
        reading_ranges = False
        continue
    if reading_ranges:                                                  ⌉
        low, high = line.split("-")                                     | # Range behavior
        ranges = insert_range_smart(ranges, Range(int(low), int(high))) ⌋
    else:
        item_nums.append(int(line))
\`\`\`

Great. Now here's what \`insert_range_smart()\` look like:

\`\`\`python
def insert_range_smart(ranges: list[Range], new_range: Range) -> list[Range]:
    """Inserts the given new range into the list of existing ranges, either by
    merging it with an existing overlapping range, or by adding it at the end"""
    for range in ranges:
        if range.overlaps(new_range):
            new_range = Range(
                min(range.low, new_range.low), max(range.high, new_range.high)
            )
            ranges.remove(range)
            # Important to recur in case there are more ranges that are now mergeable
            return insert_range_smart(ranges, new_range) 

    ranges.append(new_range)
    return ranges
\`\`\`


While this merging strategy is not strictly necessary, it means we'll have fewer ranges to check
each ID against, and if I know Advent of Code, this very well could mean the difference between
your programming taking a few seconds to run and taking _much **much**_ longer. Once we have our
ranges processed, all we need to do is look at each given ID number and check its validity in each
range until we find a matching one:

\`\`\`python
def is_valid(ranges: list[Range], item_num: int) -> bool:
    """Is the given number included in the list of fresh ranges?"""
    for range in ranges:
        if range.contains(item_num):
            return True

    return False

num_valid = 0
for item_num in item_nums:
    if is_valid(ranges, item_num):
        num_valid += 1

print(num_valid)
\`\`\`

### Success! [*]

----
## Part 2

Part 2 asks us to ignore the valid ID numbers in the second half of the input and instead count the
total number of valid ID numbers the ranges allow for. As a benefit of our merging strategy, this
is a very simple question to answer: simply total up the differences of the \`high\` and \`low\`
values from each range!

\`\`\`python
# The +1 comes from the fact that the ranges are _inclusive_
# IE, the range 3-5 has _three_ IDs: 3, 4, 5, but 5 - 3 = 2
print(sum([(range.high - range.low + 1) for range in ranges]))
\`\`\`

But when I ran this, Advent of Code said my result was too high. Hmm. This simple summation
solution is only possible if I've successfully merged every range as much as possible, we'd be
double counting ranges otherwise. Let's check some edge cases of my merging function to see where
the problem is:

- Example: \`insert_range_smart([(10, 15)], (13, 18)) -> [(10, 18)]\` [${CHECK_MARK}]
- Example: \`insert_range_smart([(10, 15)], (6, 12)) -> [(6, 15)]\` [${CHECK_MARK}]
- Example: \`insert_range_smart([(10, 15)], (12, 14)) -> [(10, 15)]\` [${CHECK_MARK}]
- Example: \`insert_range_smart([(10, 15)], (9, 17)) -> [(10, 15), (9, 17)]\` [X]

It seems like the failing case is when the other range fully encapsulates this range. This reveals 
the bug in \`overlaps()\`: we need to check the overlap both ways.

\`\`\`python
def overlaps(self, other: "Range") -> bool:
    """Does this range overlap with the other range?"""
    return (
        self.contains(other.low)
        or self.contains(other.high)
        or other.contains(self.low)   <-
        or other.contains(self.high)  <-
    )
\`\`\`

With this fix in place, our solution works.


### Success! [**]
`;

export default markdown;
