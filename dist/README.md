# Assignment 1

## Getting Started

1. Fork this repository and clone the code to your machine.
2. Install packages
   ```bash
   npm install
   ```
3. Ensure tests can be run
   ```bash
   npm test
   ```
4. Use `node` to run any files independently from the test suite. Example: `node ./src/timer/runTimer.js`.

## Overview

1. The folder **src/components** contains a file called `HTMLElement.js`. In this file, create a module that meets the following requirements:
   * Create a class called `HTMLElement`. This class will be initialized with two arguments: tag and content. Both of these arguments should be stored as instance variables within the class.
   * Once the HTMLElement class is created, add a function to the class called render that can be called publicly. This function should return the HTML element with the content provided.
   * Example usage (you can see the tests for more examples):

   ```js
   const lovelaceQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');

   console.log(lovelaveQuote.render());
   // prints "<p>I am never so happy as when I am really engaged in good earnest...</p>"
   ```
2. The folder **src/components** contains a file called `DivElement.js`. In this file, create a module that meets the following requirements:
   * Create a class called `DivElement` that extends the `HTMLElement` class created previously. You'll need to import the class made in step 1.
   * This class should be initialized with one argument: `content`.
   * This class should inherit the render function in the parent class.
   * Example usage:

   ```js
   const andIThinkToMyself = new DivElement('What a wonderful world');

   console.log(andIThinkToMyself.render());
   // prints "<div>What a wonderful world</div>"
   ```
3. The folder **src/timer** contains two files called `Timer.js` and `runTimer.js`. Perform the following tasks:
   * Examine the code in these two files and determine each script's behavior.
   * Refactor the code to use the ES6 class syntax.
   * Refactor the code to avoid assigning `this` to a variable.

## Submission

* In order for a valid submission, all tests must pass when running `npm test`.
* Create a pull request to this repository and ensure that the CI build succeeds.

## Additional Tasks

1. Review 1-2 other submissions and comment if you have any thoughts or alternatives.
2. Complete some [ES6 Katas](http://es6katas.org/). Recommended sections:
   * Promises
   * Arrays
   * Class
   * Destructuring
   * Generators
   * Object literals
   * Strings/template strings
   * Arrow functions
   * Rest/spread operators
