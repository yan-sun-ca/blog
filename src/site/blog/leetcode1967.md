---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1967. Number of Strings That Appear as Substrings in Word



permalink: "blog/leetcode1967.html"
createdAt: "2023-05-08"
---

## LeetCode 1967. Number of Strings That Appear as Substrings in Word






#### Question
Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.

<p>&nbsp;</p>

**Example 1:**

    Input: patterns = ["a","abc","bc","d"], word = "abc"
    Output: 3
    Explanation:
    - "a" appears as a substring in "abc".
    - "abc" appears as a substring in "abc".
    - "bc" appears as a substring in "abc".
    - "d" does not appear as a substring in "abc".
    3 of the strings in patterns appear as a substring in word.

<p>&nbsp;</p>

**Example 2:**

    Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
    Output: 2
    Explanation:
    - "a" appears as a substring in "aaaaabbbbb".
    - "b" appears as a substring in "aaaaabbbbb".
    - "c" does not appear as a substring in "aaaaabbbbb".
    2 of the strings in patterns appear as a substring in word.

<p>&nbsp;</p>

**Example 3:**

    Input: patterns = ["a","a","a"], word = "ab"
    Output: 3
    Explanation: Each of the patterns appears as a substring in word "ab".

<p>&nbsp;</p>


**Constraints:**


* 1 <= patterns.length <= 100
* 1 <= patterns[i].length <= 100
* 1 <= word.length <= 100
* patterns[i] and word consist of lowercase English letters.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        counts = 0
        for pattern in patterns:
            if pattern in word:
                counts += 1
        return counts
```

**Java**