function pairElement(str) {
    let newArray = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "G") {
        newArray.push(["G", "C"]);
      } else if (str[i] === "C") {
        newArray.push(["C","G"]);
      } else if (str[i] === "A") {
        newArray.push(["A", "T"]);
      } else {
        newArray.push(["T","A"]);
      }
    }
    return newArray;
  }
  
  pairElement("ATCGA");