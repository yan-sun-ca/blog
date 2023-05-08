---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 2032. Two Out of Three



permalink: "blog/leetcode2302.html"
createdAt: "2023-05-08"
---

## LeetCode 2032. Two Out of Three






#### Question
Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order. 

<p>&nbsp;</p>

**Example 1:**

    Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
    Output: [3,2]
    Explanation: The values that are present in at least two arrays are:
    - 3, in all three arrays.
    - 2, in nums1 and nums2.

<p>&nbsp;</p>

**Example 2:**

    Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
    Output: [2,3,1]
    Explanation: The values that are present in at least two arrays are:
    - 2, in nums2 and nums3.
    - 3, in nums1 and nums2.
    - 1, in nums1 and nums3.

<p>&nbsp;</p>

**Example 3:**

    Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
    Output: []
    Explanation: No value is present in at least two arrays.

<p>&nbsp;</p>


**Constraints:**


* 1 <= nums1.length, nums2.length, nums3.length <= 100
* 1 <= nums1[i], nums2[j], nums3[k] <= 100




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        set_nums1 = set(nums1)
        set_nums2 = set(nums2)
        set_nums3 = set(nums3)
        dict_nums = {}
        two_elements = []
        for i in set_nums1:
            if i in dict_nums:
                dict_nums[i] += 1
            else:
                dict_nums[i] = 1
        for j in set_nums2:
            if j in dict_nums:
                dict_nums[j] += 1
            else:
                dict_nums[j] = 1
        for k in set_nums3:
            if k in dict_nums:
                dict_nums[k] += 1
            else:
                dict_nums[k] = 1
        for key in dict_nums.keys():
            if dict_nums[key] >= 2:
                two_elements.append(key)
        return two_elements
```

**Java**