---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 2206. Divide Array Into Equal Pairs



permalink: "blog/leetcode2206.html"
createdAt: "2023-05-08"
---

## LeetCode 2206. Divide Array Into Equal Pairs






#### Question
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

* Each element belongs to exactly one pair.
* The elements present in a pair are equal.

Return true if nums can be divided into n pairs, otherwise return false.

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [3,2,3,2,2,2]
    Output: true
    Explanation: 
    There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
    If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [1,2,3,4]
    Output: false
    Explanation: 
    There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.

<p>&nbsp;</p>



**Constraints:**


* nums.length == 2 * n
* 1 <= n <= 500
* 1 <= nums[i] <= 500




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        pairs = len(nums) / 2
        count = 0
        dict_nums = {}
        for i in nums:
            if i in dict_nums.keys():
                dict_nums[i] += 1
            else:
                dict_nums[i] = 1

        for k in dict_nums.keys():
            if dict_nums[k] % 2 == 1:
                return False
            else:
                count += dict_nums[k]
        if count % pairs == 0:
            return True
        return False
```

**Java**