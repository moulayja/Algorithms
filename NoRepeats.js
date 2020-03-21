
// =============== [NoRepeats Algo] ================

let arr = [-1,-2,-1,1,2,2,3,3,4,5,5,6,6,7,8,8,9,9,10,120,121,120]

const noDoubles = arr => [...new Set(arr)]

noDoubles(arr)
