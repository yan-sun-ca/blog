---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1389. Create Target Array in the Given Order



permalink: "blog/leetcode1389.html"
createdAt: "2023-05-08"
---

## LeetCode 1389. Create Target Array in the Given Order



#### Question
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

* Initially target array is empty.
* From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
* Repeat the previous step until there are no elements to read in nums and index.

Return the target array.

It is guaranteed that the insertion operations will be valid.

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
    Output: [0,4,1,3,2]
    Explanation:
    nums       index     target
    0            0        [0]
    1            1        [0,1]
    2            2        [0,1,2]
    3            2        [0,1,3,2]
    4            1        [0,4,1,3,2]

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
    Output: [0,1,2,3,4]
    Explanation:
    nums       index     target
    1            0        [1]
    2            1        [1,2]
    3            2        [1,2,3]
    4            3        [1,2,3,4]
    0            0        [0,1,2,3,4]

<p>&nbsp;</p>

**Example 3:**

    Input: nums = [1], index = [0]
    Output: [1]

<p>&nbsp;</p>


**Constraints:**


* 1 <= nums.length, index.length <= 100
* nums.length == index.length
* 0 <= nums[i] <= 100
* 0 <= index[i] <= i




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        newlist = []
        for i in range(len(nums)):
            newlist.insert(index[i],nums[i])
        return newlist
```

**Java**