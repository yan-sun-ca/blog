---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1108. Defanging an IP Address
permalink: "blog/leetcode1108.html"
createdAt: "2023-04-23"
---

## LeetCode 1108. Defanging an IP Address
#### Question
Given a valid (IPv4) IP address, return a defanged version of that IP address. 

A defanged IP address replaces every period "." with "[.]".
<p>&nbsp;</p>

**Example 1:**

    Input: address = "1.1.1.1"

    Output: "1[.]1[.]1[.]1"

**Example 2:**

    Input: address = "255.100.50.0"

    Output: "255[.]100[.]50[.]0"

 

**Constraints:**

    The given address is a valid IPv4 address.

<p>&nbsp;</p>

---
  
<p>&nbsp;</p>


#### Solution
**Python**
```Python
class Solution:
    def defangIPaddr(self, address: str) -> str:
        newip = address.replace(".","[.]")
        return newip
```

**Java**