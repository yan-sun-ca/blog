---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1365. How Many Numbers Are Smaller Than the Current Number


permalink: "blog/leetcode1365.html"
createdAt: "2023-05-08"
---

## LeetCode 1365. How Many Numbers Are Smaller Than the Current Number





#### Question
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [8,1,2,2,3]
    Output: [4,0,1,1,3]
    Explanation: 
    For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
    For nums[1]=1 does not exist any smaller number than it.
    For nums[2]=2 there exist one smaller number than it (1). 
    For nums[3]=2 there exist one smaller number than it (1). 
    For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [6,5,4,8]
    Output: [2,1,0,3]

<p>&nbsp;</p>

**Example 3:**

    Input: nums = [7,7,7,7]
    Output: [0,0,0,0]

<p>&nbsp;</p>


**Constraints:**

* 2 <= nums.length <= 500
* 0 <= nums[i] <= 100



<p>&nbsp;</p>

---
  

#### Solution
**Python**
```Python
class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        count = [0 for x in range(0,len(nums))]
        for i in range(0,len(nums)):
            for j in range(0,len(nums)):
                if nums[i] > nums[j]:
                    count[i] += 1
        return count
```

**Java**