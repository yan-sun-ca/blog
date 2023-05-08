---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1684. Count the Number of Consistent Strings


permalink: "blog/leetcode1684.html"
createdAt: "2023-05-08"
---

## LeetCode 1684. Count the Number of Consistent Strings





#### Question
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

<p>&nbsp;</p>

**Example 1:**

    Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
    Output: 2
    Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

<p>&nbsp;</p>

**Example 2:**

    Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
    Output: 7
    Explanation: All strings are consistent.

<p>&nbsp;</p>

**Example 3:**

    Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
    Output: 4
    Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

<p>&nbsp;</p>


**Constraints:**


* 1 <= words.length <= 104
* 1 <= allowed.length <= 26
* 1 <= words[i].length <= 10
* The characters in allowed are distinct.
* words[i] and allowed contain only lowercase English letters.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        counts = len(words)
        for word in words:
            for l in word:
                if l not in allowed:
                    counts -= 1
                    break
        return counts
```

**Java**