# Udacity 3Fs Frontend Development Project: Manipulating the DOM

This project is part of Udacity's **3Fs Frontend Development** program and focuses on dynamically manipulating the DOM using JavaScript. The goal of this project is to enhance user interaction by building a navigation bar, enabling smooth scrolling, and highlighting the active section as the user scrolls.

## Project Overview

This project demonstrates the following:

- **Programmatically building a navigation bar** based on the sections in the HTML.
- **Smooth scrolling** to each section when a navigation link is clicked.
- **Dynamic section highlighting** based on the user's scroll position to indicate the active section and corresponding navigation link.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [How It Works](#how-it-works)
- [How to Run](#how-to-run)

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)

## Features

1. **Dynamic Navigation Bar**:
   - The navigation is generated dynamically based on the sections available in the HTML.
2. **Smooth Scrolling**:
   - Clicking a navigation link smoothly scrolls the page to the respective section.
3. **Active Section Highlighting**:
   - When the user scrolls, the section currently in the viewport is highlighted, and its corresponding navigation link is also marked as active.
4. **Scroll-to-Top Functionality**:
   - A "Home" link is included in the navigation, which scrolls the user to the top of the page when clicked.

## How It Works

### Dynamic Navigation Creation

- The navigation bar is built dynamically using JavaScript. It parses the existing sections (`section1`, `section2`, `section3`,`section4`, `section5`) and generates corresponding navigation links.

### Smooth Scrolling

- The `scrollToView` function is triggered when a navigation link is clicked. It uses the `getBoundingClientRect()` method to calculate the section’s position relative to the viewport and scrolls the page to that section smoothly.

### Active Section Highlighting

- The script listens for the `scroll` event and checks which section is currently in the viewport. It then adds an active class to both the section and its corresponding navigation link to highlight the active section.

### Scroll to Top

- The "Home" navigation link allows the user to scroll back to the top of the page. If clicked, the page scrolls smoothly to the top.

## How to Run

1. Clone or download the project files:
   ```bash
   git clone https://github.com/yourusername/udacity-3fs-frontend-project.git
   ```
