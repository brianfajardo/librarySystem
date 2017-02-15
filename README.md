# librarySystem

One way to access a library is to run the code through an immediately invoked function expression (IIFE) and then attach the library to the window to make it globally available. However, a major drawback to this approach occurs when you have several or hundreds of globally available libraries, there is an increased probability for variable overlap due to scope. The file `globalApproach.js` demonstrates this approach.

`librarySystem()` is a simple JavaScript function which replaces every global library variable. Instead of having numerous amounts of libraries in the global window, you only have one function which fetches the library you need for you.

In open source projects a library system may or may not exist. `openSource.js` demonstrates a way for the library to dynamically adapt to its environment. 
