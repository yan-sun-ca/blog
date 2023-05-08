---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 832. Flipping an Image


permalink: "blog/leetcode832.html"
createdAt: "2023-05-08"
---

## LeetCode 832. Flipping an Image





#### Question
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

* For example, flipping [1,1,0] horizontally results in [0,1,1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

* For example, inverting [0,1,1] results in [1,0,0].


<p>&nbsp;</p>

**Example 1:**

    Input: image = [[1,1,0],[1,0,1],[0,0,0]]
    Output: [[1,0,0],[0,1,0],[1,1,1]]
    Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
    Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

<p>&nbsp;</p>

**Example 2:**

    Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
    Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
    Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
    Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

<p>&nbsp;</p>




**Constraints:**


* n == image.length
* n == image[i].length
* 1 <= n <= 20
* images[i][j] is either 0 or 1.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        for row in image:
            row.reverse()
            for j in range(len(row)):
                if  row[j]== 0:
                    row[j] = 1
                elif row[j] == 1:
                    row[j] = 0        
        return image
```

**Java**