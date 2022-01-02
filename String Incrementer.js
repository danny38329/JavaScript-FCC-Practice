function incrementString (strng) {
    let numArray = '';
    if (!isNaN(parseInt(strng[strng.length-1]))) {
      for (let i = strng.length - 1; i <= 0; i--) {
      numArray += strng[i];
      
      
    }
    console.log(numArray)
      
    }
  }

  incrementString('foo998');