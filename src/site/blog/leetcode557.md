---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 557. Reverse Words in a String III



permalink: "blog/leetcode557.html"
createdAt: "2023-05-08"
---

## LeetCode 557. Reverse Words in a String III






#### Question
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

<p>&nbsp;</p>

**Example 1:**

    Input: s = "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"

<p>&nbsp;</p>

**Example 2:**

    Input: s = "God Ding"
    Output: "doG gniD"


<p>&nbsp;</p>


**Constraints:**


* 1 <= s.length <= 5 * 104
* s contains printable ASCII characters.
* s does not contain any leading or trailing spaces.
* There is at least one word in s.
* All the words in s are separated by a single space.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def reverseWords(self, s: str) -> str:
        list_s = s.split()
        reverse_s = []
        for j in list_s:
            reverse_s.append(self.reverse(j))
        return " ".join(reverse_s)

    def reverse(self, word):
        reverse_word = ""
        for i in range(len(word)-1,-1,-1):
            reverse_word += word[i]
        return reverse_word
```

**Java**