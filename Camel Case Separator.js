/*Complete the solution so that the function will break up camel casing, using a space between words.*/
// complete the function
function solution(string) {
    let stringLower = string.toLowerCase();
    let newSentence = '';
    
    
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] === stringLower[i]) {
        newSentence += string[i];
      } else {
        newSentence += " " + string[i];
      }
      
    }
    return newSentence;
      
  }
  