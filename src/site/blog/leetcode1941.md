---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1941. Check if All Characters Have Equal Number of Occurrences



permalink: "blog/leetcode1941.html"
createdAt: "2023-05-08"
---

## LeetCode 1941. Check if All Characters Have Equal Number of Occurrences






#### Question
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

<p>&nbsp;</p>

**Example 1:**

    Input: s = "abacbc"
    Output: true
    Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

<p>&nbsp;</p>

**Example 2:**

    Input: s = "aaabb"
    Output: false
    Explanation: The characters that appear in s are 'a' and 'b'.
    'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

<p>&nbsp;</p>



**Constraints:**


* 1 <= s.length <= 1000
* s consists of lowercase English letters.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        characters = {}
        set_characters = set()
        for i in s:
            if i in characters.keys():
                characters[i] += 1
            else:
                characters[i] = 1
        set_characters = set(characters.values())

        if len(set_characters) == 1:
            return True
        else:
            return False
```

**Java**