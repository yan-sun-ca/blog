---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1464. Maximum Product of Two Elements in an Array



permalink: "blog/leetcode1464.html"
createdAt: "2023-05-08"
---

## LeetCode 1464. Maximum Product of Two Elements in an Array






#### Question
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1). 

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [3,4,5,2]
    Output: 12 
    Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [1,5,4,5]
    Output: 16
    Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

<p>&nbsp;</p>

**Example 3:**

    Input: nums = [3,7]
    Output: 12

<p>&nbsp;</p>


**Constraints:**


* 2 <= nums.length <= 500
* 1 <= nums[i] <= 10^3




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        result = []
        for i in range(len(nums) -1):
            for j in range(i+1, len(nums)):
                result.append((nums[i] - 1) * (nums[j] -1))
        return max(result)
```

**Java**