---
layout: layouts/single-page.njk
tags: blog
title: Some Notes for Image Processing (2)



permalink: "blog/imageprocessing02.html"
createdAt: "2023-05-14"
---

## Some Notes for Image Processing (2)




#### Identity Transformation 
The output value of intensity is the same with input intensity. So there is no change on the image.

s = r

<image src= "../static/image/imageprocess2_01.png" width="50%" height="50%" alt="imageprocess2_01">

#### Image Negative 
The output value of intensity = (L-1) - input value.

So the dark pixel will be bright pixel, and bright will be dark pixel.

s = (L-1) - r
L = 256

<image src= "../static/image/imageprocess2_02.png" width="50%" height="50%" alt="imageprocess2_02">


**Matlab Code**
```Matlab
clear all; close all;
f = imread('imageprocess2_03.png');
f_neg = 255 - f; % negative
figure, imshow(f,[]);
figure, imshow(f_neg,[]);
```
*Before*

<image src= "../static/image/imageprocess2_03.png" width="50%" height="50%" alt="imageprocess2_03">

*After*

<image src= "../static/image/imageprocess2_04.png" width="50%" height="50%" alt="imageprocess2_04">