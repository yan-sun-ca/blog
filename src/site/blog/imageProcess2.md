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

<p>&nbsp;</p> 

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

<p>&nbsp;</p> 

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

<image src= "../static/image/imageprocess2_05.png" width="70%" height="70%" alt="imageprocess2_05">

<p>&nbsp;</p> 

#### Power-law (Gamma) transformation

Each input value is raised to the power gamma

<image src= "../static/image/imageprocess2_06.png" width="50%" height="50%" alt="imageprocess2_06">

* r < 1 will brighten the image
* r > 1 will darken the image

<image src= "../static/image/imageprocess2_07.png" width="30%" height="30%" alt="imageprocess2_07">

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

<image src= "../static/image/imageprocess2_08.png" width="70%" height="70%" alt="imageprocess2_08">


<p>&nbsp;</p> 

#### Bit-plane Slicing
Pixel intensity is represented by bits, and a 256-level grayscale image is represented by 8 bits.

* The higher-order bit planes (e.g., 8-6) contain the majority significant data.
* The lower-order bit planes (e.g., 3-1) contribute to more subtle intensity details.

**Matlab Code**
```Matlab
clear all; close all;

f = imread('bg_old.jpg');

clear all; close all;

image = imread('bg_old.jpg'); % convert colourful image to gray image

f = im2gray(image);

% gets bit plane 

f1 = bitget(f,1); 

f2 = bitget(f,2); 

f3 = bitget(f,3); 

f4 = bitget(f,4); 

f5 = bitget(f,5); 

f6 = bitget(f,6); 

f7 = bitget(f,7); 

f8 = bitget(f,8); 

subplot(3,3,1),imshow(f),title('original image');

subplot(3,3,2),imshow(logical(f1)),title('bit plane 1');

subplot(3,3,3),imshow(logical(f2)),title('bit plane 2');

subplot(3,3,4),imshow(logical(f3)),title('bit plane 3');

subplot(3,3,5),imshow(logical(f4)),title('bit plane 4');

subplot(3,3,6),imshow(logical(f5)),title('bit plane 5');

subplot(3,3,7),imshow(logical(f6)),title('bit plane 6');

subplot(3,3,8),imshow(logical(f7)),title('bit plane 7');

subplot(3,3,9),imshow(logical(f8)),title('bit plane 8');

```

<image src= "../static/image/imageprocess2_09.png" width="70%" height="70%" alt="imageprocess2_09">

From the result, we can see that if only use bit plane 1, it's hard to recognize the image. However, with only bit plane 8, it can recognize something.

<p>&nbsp;</p> 

Let's try another code. Let's compare the following conditions:
* Only using bit plane 8
* Using bit plane 8 and 7
* Using bit plane 8, 7, and 6

**Matlab Code**
```Matlab

clear all; close all;

image = imread('bg_old.jpg');

f = im2gray(image); % convert colourful image to gray image

f1 = zeros(size(f)); % create blank image with the same size of original image

f2 = zeros(size(f));

f3 = zeros(size(f));

% set bit, f1 only uses bit plane 8, f2 uses bit plane 8,7, f3 uses bit plane 8,7,6

f1 = bitset(f1,8,bitget(f,8));

f2 = bitset(f2,8,bitget(f,8));

f2 = bitset(f2,7,bitget(f,7));

f3 = bitset(f3,8,bitget(f,8));

f3 = bitset(f3,7,bitget(f,7));

f3 = bitset(f3,6,bitget(f,6));

f1 = uint8(f1); f2 = uint8(f2); f3 = uint8(f3); 

subplot(2,2,1),imshow(f),title('original image');

subplot(2,2,2),imshow(f1),title('using bit plane 8');

subplot(2,2,3),imshow(f2),title('using bit plane 8, and 7');

subplot(2,2,4),imshow(f3),title('using bit plane 8, 7, and 6');

```

<image src= "../static/image/imageprocess2_10.png" width="70%" height="70%" alt="imageprocess2_10">

<p>&nbsp;</p> 

It shows that with more bit planes, the image is more clear and close to the original image.

<p>&nbsp;</p> 

#### Histogram Equalization

* A method for modifying (enhancing) the dynamic range and the conteast of an image


**Matlab Code**
```Matlab
clear all; close all;
f = imread('satellite.png');
f1 = imadjust(f, stretchlim(f),[]);
f2=histeq(f);
subplot(2,3,1),imshow(f);
subplot(2,3,1),imshow(f), title('original image');
subplot(2,3,2),imshow(f1), title('contrast stretching');
subplot(2,3,3),imshow(f2), title('histogram equalization');
subplot(2,3,4),imhist(f), title('original histogram');
subplot(2,3,5),imhist(f1), title('contrast histogram');
subplot(2,3,6),imhist(f2),title('hist-eq histogram');
```

<p>&nbsp;</p> 

<image src= "../static/image/imageprocess2_11.png" width="70%" height="70%" alt="imageprocess2_11">