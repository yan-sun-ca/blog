---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1480. Running Sum of 1d Array



permalink: "blog/leetcode1480.html"
createdAt: "2023-05-08"
---

## LeetCode 1480. Running Sum of 1d Array



#### Question
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

<p>&nbsp;</p>

**Example 3:**

    Input: nums = [3,1,2,10,1]
    Output: [3,4,6,16,17]

<p>&nbsp;</p>


**Constraints:**


* 1 <= nums.length <= 1000
* -10^6 <= nums[i] <= 10^6




<p>&nbsp;</p>

---
  

#### Solution
**Python**
```Python
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        sum = [nums[0] for x in range(0,len(nums))]
        sums = 0
        for i in range(0,len(nums)):
            sum[i] = sums + nums[i]
            sums += nums[i]
        return sum
```

**Java**