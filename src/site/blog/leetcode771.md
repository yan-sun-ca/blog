---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 771. Jewels and Stones



permalink: "blog/leetcode771.html"
createdAt: "2023-05-08"
---

## LeetCode 771. Jewels and Stones



#### Question
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

<p>&nbsp;</p>

**Example 1:**

    Input: jewels = "aA", stones = "aAAbbbb"
    Output: 3

<p>&nbsp;</p>

**Example 2:**

    Input: jewels = "z", stones = "ZZ"
    Output: 0

<p>&nbsp;</p>



**Constraints:**


* 1 <= jewels.length, stones.length <= 50
* jewels and stones consist of only English letters.
* All the characters of jewels are unique.




<p>&nbsp;</p>

---
  

#### Solution
**Python**
```Python
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        list_jewels = list(jewels)
        list_stones = list(stones)
        count = 0
        for i in list_jewels:
            for j in list_stones:
                if i == j:
                    count += 1
        return count
```

**Java**