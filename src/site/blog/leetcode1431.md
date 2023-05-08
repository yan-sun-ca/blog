---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1431. Kids With the Greatest Number of Candies


permalink: "blog/leetcode1431.html"
createdAt: "2023-05-08"
---

## LeetCode 1431. Kids With the Greatest Number of Candies


#### Question
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

<p>&nbsp;</p>

**Example 1:**

    Input: candies = [2,3,5,1,3], extraCandies = 3
    Output: [true,true,true,false,true] 
    Explanation: If you give all extraCandies to:
    - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
    - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
    - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
    - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
    - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

<p>&nbsp;</p>

**Example 2:**

    Input: candies = [4,2,1,1,2], extraCandies = 1
    Output: [true,false,false,false,false] 
    Explanation: There is only 1 extra candy.
    Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

<p>&nbsp;</p>

**Example 3:**

    Input: candies = [12,1,12], extraCandies = 10
    Output: [true,false,true]

<p>&nbsp;</p>


**Constraints:**


* n == candies.length
* 2 <= n <= 100
* 1 <= candies[i] <= 100
* 1 <= extraCandies <= 50




<p>&nbsp;</p>

---

<p>&nbsp;</p> 

#### Solution
**Python**
```Python
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        newlist = []
        for i in range(0,len(candies)):
            if candies[i]+ extraCandies >= self.maxcandies(candies):
                newlist.append(True)
            else:
                newlist.append(False)
        return newlist
        
    def maxcandies(self, lst: List[int]):
        maxvalue = lst[0]
        for j in range(0,len(lst)):
            if lst[j] > maxvalue:
                maxvalue = lst[j]
        return maxvalue
```

**Java**