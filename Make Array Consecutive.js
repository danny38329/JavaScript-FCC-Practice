function solution(statues) {
    let newArray = [];
    let statuesSorted = statues.sort();
    let missingSizes = [];
    
for (let i = statuesSorted[0]; i < statuesSorted[statuesSorted.length - 1]; i++) {
    newArray.push(4);
}

for (let x = 0; x < newArray.length; x++) {
    if (!statues.includes(newArray[x])) {                                              
        missingSizes.push(newArray[x]);
    } 
}
return newArray;

}

console.log(solution([4, 2, 7, 18]))