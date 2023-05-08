---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1470. Shuffle the Array



permalink: "blog/leetcode1470.html"
createdAt: "2023-05-08"
---

## LeetCode 1470. Shuffle the Array






#### Question
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

<p>&nbsp;</p>

**Example 1:**

    Input: nums = [2,5,1,3,4,7], n = 3
    Output: [2,3,5,4,1,7] 
    Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

<p>&nbsp;</p>

**Example 2:**

    Input: nums = [1,2,3,4,4,3,2,1], n = 4
    Output: [1,4,2,3,3,2,4,1]

<p>&nbsp;</p>

**Example 3:**

    Input: nums = [1,1,2,2], n = 2
    Output: [1,2,1,2]

<p>&nbsp;</p>


**Constraints:**


* 1 <= n <= 500
* nums.length == 2n
* 1 <= nums[i] <= 10^3




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        lst1 = []
        lst2 = []
        lst = []
        for i in range(int(len(nums)/2)):
            lst1.append(nums[i])
        for j in range(int(len(nums)/2),len(nums)):
            lst2.append(nums[j])
    
        for k in range(len(lst1)):
            lst.append(lst1[k])
            lst.append(lst2[k])
        return lst
```

**Java**