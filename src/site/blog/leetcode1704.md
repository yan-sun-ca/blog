---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1704. Determine if String Halves Are Alike



permalink: "blog/leetcode1704.html"
createdAt: "2023-05-08"
---

## LeetCode 1704. Determine if String Halves Are Alike






#### Question
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

<p>&nbsp;</p>

**Example 1:**

    Input: s = "book"
    Output: true
    Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

<p>&nbsp;</p>

**Example 2:**

    Input: s = "textbook"
    Output: false
    Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
    Notice that the vowel o is counted twice.

<p>&nbsp;</p>



**Constraints:**


* 2 <= s.length <= 1000
* s.length is even.
* s consists of uppercase and lowercase letters.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        count_a = count_b = 0
        VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        index_halves = int(len(s) / 2)
        a = s[:index_halves]
        b = s[index_halves:]
        for i in a:
            if i in VOWELS:
                count_a += 1
        for j in b:
            if j in VOWELS:
                count_b += 1
        
        if count_a == count_b:
            return True
        else:
            return False
```

**Java**