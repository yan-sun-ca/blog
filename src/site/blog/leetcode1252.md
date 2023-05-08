---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1252. Cells with Odd Values in a Matrix



permalink: "blog/leetcode1252.html"
createdAt: "2023-05-08"
---

## LeetCode 1252. Cells with Odd Values in a Matrix






#### Question
There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

Increment all the cells on row ri.
    
Increment all the cells on column ci.

Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

<p>&nbsp;</p>

**Example 1:**

<img src="../static/image/1252ex1.png" width="50%" height="50%" alt="1252ex2">

    Input: m = 2, n = 3, indices = [[0,1],[1,1]]
    Output: 6
    Explanation: Initial matrix = [[0,0,0],[0,0,0]].
    After applying first increment it becomes [[1,2,1],[0,1,0]].
    The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.

<p>&nbsp;</p>

**Example 2:**

<img src="../static/image/1252ex2.png" width="50%" height="50%" alt="1252ex2">

    Input: m = 2, n = 2, indices = [[1,1],[0,0]]
    Output: 0
    Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.

<p>&nbsp;</p>



**Constraints:**


* 1 <= m, n <= 50
* 1 <= indices.length <= 100
* 0 <= ri < m
* 0 <= ci < n




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        matrix = [[0 for _ in range(n) ] for _ in range(m)]
        counts = 0

        for column in range(n):
            for i in range(len(indices)):
                matrix[indices[i][0]][column] += 1
        for row in range(m):
            for j in range(len(indices)):
                matrix[row][indices[j][1]] += 1
        
        for elements in matrix:
            for element in elements:
                if element % 2 != 0:
                    counts += 1
        return counts
```

**Java**