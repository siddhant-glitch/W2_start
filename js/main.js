//this is an IIFE (immediately invoked function expression)
//also callled the module expression
//
(() => { //shorthand function declaration(also called an arrow function)
  console.log('fired!');

  //selct elements here
  let theBadge = document.querySelector('.badge'),
      svgBadge = document.querySelector("svg")
  //  Var theBadge = document.querySelector('.badge');

  //functions go in the middle
  function logID() {
    console.log("Graphic you clicked on : ", this.id);
  }

  //event handling
  theBadge.addEventListener("click", logID);
  svgBadge.addEventListener("click", logID);
                                    //function
  //debugger; //pause your code execution
})();
