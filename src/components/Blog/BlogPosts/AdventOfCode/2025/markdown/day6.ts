const markdown = `## The Problem

[Puzzle link](https://www.adventofcode.com/2025/day/6) 

Day 6 was an exercise in input parsing. I was able to use [numpy](https://numpy.org/doc/) to make
this much easier. We're given a string of math problems in stacked forms and are tasked with
helping some cephalopods finish their math homework.

## Part 1

In todays puzzle we're given a set of math problems that look like this:

\`\`\`
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
\`\`\`

The puzzle asks us to complete all of the problems and sum the solutions. These problems are
aligned such that each problem is stacked vertically with the operation on the bottom. In this
example, there are four problems:


- \`123 * 45 * 6 = 33210\`
- \`328 + 64 + 98 = 490\`
- \`51 * 387 * 215 = 4243455\`
- \`64 + 23 + 314 = 401\`

Since the description of what a cephalopod math problem is pretty clearly laid out, I designed a
data type, \`Problem\`, that encapsulates the key concepts:

\`\`\`python
from functools import reduce
class Problem:
    def __init__(self, nums: list[int] = [], op: Callable[[int, int], int] = None):
        self.nums = nums
        self.op = op

    def add_num(self, new_num: int) -> None:
        self.nums.append(new_num)

    def set_op(self, op: Callable[[int, int], int]) -> None:
        self.op = op

    def solve(self) -> int:
        return reduce(self.op, self.nums)
\`\`\`

With a setup like this, the tricky part of the problem is more in the parsing of the actual text
than in the solving of the individual problems. Going line by line, I can split on spaces and know
that each resulting number (or op for the last row) corresponds to the problem in the list of
problems that shares its index:

\`\`\`python
import operator

OPS = {"+": operator.add, "-": operator.sub, "*": operator.mul, "/": operator.truediv}

lines = input_text.readlines()
problems: list[Problem] = []
for line in lines:
    tokens = [
      token.strip()
      for token in line.split(" ")
      if token.strip() != "" # str.split(" ") will leave "" for a double space in input
    ] 
    if tokens[0] in OPS:
        for op, problem in zip(tokens, problems):
            problem.set_op(OPS[op])
    else:
        for i, new_num in enumerate(tokens):
            if i >= len(problems):
                problems.append(Problem([int(new_num)]))
            else:
                problems[i].add_num(int(new_num))
\`\`\`

The critical part of this parsing strategy is that there is a consistent list of \`Problem\`s in
which new numbers are added as the lines are parsed. The index of each number in the row we're
parsing corresponds to the index of the problem it should be added to. The same logic applies to
setting each problem's operation for the last line.

Once this parsing is in place, the actual solution is the result of iterating over each problem,
solving it, and summing the results:

\`\`\`python
print(sum([problem.solve() for problem in problems]))
\`\`\`


### Success! [*]

----
## Part 2

Part two tells us that the way we originally parsed these problems was for humans. For Cephalopods,
math is parsed vertically, from right to left, one column at a time. The most significant digit
is at the top, the least significant on the bottom, and the problems are still separated by columns
of all spaces. So the following math problems:

\`\`\`
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
\`\`\`

Now yield these human-readable problems:

- \`4 + 431 + 623 = 1058\`
- \`175 * 581 * 32 = 3253600\`
- \`8 + 248 + 369 = 625\`
- \`356 * 24 * 1 = 8544\`

I contemplated multiple different ways to parse the input by column, and I realized that numpy
actually has a great way to iterate by column that I could use for this. Using numpy's
\`genfromtxt()\` function, I can parse the entire string into an array, split character by
character, and then use the
[\`transpose\`](https://numpy.org/doc/stable/reference/generated/numpy.transpose.html)
property to iterate by column:

\`\`\`python
# delimiter=1 splits per character
input_grid = np.genfromtxt("input.txt", dtype="U1", delimiter=1) 

problems = []
cur_problem_numbers = []
for column in input_grid.T:
    column = list(column)

    # If the column is all empty, that means we're done with this problem's
    # numbers and should add them to the list of numbers per problem
    if "".join(column).strip() == "":
        problems.append(Problem(cur_problem_numbers))
        cur_problem_numbers = []

    # Parse this (now vertical) number, trimming any spaces that might be present
    new_num = "".join([digit for digit in column if digit in "1234567890"])
    if new_num != "":
        cur_problem_numbers.append(int(new_num))

# Append a problem with the final numbers we just parsed
problems.append(Problem(cur_problem_numbers))
\`\`\`

As we move through each column, we parse the number we see, being sure to only include valid digits
(and not the potential spaces in the column). When we reach a separator column, we build a new
problem with these numbers.

Next, we parse the ops in the last row similarly to part 1:

\`\`\`python
ops = [op_string.strip() for op_string in input_grid[-1, :] if op_string.strip() != ""]
for op, problem in zip(ops, problems):
    problem.set_op(OPS[op])
\`\`\`

With the completed list of problems, we obtain the grand total in the exact same way as in part 1:

\`\`\`python
print(sum([problem.solve() for problem in problems]))
\`\`\`

### Success! [**]
`;

export default markdown;
