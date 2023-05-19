---
layout: layouts/single-page.njk
tags: blog
title: Some Notes for Image Processing (2)



permalink: "blog/imageprocessing02.html"
createdAt: "2023-05-19"
---

## Some Notes for Image Processing (2)




#### Identity Transformation 
The output value of intensity is the same with input intensity. So there is no change on the image.

s = r

<image src= "../static/image/imageprocess2_01.png" width="30%" height="30%" alt="imageprocess2_01">


#### Image Negative 

The output value of intensity = (L-1) - input value.

So the dark pixel will be bright pixel, and bright will be dark pixel.

s = (L-1) - r
L = 256

<image src= "../static/image/imageprocess2_02.png" width="30%" height="30%" alt="imageprocess2_02">


**Matlab Code**
```Matlab
clear all; close all;

f = imread('imageprocess2_03.png');

f_neg = 255 - f; % negative

figure, imshow(f,[]);

figure, imshow(f_neg,[]);
```
*Before*

<image src= "../static/image/imageprocess2_03.png" width="30%" height="30%" alt="imageprocess2_03">

*After*

<image src= "../static/image/imageprocess2_04.png" width="30%" height="30%" alt="imageprocess2_04">



#### Contrast Stretching
Producing an image with higher contrast by darkening the intensity levels below k and brightening the levels above k



**Matlab Code**
```Matlab
clear all; close all;

f = imread('contrast_stretch.png');

f1 = imadjust(f,stretchlim(f),[]);

f2 = imadjust(f, stretchlim(f,[0.05,0.95]),[]);

f3 = imadjust(f, stretchlim(f,[0.10,0.80]),[]);

f4 = imadjust(f, stretchlim(f,[0.20,0.70]),[]);

f5 = imadjust(f, stretchlim(f,[0.49,0.50]),[]);

subplot(2,3,1), imshow(f),title('original image');

subplot(2,3,1), imshow(f1),title('default parameter: 0.01,0.99');

subplot(2,3,1), imshow(f),title('original image');

subplot(2,3,2), imshow(f1),title('default parameter: 0.01,0.99');

subplot(2,3,3), imshow(f2),title('parameter: 0.05,0.95');

subplot(2,3,4), imshow(f3),title('parameter: 0.10,0.80');

subplot(2,3,5), imshow(f4),title('parameter: 0.20,0.70');

subplot(2,3,6), imshow(f5),title('parameter: 0.49,0.50');


```

<image src= "../static/image/imageprocess2_05.png" width="30%" height="30%" alt="imageprocess2_05">


#### Power-law (Gamma) transformation

Each input value is raised to the power gamma

<image src= "../static/image/imageprocess2_06.png" width="50%" height="50%" alt="imageprocess2_06">

* r < 1 will brighten the image
* r > 1 will darken the image

<image src= "../static/image/imageprocess2_07.png" width="50%" height="50%" alt="imageprocess2_07">

**Matlab Code**
```Matlab
clear all; close all;

f = imread('babytest.png');

f1 = im2double(f);

f1 = power(f1,0.9);

f1 = mat2gray(f1);

f2 = power(f1,0.8);

f2 = mat2gray(f2);

f3 = power(f1,0.7);

f3 = mat2gray(f3);

f4 = power(f1,0.6);

f4 = mat2gray(f4);

f5 = power(f1,0.5);

f5 = mat2gray(f5);

subplot(2,3,1), imshow(f),title('original image');

subplot(2,3,2), imshow(f1),title('parameter: 0.9');

subplot(2,3,3), imshow(f2),title('parameter: 0.8');

subplot(2,3,4), imshow(f3),title('parameter: 0.7');

subplot(2,3,5), imshow(f4),title('parameter: 0.6');

subplot(2,3,6), imshow(f5),title('parameter: 0.5');

```

<image src= "../static/image/imageprocess2_08.png" width="50%" height="50%" alt="imageprocess2_08">