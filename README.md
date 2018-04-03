# Assignment 1

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
