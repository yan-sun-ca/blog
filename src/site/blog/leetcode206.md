---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 206. Reverse Linked List



permalink: "blog/leetcode206.html"
createdAt: "2023-05-08"
---

## LeetCode 206. Reverse Linked List






#### Question
Given the head of a singly linked list, reverse the list, and return the reversed list.

<p>&nbsp;</p>

**Example 1:**

<img src="../static/image/206ex1.jpg" alt="206ex1">

    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

<p>&nbsp;</p>

**Example 2:**

<img src="../static/image/206ex2.jpg" alt="206ex2">

    Input: head = [1,2]
    Output: [2,1]

<p>&nbsp;</p>

**Example 3:**

    Input: head = []
    Output: []

<p>&nbsp;</p>


**Constraints:**

* 2 <= nums.length <= 500
* 0 <= nums[i] <= 100



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
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None:
            return head
        else:
            p = head
            while p.next:
                n = p.next
                p.next = n.next
                n.next = head
                head = n
            return head
```

**Java**