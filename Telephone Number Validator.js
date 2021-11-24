function telephoneCheck(str) {
    let numCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i])) {
        numCount += 1;
      }
    }
    return true;
  }
  
  console.log(telephoneCheck("555-555-5555"));