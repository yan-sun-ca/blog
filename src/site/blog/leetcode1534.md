---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1534. Count Good Triplets


permalink: "blog/leetcode1534.html"
createdAt: "2023-05-08"
---

## LeetCode 1534. Count Good Triplets





#### Question
Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

* 0 <= i < j < k < arr.length
* |arr[i] - arr[j]| <= a
* |arr[j] - arr[k]| <= b
* |arr[i] - arr[k]| <= c

Where |x| denotes the absolute value of x.

Return the number of good triplets.

<p>&nbsp;</p>

**Example 1:**

    Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
    Output: 4
    Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

<p>&nbsp;</p>

**Example 2:**

    Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
    Output: 0
    Explanation: No triplet satisfies all conditions.

<p>&nbsp;</p>



**Constraints:**


* 3 <= arr.length <= 100
* 0 <= arr[i] <= 1000
* 0 <= a, b, c <= 1000




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        count = 0
        for i in range(len(arr) - 2):
            for j in range(i + 1, len(arr) -1):
                if abs(arr[i] - arr[j]) <= a:
                    for k in range(j + 1, len(arr)):
                        if abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c:
                            count += 1
                            print(arr[i], arr[j], arr[k])
        return count
```

**Java**