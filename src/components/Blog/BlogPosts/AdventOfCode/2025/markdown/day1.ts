const markdown = `## The Problem

[Puzzle link](https://www.adventofcode.com/2025/day/1)

Day 1 tasked us with keeping track of which numbers a safe dial is pointing at while we follow
instructions to turn it. The safe has ticks for numbers \`0-99\`.

## Part 1

For part 1, we're asked how many times the dial's arrow points exactly at \`0\` after following
each instruction to turn the dial a certain number of clicks right or left. I don't notice any
signs of optimal substructure that pushed me towards a
[Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming) (DP) solution, nor do I
see any optimizations that preprocessing the input would provide. Therefore, I went ahead and
designed a solution that looked at each instruction one at a time and processed each once.

The tricky bit here is ensuring that the boundaries of the dial are understood, so that an
instruction of \`R5\` ("turn the dial to the right 5 clicks") when the dial is pointed at \`99\`
leaves the dial pointing at \`4\`, not the nonexistent \`104\` tick.

\`\`\`python
cur_num = 50 # The starting number
count = 0
for instruction in instructions:
    change = (                     ⌉
        -int(instruction[1:])      |
        if instruction[0] == "L"   | # Parse the instructions to determine how many
        else int(instruction[1:])  | # click to turn the dial left or right
    )                              ⌋
    new_num_unbounded = cur_num + change # calculate the new number after turning the dial
    next_num = (                                              ⌉
        new_num_unbounded                                     | # Ensure the number 
        if 0 <= new_num_unbounded and new_num_unbounded < 100 | # stays bounded
        else new_num_unbounded % 100                          |
    )                                                         ⌋

    count += 1 if next_num == 0 else 0 # Increment the count if we end up pointing at 0

print(count)
\`\`\`

### Success! [*]

----
## Part 2

Part two of Advent of Code problems usually involve iterating on your previous solution. One
hopes that their implementation of part 1 is easily adaptable for part 2.

Part 2 asks us to calculate how many times the dial _ever_ points at \`0\` (not just when it stops
exactly on \`0\`). Based on our last solution, this actually isn't too drastic of a change. Rather
than checking the final value of the dial after each instruction, we'll check if the current
instruction caused us to wrap around to the beginning, and then use some math to see how many times
we wrapped:

\`\`\`python
cur_num = 50
count = 0
for instruction in instructions:
    change = -int(instruction[1:]) if instruction[0] == "L" else int(instruction[1:])
    new_num_unbounded = cur_num + change
    next_num = (
        new_num_unbounded
        if 0 <= new_num_unbounded and new_num_unbounded < 100
        else new_num_unbounded % 100
    )

    if new_num_unbounded <= 0 or new_num_unbounded >= 100:   ⌉  
        passed_zero = int(abs(new_num_unbounded / 100)) + 1  |
        count += (                                           |
            passed_zero                                      | # This if statement avoids 
            if change < 0 and cur_num != 0                   | # double counting for landing
            else passed_zero - 1                             | # exactly on 0
        )                                                    ⌋ 
    
    cur_num = next_num

print(count)
\`\`\`

### Success! [**]
`;

export default markdown;
