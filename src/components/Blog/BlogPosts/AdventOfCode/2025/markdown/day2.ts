const markdown = `## The Problem

[Puzzle link](https://www.adventofcode.com/2025/day/2)

Day 2 tasked us with identifying invalid IDs among different ranges of numbers.

## Part 1

Part 1 stipulates that an invalid ID is one in which the first half of the ID is the same as the
second half.

- Example: \`55\` is invalid because the first half (\`5\`) is the same as the second half
(also \`5\`).
- Example: \`123123\` is invalid (\`123\` == \`123\`).

IDs \`101\`, \`55443322\`, or any other ID in which the first half isn't the same as the second
half are valid. The puzzle asks us to add together all of the invalid IDs in the puzzle input.
While I was unable to find a mathematical solution to determining which numbers in a range are
invalid without needing to iterate over each of them, the alternative iterative approach did not
seem too computationally expensive. Simply looking at each number in the range and determining
its validity by comparing the first half to the latter yields a clean and simple solution:

\`\`\`python
def is_invalid(id: str) -> bool:
    return id[: int(len(id) / 2)] == id[int(len(id) / 2) :]
\`\`\`

There is a _slight_ optimization given that all IDs with an odd number of digits must be valid
since there is no way to evenly split them into first and second halves, and thus the two halves
will never be equal:

\`\`\`python
def is_invalid(id: str) -> bool:
    return (
  ->  len(id) % 2 == 0
      and id[: int(len(id) / 2)] == id[int(len(id) / 2) :]
    )
\`\`\`

The time complexity for \`len(str)\` is \`O(1)\` and the time complexity for string slicing is
\`O(y-x)\` where \`x\` is the leading index and \`y\` is the trailing index
[[source](https://www.geeksforgeeks.org/python/complexity-cheat-sheet-for-python-operations)].
While the worst case of this check is still \`O((n / 2) * 2) == O(n)\`, where \`n\` is the length
of the ID, the best case drops to \`Ω(1)\`.

Once we have that, all we need to do is iterate over each ID in every range and total up the
invalid IDs:

\`\`\`python
def count_invalid_in_range(start: int, end: int) -> int:
    count = 0
    for id in range(start, end + 1):
        count += id if is_invalid(str(id)) else 0

    return count


count = 0
for range in ranges:
    start, end = range.split("-")
    count += count_invalid_in_range(int(start), int(end))

return count
\`\`\`


### Success! [*]

----
## Part 2

Part 2 complicates things by saying invalid IDs are now ones that have ANY number of repeats. So
where \`824824824\` would have been valid in part 1, it's now _invalid_ because \`824\` repeats 3
times. This smells strongly of a Dynamic Programming problem.

I tried hard to see if I could find where the optimal substructure lay on my own, but I was
unsuccessful. In doing some research, I found the
[Knuth-Morris-Pratt algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)
that seemed to be applicable to this problem. This algorithm efficiently finds the length of the
longest prefix that is also a suffix.

- Example: \`KMP("ABCABC") -> 3\` ("ABC" is the longest prefix that is also a suffix)
- Example: \`KMP("ABCDABC") -> 3\` ("ABC" is still the longest prefix that is also a suffix)
- Example: \`KMP("ABCABCD") -> 0\` (There is no prefix that is also a suffix)


I set up the memo table following the description of the algorithm, like this:

\`\`\`python
def fill_lps_memo_table(string: str, string_length: int, memo_table: list[int]) -> None:
    prev_length = 0
    i = 1
    memo_table[0] = 0

    while i < string_length:
        if string[i] == string[prev_length]:
            prev_length += 1
            memo_table[i] = prev_length
            i += 1
        else:
            if prev_length != 0:
                prev_length = memo_table[prev_length - 1]
            else:
                memo_table[i] = 0
                i += 1
\`\`\`

This fills the given memo table such that the last index in the table is the length of the longest
prefix that is also the suffix. Modifying the \`is_invalid()\` function to use this new memo table
yields the following:

\`\`\`python
def is_invalid(id: str) -> bool:
    length = len(id)
    longest_prefix_suffix_memo = [0 for _ in range(length)]

    fill_lps_memo_table(id, length, longest_prefix_suffix_memo)

    return longest_prefix_suffix_memo[-1] > 0
\`\`\`

**But wait!** This solution is **wrong**. Can you spot it? The KMP algorithm finds the longest
prefix that is also a suffix, but that doesn't mean that the found prefix evenly fits into the
string...

Example: \`KMP("121212121") -> 5\` ("12121" is the longest prefix and suffix)

But this uses the center \`1\` in _both_ the prefix and the suffix. According to the puzzle's
definition of an invalid ID: "an ID is invalid if it is made _**only**_ of some sequence of digits
repeated at least twice." There is no single repeatable chunk within this ID such that the ID is
_only_ made up of that substring. So, in order to weed out this edge case, we need to add the
following check:

\`\`\`python
def is_invalid(id: str) -> bool:
    length = len(id)
    longest_prefix_suffix_memo = [0 for _ in range(length)]

    fill_lps_memo_table(id, length, longest_prefix_suffix_memo)

    return (
        longest_prefix_suffix_memo[-1] > 0
    ->  and length % (length - longest_prefix_suffix_memo[-1]) == 0
    )
\`\`\`

### Success! [**]
`;

export default markdown;
