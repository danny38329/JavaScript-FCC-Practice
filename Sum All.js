function sumAll(arr) {
  let count = 0;
 
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      count += i;
    }
    return count;
  } else {
    for (let x = arr[0]; x >= arr[1]; x--) {
      count += x;
    }
    return count;
  }
  
}

console.log(sumAll([6, 5]));