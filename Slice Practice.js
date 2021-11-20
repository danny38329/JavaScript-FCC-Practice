function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    let newArray = [];
  for (let i =0; i < anim.length; i++) {
    if (i >= beginSlice && i < endSlice) {
      newArray.push(anim[i]);
    };
  };
  console.log(newArray);
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);