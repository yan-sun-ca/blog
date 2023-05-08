---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 2000. Reverse Prefix of Word



permalink: "blog/leetcode2000.html"
createdAt: "2023-05-08"
---

## LeetCode 2000. Reverse Prefix of Word






#### Question
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

* For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".

Return the resulting string.

<p>&nbsp;</p>

**Example 1:**

    Input: word = "abcdefd", ch = "d"
    Output: "dcbaefd"
    Explanation: The first occurrence of "d" is at index 3. 
    Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

<p>&nbsp;</p>

**Example 2:**

    Input: word = "xyxzxe", ch = "z"
    Output: "zxyxxe"
    Explanation: The first and only occurrence of "z" is at index 3.
    Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

<p>&nbsp;</p>

**Example 3:**

    Input: word = "abcd", ch = "z"
    Output: "abcd"
    Explanation: "z" does not exist in word.
    You should not do any reverse operation, the resulting string is "abcd".

<p>&nbsp;</p>


**Constraints:**


* 1 <= word.length <= 250
* word consists of lowercase English letters.
* ch is a lowercase English letter.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        index = 0
        for i in range(len(word)):
            if word[i] == ch:
                index = i
                break        
        word = word[:index + 1][::-1] + word[index + 1:]
        return word
```

**Java**