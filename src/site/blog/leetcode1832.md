---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1832. Check if the Sentence Is Pangram



permalink: "blog/leetcode1832.html"
createdAt: "2023-05-08"
---

## LeetCode 1832. Check if the Sentence Is Pangram



#### Question
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

<p>&nbsp;</p>

**Example 1:**

    Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
    Output: true
    Explanation: sentence contains at least one of every letter of the English alphabet.

<p>&nbsp;</p>

**Example 2:**

    Input: sentence = "leetcode"
    Output: false

<p>&nbsp;</p>



**Constraints:**


* 1 <= sentence.length <= 1000
* sentence consists of lowercase English letters.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        all_character = [0] * 26
        for i in sentence:
            all_character[ord(i)- ord('a')] += 1
        for j in all_character:
            if j == 0:
                return False
        return True
```

**Java**