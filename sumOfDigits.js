function digitalRoot(n) {
    let numToArr = String(n).split("").map((el) => {
    return Number(el)
  });
  
  function sum(numToArr) { 
    let check = numToArr.reduce((partialSum, num) => {
      if (num !== '-' || num !== '.') {
        return partialSum += num
      }
    })
    let result = String(check).split("").map((el) => {
      return Number(el)
    })
    return result.length > 1 ? sum(result) : check
  }
  return sum(numToArr)
}