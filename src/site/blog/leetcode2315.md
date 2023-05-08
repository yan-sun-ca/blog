---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 2315. Count Asterisks


permalink: "blog/leetcode2315.html"
createdAt: "2023-05-08"
---

## LeetCode 2315. Count Asterisks





#### Question
You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

Return the number of '*' in s, excluding the '*' between each pair of '|'.

Note that each '|' will belong to exactly one pair.

<p>&nbsp;</p>

**Example 1:**

    Input: s = "l|*e*et|c**o|*de|"
    Output: 2
    Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
    The characters between the first and second '|' are excluded from the answer.
    Also, the characters between the third and fourth '|' are excluded from the answer.
    There are 2 asterisks considered. Therefore, we return 2.

<p>&nbsp;</p>

**Example 2:**

    Input: s = "iamprogrammer"
    Output: 0
    Explanation: In this example, there are no asterisks in s. Therefore, we return 0.

<p>&nbsp;</p>

**Example 3:**

    Input: s = "yo|uar|e**|b|e***au|tifu|l"
    Output: 5
    Explanation: The considered characters are underlined: "yo|uar|e**|b|e***au|tifu|l". There are 5 asterisks considered. Therefore, we return 5.

<p>&nbsp;</p>


**Constraints:**


* 1 <= s.length <= 1000
* s consists of lowercase English letters, vertical bars '|', and asterisks '*'.
* s contains an even number of vertical bars '|'.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def countAsterisks(self, s: str) -> int:
        A = s.split('|')
        n = len(A)
        res = 0
        for i in range(0, n, 2):
            print(i)
            res += A[i].count("*")
        return res
```

**Java**