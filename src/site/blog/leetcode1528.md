---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1528. Shuffle String

permalink: "blog/leetcode1528.html"
createdAt: "2023-05-08"
---

## LeetCode 1528. Shuffle String


#### Question
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

<p>&nbsp;</p>

**Example 1:**

<img src="../static/image/1528q1.jpg" alt="1528q1">

    Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
    Output: "leetcode"
    Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

<p>&nbsp;</p>

**Example 2:**

    Input: s = "abc", indices = [0,1,2]
    Output: "abc"
    Explanation: After shuffling, each character remains in its position.

<p>&nbsp;</p>



**Constraints:**



* s.length == indices.length == n
* 1 <= n <= 100
* s consists of only lowercase English letters.
* 0 <= indices[i] < n
* All values of indices are unique.


<p>&nbsp;</p>

---

<p>&nbsp;</p>

#### Solution
**Python**
```Python
class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        original_lst = list(s)
        lst = list(s)
        s1 = ""
        for i in range(0,len(original_lst)):
            index = indices[i]
            lst[index] = original_lst[i]        
        return s1.join(lst)
```

**Java**