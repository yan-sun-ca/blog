---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 709. To Lower Case



permalink: "blog/leetcode709.html"
createdAt: "2023-05-08"
---

## LeetCode 709. To Lower Case





#### Question
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

<p>&nbsp;</p>

**Example 1:**

    Input: s = "Hello"
    Output: "hello"

<p>&nbsp;</p>

**Example 2:**

    Input: s = "here"
    Output: "here"

<p>&nbsp;</p>

**Example 3:**

    Input: s = "LOVELY"
    Output: "lovely"

<p>&nbsp;</p>


**Constraints:**


* 1 <= s.length <= 100
* s consists of printable ASCII characters.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def toLowerCase(self, s: str) -> str:
        return s.lower()
```

**Java**