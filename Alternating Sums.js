function solution(a) {
    let team1 = 0;
    let team2 = 0;
    let finalArr = [];
    
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            team1 += a[i];
        } else {
            team2 += a[i]
        }
        
    }
    finalArr.push(team1);
    finalArr.push(team2);
    return finalArr;
}
