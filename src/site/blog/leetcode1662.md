---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1662. Check If Two String Arrays are Equivalent



permalink: "blog/leetcode1662.html"
createdAt: "2023-05-08"
---

## LeetCode 1662. Check If Two String Arrays are Equivalent



#### Question
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

<p>&nbsp;</p>

**Example 1:**

    Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
    Output: true
    Explanation:
    word1 represents string "ab" + "c" -> "abc"
    word2 represents string "a" + "bc" -> "abc"
    The strings are the same, so return true.

<p>&nbsp;</p>

**Example 2:**

    Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
    Output: false

<p>&nbsp;</p>

**Example 3:**

    Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
    Output: true

<p>&nbsp;</p>


**Constraints:**


* 1 <= word1.length, word2.length <= 103
* 1 <= word1[i].length, word2[i].length <= 103
* 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
* word1[i] and word2[i] consist of lowercase letters.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        word1_full = ""
        word2_full = ""
        for i in word1:
            word1_full += i
        for j in word2:
            word2_full += j
        if word1_full == word2_full:
            return True
        return False
```

**Java**