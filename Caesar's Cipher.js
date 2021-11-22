function rot13(str) {
    let newArray = [];
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for (let i = 0; i < str.length; i++) {
      newArray.push(alphabet.indexOf(str[i])); 
    }
    return newArray;
  }
  
  console.log(rot13("SERR PBQR PNZC"));