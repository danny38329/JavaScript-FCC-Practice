function sumAll(arr) {
    let count = 0;
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
      count += i;
    }
    return count;
  }
  
  console.log(sumAll([1, 4]));