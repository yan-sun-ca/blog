---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1512. Number of Good Pairs



permalink: "blog/leetcode1512.html"
createdAt: "2023-05-08"
---

## LeetCode 1512. Number of Good Pairs






#### Question
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [1,1,1,1]
    Output: 6
    Explanation: Each pair in the array are good.

<p>&nbsp;</p>

**Example 3:**

    Input: nums = [1,2,3]
    Output: 0

<p>&nbsp;</p>


**Constraints:**


* 1 <= nums.length <= 100
* 1 <= nums[i] <= 100




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        for i in range(len(nums)-1):
            for j in range(i+1,len(nums)):
                if nums[i] == nums[j]:
                    count += 1
        return count
```

**Java**