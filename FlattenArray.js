
// =============== [Array Flatten Algo | Recursion] ================


function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
      if (Array.isArray(oldArr[i])) {
        newArr = newArr.concat(flatten(oldArr[i]))
      } else {
        newArr.push(oldArr[i])
      }
    }
    return newArr;
  }
  
  
  flatten([[1, [[[[[[[[2, 3]]]]]]]]], [4, 5, 6], [7, 8], [9, [10, 11, [2, [4, 5, [22, [55]]]]], 12], [33, [[[[[[[[11, 22355]]]]]]]]], [7, 88, 76], [17, 98], [19, [209, 712, [1945, [1969, 512, [202, [45]]]]], 102]])
  
  