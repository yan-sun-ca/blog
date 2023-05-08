---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1572. Matrix Diagonal Sum



permalink: "blog/leetcode1572.html"
createdAt: "2023-05-08"
---

## LeetCode 1572. Matrix Diagonal Sum






#### Question
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.



<p>&nbsp;</p>

**Example 1:**

<img src="../static/image/1572ex1.png" alt="1572ex1">

    Input: mat = [[1,2,3],
                [4,5,6],
                [7,8,9]]
    Output: 25
    Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
    Notice that element mat[1][1] = 5 is counted only once.

<p>&nbsp;</p>

**Example 2:**

    Input: mat = [[1,1,1,1],
                  [1,1,1,1],
                  [1,1,1,1],
                  [1,1,1,1]]
    Output: 8

<p>&nbsp;</p>

**Example 3:**

    Input: mat = [[5]]
    Output: 5

<p>&nbsp;</p>


**Constraints:**


* n == mat.length == mat[i].length
* 1 <= n <= 100
* 1 <= mat[i][j] <= 100




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        sum =sum1 =sum2 = 0
        for row in range(len(mat)):
            for column in range(len(mat[row])):
                if row == column:
                    print(row, column)
                    sum1 += mat[row][column]
                if row + column == len(mat) -1:
                    print(row, column)
                    sum2 += mat[row][column]
        if len(mat) % 2 == 1:
            sum = sum1 + sum2 - mat[int(len(mat)/2)][int(len(mat)/2)]
        else:
            sum = sum1 + sum2
            
        return sum
```

**Java**