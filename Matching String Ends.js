/*Check if a string (first argument, str) ends with the given target string 
(second argument, target).

This challenge can be solved with the .endsWith() method,
which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {
    let endLength = target.length;
    let endingString = [];
    let targetString = [];
  
    for (let i = str.length - 1; i > str.length -1 - endLength; i--) {
      endingString.push(str[i]);
  };
    for (let j = target.length - 1; j >= 0; j--) {
      targetString.push(target[j]);
  };
    console.log(JSON.stringify(endingString) === JSON.stringify(targetString));
    
  };
  
  confirmEnding("Bastian", "n");