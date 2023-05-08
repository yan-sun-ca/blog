---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 2011. Final Value of Variable After Performing Operations
permalink: "blog/leetcode2011.html"
createdAt: "2023-05-07"
---

## LeetCode 2011. Final Value of Variable After Performing Operations

#### Question
There is a programming language with only four operations and one variable X:

* ++X and X++ increments the value of the variable X by 1.
* --X and X-- decrements the value of the variable X by 1.

Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

<p>&nbsp;</p>

**Example 1:**

    Input: operations = ["--X","X++","X++"]
    Output: 1
    Explanation: The operations are performed as follows:
    Initially, X = 0.
    --X: X is decremented by 1, X =  0 - 1 = -1.
    X++: X is incremented by 1, X = -1 + 1 =  0.
    X++: X is incremented by 1, X =  0 + 1 =  1.

<p>&nbsp;</p>

**Example 2:**

    Input: operations = ["++X","++X","X++"]
    Output: 3
    Explanation: The operations are performed as follows:
    Initially, X = 0.
    ++X: X is incremented by 1, X = 0 + 1 = 1.
    ++X: X is incremented by 1, X = 1 + 1 = 2.
    X++: X is incremented by 1, X = 2 + 1 = 3.

<p>&nbsp;</p>

**Example 3:**
    Input: operations = ["X++","++X","--X","X--"]
    Output: 0
    Explanation: The operations are performed as follows:
    Initially, X = 0.
    X++: X is incremented by 1, X = 0 + 1 = 1.
    ++X: X is incremented by 1, X = 1 + 1 = 2.
    --X: X is decremented by 1, X = 2 - 1 = 1.
    X--: X is decremented by 1, X = 1 - 1 = 0.

<p>&nbsp;</p>

**Constraints:**


    * 1 <= operations.length <= 100
    * operations[i] will be either "++X", "X++", "--X", or "X--".

<p>&nbsp;</p>

---


#### Solution
**Python**
```Python
class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        value = 0
        for i in range(0,len(operations)):
            if operations[i] == "++X" or operations[i] == "X++":
                value += 1
            elif operations[i] == "--X" or operations[i] == "X--":
                value -= 1
        return value
```

**Java**