---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 2418. Sort the People



permalink: "blog/leetcode2841.html"
createdAt: "2023-05-08"
---

## LeetCode 2418. Sort the People






#### Question
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

<p>&nbsp;</p>

**Example 1:**

    Input: names = ["Mary","John","Emma"], heights = [180,165,170]
    Output: ["Mary","Emma","John"]
    Explanation: Mary is the tallest, followed by Emma and John.

<p>&nbsp;</p>

**Example 2:**

    Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
    Output: ["Bob","Alice","Bob"]
    Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

<p>&nbsp;</p>



**Constraints:**


* n == names.length == heights.length
* 1 <= n <= 103
* 1 <= names[i].length <= 20
* 1 <= heights[i] <= 105
* names[i] consists of lower and upper case English letters.
* All the values of heights are distinct.




<p>&nbsp;</p>

---
  

#### Solution
**Python**
```Python
class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        max = heights[0]
        for i in range(0,len(heights)):
            currentMax = self.mymax(heights[i:]) 
            currentMaxIndex = i + heights[i:].index(currentMax)
            if heights[i] != currentMax:
                heights[i], heights[currentMaxIndex] = currentMax, heights[i]
                names[i], names[currentMaxIndex] = names[currentMaxIndex], names[i]
        return(names)
    def mymax(self, lst: List[int]):
        maxnumber = lst[0]
        for j in range(0,len(lst)):
            if lst[j] > maxnumber:
                maxnumber = lst[j]
        return maxnumber
```

**Java**