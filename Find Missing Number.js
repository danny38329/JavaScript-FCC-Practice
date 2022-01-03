var findMissing = function (list) {  
    let smallestGap = list[1] - list[0];
    let newList = []
    let missingNumber = [];
    
    for (let i = 0; i < list.length; i++) {
      if (list[i+1] - list[i] <  smallestGap) {
        smallestGap = list[i+1] - list[i];
      }
    }
    
    for (let i = list[0]; i <= list[list.length -1]; i += smallestGap) {
      newList.push(i)
    }
    
    
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== newList[i]) {
        missingNumber.push(newList[i])
        return missingNumber;
      }
    }
    
    
    return missingNumber ;
  }