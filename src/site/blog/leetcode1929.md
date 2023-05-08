---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1929. Concatenation of Array



permalink: "blog/leetcode1929.html"
createdAt: "2023-05-08"
---

## LeetCode 1929. Concatenation of Array


#### Question
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [1,2,1]
    Output: [1,2,1,1,2,1]
    Explanation: The array ans is formed as follows:
    - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
    - ans = [1,2,1,1,2,1]

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [1,3,2,1]
    Output: [1,3,2,1,1,3,2,1]
    Explanation: The array ans is formed as follows:
    - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
    - ans = [1,3,2,1,1,3,2,1]

<p>&nbsp;</p>




**Constraints:**


* n == nums.length
* 1 <= n <= 1000
* 1 <= nums[i] <= 1000




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        ans = [0 for x in range(0, 2*len(nums))]
        for i in range(0,len(nums)):
            ans[i] = nums[i]
        for n in range(len(nums), len(ans)):
            ans[n] = nums[n-len(nums)]
        return ans
```

**Java**