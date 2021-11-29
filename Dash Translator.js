function spinalCase(str) {
    const alphabetList = "abcdefghijklmnopqrstuvwyxz";
    let emptyString = " ";
    for (let i = 0; i < str.length; i++) {
      if (alphabetList.indexOf(str[i].toLowerCase())  === -1) {
        emptyString += "-";
      } else {
        emptyString += str[i].toLowerCase();
      }
    }
    
    return emptyString;
  }
  
  console.log(spinalCase('This Is Spinal Tap'));