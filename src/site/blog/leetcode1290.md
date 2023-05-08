---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1290. Convert Binary Number in a Linked List to Integer



permalink: "blog/leetcode1290.html"
createdAt: "2023-05-08"
---

## LeetCode 1290. Convert Binary Number in a Linked List to Integer






#### Question
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

<p>&nbsp;</p>

**Example 1:**

<img src="../static/image/1290ex1.png" alt="1290ex1">

    Input: head = [1,0,1]
    Output: 5
    Explanation: (101) in base 2 = (5) in base 10

<p>&nbsp;</p>

**Example 2:**

    Input: head = [0]
    Output: 0

<p>&nbsp;</p>



**Constraints:**


* The Linked List is not empty.
* Number of nodes will not exceed 30.
* Each node's value is either 0 or 1.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        binary_nums = []
        while head != None:
            binary_nums.append(str(head.val))
            head = head.next
        
        bin_num = "".join(binary_nums)
        return int(bin_num, 2)
```

**Java**