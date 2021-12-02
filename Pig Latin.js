function translatePigLatin(str) {
    const consonantsAlphabet = "bcdfghjklmnpqrstvwxz";
    const vowels = "aeiouy"
    let consClust = "";
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[0]) === -1) {
        if (vowels.indexOf(str[i]) === -1) {
          consClust += str[i];
        } else {
          return consClust;
        }
      } else {
        let newWord = str + "way";
        return newWord;
      }
      let newWord = str + consClust;
    }
    return newWord;
  }
  
  console.log(translatePigLatin("consonant"));