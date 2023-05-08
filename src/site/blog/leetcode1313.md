---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1313. Decompress Run-Length Encoded List



permalink: "blog/leetcode1313.html"
createdAt: "2023-05-08"
---

## LeetCode 1313. Decompress Run-Length Encoded List






#### Question
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [1,2,3,4]
    Output: [2,4,4,4]
    Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
    The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
    At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [1,1,2,3]
    Output: [1,3,3]

<p>&nbsp;</p>




**Constraints:**


* 2 <= nums.length <= 100
* nums.length % 2 == 0
* 1 <= nums[i] <= 100




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        newnums = []
        for j in range(0,len(nums),2):
            newnums += (nums[j] * [nums[j+1]])
        return newnums
```

**Java**