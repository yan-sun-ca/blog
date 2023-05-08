---
layout: layouts/single-page.njk
tags: blog
title: LeetCode 1436. Destination City



permalink: "blog/leetcode1436.html"
createdAt: "2023-05-08"
---

## LeetCode 1436. Destination City






#### Question
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

<p>&nbsp;</p>

**Example 1:**

    Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
    Output: "Sao Paulo" 
    Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

<p>&nbsp;</p>

**Example 2:**

    Input: paths = [["B","C"],["D","B"],["C","A"]]
    Output: "A"
    Explanation: All possible trips are: 
    "D" -> "B" -> "C" -> "A". 
    "B" -> "C" -> "A". 
    "C" -> "A". 
    "A". 
    Clearly the destination city is "A".

<p>&nbsp;</p>

**Example 3:**

    Input: paths = [["A","Z"]]
    Output: "Z"

<p>&nbsp;</p>


**Constraints:**


* 1 <= paths.length <= 100
* paths[i].length == 2
* 1 <= cityAi.length, cityBi.length <= 10
* cityAi != cityBi
* All strings consist of lowercase and uppercase English letters and the space character.




<p>&nbsp;</p>

---

<p>&nbsp;</p>  

#### Solution
**Python**
```Python
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        start = set()
        destination = set()

        for path in paths:
            start.add(path[0])
            destination.add(path[1])
            print(start, destination)
        print(destination - start)
        return list(destination - start)[0]
```

**Java**