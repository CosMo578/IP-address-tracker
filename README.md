# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](/public/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/ip-address-tracker-YUwnvhaRFi)
- Live Site URL: [Add live site URL here](https://ralph-ip-address-tracker.vercel.app/)

## My process

### Built with

- JSX
- Tailwindcss
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to use the react-leaflet components in rendering a fully interactive map. I learned how to use Axios for data fetching.

First Time using Axios for data fetching:

```js
import axios from 'axios';
import { useEffect, useState } from 'react';

const [data, setData] = useState(null);

useEffect(() => {
  axios.get(REQUEST_URL).then((response) => {
    console.log(response.data);
    setData(() => response.data);
  });
}, []);
```

### Continued development

I want to focus more on how I can use tools like Axios for advanced data fetching and caching. I also want to continue building more projects that are useful usin APIs.

### Useful resources

- [React Leaflet Tutorial for Beginners (2023)](https://www.youtube.com/watch?v=jD6813wGdBA) - This helped me in using the react-leaflet components.

## Author

- Website - [Developer Ralph](https://raph-portfolio-v2.vercel.app)
- Frontend Mentor - [@CosMo578](https://www.frontendmentor.io/profile/CosMo578)
- Twitter - [@dev_ralph_](https://www.twitter.com/@dev_ralph_)

## Acknowledgments

I would like to thank [Alejandro AO - Software & Ai](https://www.youtube.com/@alejandro_ao) YouTube channel for helpin me in figuring out how to use the react-leaflet components
