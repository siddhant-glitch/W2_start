//this is an IIFE (immediately invoked function expression)
//also callled the module expression
//
(() => { //shorthand function declaration(also called an arrow function)
  console.log('fired!');

  //selct elements here
  //
  //querySelectorAll is a one to many selection -> find every element that matches the selector
  let theBadges = document.querySelectorAll('.badge'),
  //one to one cinnection ->one variable name means one element
      svgBadge = document.querySelector("svg")
  //  Var theBadge = document.querySelector('.badge');

setTimeout(function(){
  mainHeading.textContent = "javascript really isnt that bad";
  mainHeading.classList.add("selected");
}, 3000);


  //functions go in the middle
  function logID() {
    console.log("Graphic you clicked on : ", this.id);
  }

  //event handling
  //theBadge.addEventListener("click", logID);
  theBadges.forEach(badge=> badge.addEventListener("click", logID))
  svgBadge.addEventListener("click", logID);
                                    //function
  window.addEventListener("load", function(){
    console.log("everything is loaded");
  })
  //debugger; //pause your code execution
})();
