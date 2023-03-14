# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot1](./public/Screenshot1.png)
![Screenshot2](./public/Screenshot2.png)
![Screenshot3](./public/Screenshot3.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.


### Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL: (https://llhyuan.github.io/Snap-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

1, Organize a react project directory.
2, Write standalone react components and style them independently. 
3, Organize SCSS modules. 
4, Reviewed an element's stacking context to correctly layout the dropdown menu under laptop view.
5, Use CSS position property to manipulate the containing block of the pop-up nav menu.
6, Set {top: 0; bottom: 0;} to allow the pop-up nav menu to fill the vertical space of its containing block. 
7, Use gh-page to simplify github page deployment.


### Useful resources

- [Layout and the containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) - This gives me a more accurate understanding of how position property affects an element's effective containing block, based on which the percentage property values are calculated.
- [The stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) - This is a detailed explanation on z-index property, and how it affects the layout.   


## Author

- LinkedIn - [Hangyuan Liu](www.linkedin.com/in/hangyuan-liu-a9282718b)
- Frontend Mentor - [@llhyuan](https://www.frontendmentor.io/profile/llhyuan) 


