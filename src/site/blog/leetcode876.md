---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 876. Middle of the Linked List



permalink: "blog/leetcode876.html"
createdAt: "2023-05-08"
---

## LeetCode 876. Middle of the Linked List






#### Question
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

<p>&nbsp;</p>

**Example 1:**

<img src="../static/image/876ex1.jpg" alt="876ex1">

    Input: head = [1,2,3,4,5]
    Output: [3,4,5]
    Explanation: The middle node of the list is node 3.

<p>&nbsp;</p>

**Example 2:**

<img src="../static/image/876ex2.jpg" alt="876ex2">

    Input: head = [1,2,3,4,5,6]
    Output: [4,5,6]
    Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

<p>&nbsp;</p>



**Constraints:**


* The number of nodes in the list is in the range [1, 100].
* 1 <= Node.val <= 100




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
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        lst = []
        counts = 0
        while head != None:
            counts += 1
            
            lst.append(head)
            head = head.next
        return lst[counts // 2 ]
```

**Java**