function palindrome(str) {
    let newString = "";
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
    for (let i = 0; i < str.length; i++) {
      if (alphabet.indexOf(str[i].toUpperCase()) !== -1) {
        newString += str[i];
      } else {
          continue;
      }; 
    }
    for (let x = str.length - 1; x >= 0; x--){
        console.log(str[x]);
    }

   return str;
  }
  
  console.log(palindrome("ey999e"));