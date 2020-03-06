// ==(3)============= [Odd Numbers Algo] ================


function oddNumbers(arr) {
    let result = []
    //  Using the recursion method
    if (arr.length === 0) {
      return result;
    }
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    result = result.concat(oddNumbers(arr.slice(1)));
    return result;
  }
  
  
  oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13])