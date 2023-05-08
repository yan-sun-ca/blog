---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 9. Palindrome Number



permalink: "blog/leetcode9.html"
createdAt: "2023-05-08"
---

## LeetCode 9. Palindrome Number






#### Question
Given an integer x, return true if x is a
palindrome, and false otherwise.

<p>&nbsp;</p>

**Example 1:**

    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

<p>&nbsp;</p>

**Example 2:**

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

<p>&nbsp;</p>

**Example 3:**

    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

<p>&nbsp;</p>


**Constraints:**

* -231 <= x <= 231 - 1



<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        original_list = list(str(x))
        new_list = list(str(x))
        new_list.reverse()
        if original_list == new_list:
            return True
        return False
```

**Java**