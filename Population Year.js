/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/

function nbYear(p0, percent, aug, p) {
    let inhabitants = p0;
    let year = 0;
    while (inhabitants < p) {
      inhabitants = inhabitants + inhabitants * (percent/100) + aug;
      year += 1;
    }    
    return year;
  }