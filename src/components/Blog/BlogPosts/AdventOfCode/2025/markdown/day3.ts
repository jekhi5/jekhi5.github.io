import { CHECK_MARK } from 'utils/unicodeMarks';

const markdown = `## The Problem

[Puzzle link](https://www.adventofcode.com/2025/day/3)

Day 3 tasks us with finding the largest number made up of digits from a string of digits.

## Part 1

Part 1 stipulates that we must build the largest 2-digit numbers using digits from a string of
15-digits reading left-to-right. Once we have all of the largest 2-digit numbers, we should sum
them. I suspect part 2 will have us build a longer number, so I'm keeping that in mind while I
attempt to solve part 1.

Example: Using the digits: \`987654321111111\`, we can build \`98\` from the first two digits
Example: Using the digits \`818181911112111\`, we can build \`92\` using the center \`9\` and the
latter \`2\`

Implementing this took me some time, but through discussions with friends, a key realization ended
up leading me to my solution:

- Since the leftmost digit in any number is the most significant one, if you try to push each newly
considered digit as far left as possible (we'll define "possible" in a second), you'll end with the
largest number with the specified number of digits

The pseudocode looks something like this:

\`\`\`python
final_number_digits = []
final_number_digits.append(selection_string[1]) # Start with first digit in the string
for potential_digit in selection_string[1:]: # Start considering all digits after the first
  while (
    final_number_digits has digits left
    AND potential_digit > right-most digit in final_number_digits
    AND there are enough digits in selection_string after this one to reach desired length
  ):
    final_number_digits.pop()
  
  final_number_digits.append(potential_number) # As far left as we can go; slot in this digit

# The final number might have more trailing digits than needed, just pull the first 2
# To convince yourself of this, try tracing this with a selection string of "95111"
return final_number_digits[0:2] 
\`\`\`

That last condition is vital. Consider the selection string of \`219\`. At a certain point in our
program, \`final_number_digits\` will be \`[2]\` and we'll be considering the final digit in the
selection string, \`9\`.

- \`final_number_digits\` has digits left [${CHECK_MARK}]
- \`potential_digit\` (\`9\`) is greater than the right-most digit in \`final_number\` (\`2\`) [${CHECK_MARK}]
- _**but**_, if we pop \`2\` off of the final number and then append \`9\`, there would be no more 
digits in \`selection_string\` to make a 2-digit number. Thus, the largest 2-digit number we can 
construct from \`219\` is \`29\`.

Turning this into actual Python code and adding the input-parsing logic:

\`\`\`python
def find_largest_number(line: str, max_digits: int) -> int:
    stack = [line[0]]

    for index, cur_digit_as_string in enumerate(list(line)):
        if index == 0:
            continue

        while (
            len(stack) > 0
            and int(cur_digit_as_string) > int(stack[-1])
            and len(stack) + (len(line) - (index)) > max_digits
        ):
            stack.pop()

        stack.append(cur_digit_as_string)

    return int("".join(stack[0:max_digits]))

total = 0

for line in lines:
    result = find_largest_number(line, 2)
    total += result

print(total)
\`\`\`

### Success! [*]

----
## Part 2

Part 2 is the same as part 1, just with 12-digit numbers!

\`\`\`python
for line in lines:
    result = find_largest_number(line, -> 12 <-)
    total += result

print(total)
\`\`\`

### Success! [**]
`;

export default markdown;
