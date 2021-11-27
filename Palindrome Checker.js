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
    console.log(newString);
    const len = newString.length;

    // loop through half of the string
    for (let x = 0; x < len / 2; x++) {

        // check if first and last string are same
        if (newString[x].toLowerCase() !== newString[len - 1 - x].toLowerCase()) {
            return false;
        }
    }
    return true;
}
  
  console.log(palindrome("1 eye for of 1 eye."))