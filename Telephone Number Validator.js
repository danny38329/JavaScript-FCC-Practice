function telephoneCheck(str) {
    const specialCharsArr = ["<",">","/","?",":",";","{","}","[","]","!","@","#","$","%","^","&","*","(",")","_","-","+","=","~",];
    const numberLine = [1,2,3,4,5,6,7,8,9];
    let numCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i])) {
        numCount += 1;
      } else if (numberLine.indexOf(str[i])=== -1) {
        return "No number " + numCount;
      }
    }
    return true;
  }
  
  console.log(telephoneCheck("555-555-5555"));