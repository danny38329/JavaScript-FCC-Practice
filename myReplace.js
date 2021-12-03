function myReplace(str, before, after) {
    let newStr = str.split(" ");
    let revisedArray = [];
    for (let i=0; i < newStr.length; i++) {
      if (newStr[i] !== before) {
        revisedArray.push(newStr[i]);
      } else {
        revisedArray.push(after);
      }
    }
    let newArr = revisedArray.join(" ");
  
    return newArr;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");