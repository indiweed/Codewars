function solution(list) {
    let resultArr = [];
    let n = 3;
    let startRange = 0;
    let lastRange = 0;
      
    list.sort(function (a, b) {
      return a - b;
    });
    
    for(let i = 0; i <= list.length-1;) {
      startRange = list[i];
      
      if (list[i+2] - list[i] === 2) {
        lastRange = list[i+2];
        while (list[i+n] - list[i] === n) {
          lastRange = list[i+n];
          n++
        }
        resultArr.push(`${startRange}-${lastRange}`);
        i = i+n - 1;
        n=2
      }
      else resultArr.push(startRange)
      i++
    }
    return resultArr.join(',')
  }