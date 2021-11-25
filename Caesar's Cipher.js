function rot13(str) {
    let newArray = [];
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (let i = 0; i < str.length; i++) {
      if (typeof str[i] === "undefined") {
        newArray.push("");
      } else if (alphabet.indexOf(str[i]) < 13) {
        newArray.push(alphabet[alphabet.indexOf(str[i])+13]);
      } else if (alphabet.indexOf(str[i]) >= 13) {
        newArray.push(alphabet[alphabet.indexOf(str[i])-13]);
      } else {
          newArray.push(str[i]);
      };
      
    };
    return newArray.join("");
  }
  
  console.log(rot13("SERR PBQR!!! PNZC"));