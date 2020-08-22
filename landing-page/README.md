# Landing Page Project

- [Landing Page Project](#landing-page-project)
  - [Intro](#intro)
  - [Features](#features)
  - [Structure](#structure)
  - [Files](#files)
      - [index.html](#indexhtml)
      - [README.md](#readmemd)
      - [styles.css](#stylescss)
      - [App.js](#appjs)
  - [Usage](#usage)

## Intro

A multi-section landing page using HTML and CSS and Vanilla Javascript (ECMA6). This project is the first project in Web Development Professional Nanodegree Program From Egypt FWD & Udacity.

![Perview](https://i.imgur.com/KyLhMb3.png)

For specific, detailed instructions, read the below information

## Features

- Dynamic navigation based on the sections
- the functionality to distinguish the section in view
- The functionality to scroll to sections
  - Clicking on a navigation item will scroll to the appropriate section of the page
- ES6 const and let, arrow functions
- A scroll to top button on the page
- An active state to the navigation items when a section is in the viewport.

## Structure

- index.html
- README.md
- css/styles.css
- js/app.js

## Files

#### index.html

The main file which you can open and start using the project.

#### README.md

You will find all the information related to this project.

#### styles.css

Beside the default styles provided by Udacity, you can find extra editing at the end of the file under the comment `/* custom edits */`

#### App.js

- All the work, You will find at the first section of the file the **Gobal variables** which include let and const assigments.
- At the seconed section, you will find **navbar functions** in one object called navbar.
- Third section of the file will represnt **sections functions** in one object called `sectionInView`
- Fourth section is only for the button which responsable for **scroll to top** function.
- Fifth section, You will find `addEventListner` with action `DOMContentLoaded` and inside it all **the main functions calls**.
- The last section will be `addEventListner` with action `scroll` which includes all **the invokes while scroll**.

## Usage

To get started, open `index.html` and start browsing the page.
