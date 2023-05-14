---
layout: layouts/single-page.njk
tags: blog
title: Some Notes for Image Processing



permalink: "blog/imageprocessing01.html"
createdAt: "2023-05-14"
---

## Some Notes for Image Processing






#### Comparing images using subtraction
image = imread('pic.png');

grayImage = rgb2gray(image);

% Set LSB = 0

grayImage2 = grayImage - rem(grayImage, 2);

% Subtract from original

diffImage= double(grayImage) - double(grayImage2);

% Display it.

imshow(diffImage, []);

<image src="../static/image/imageprocess1.png" width="50%" height="50%" alt="imageprocess1">