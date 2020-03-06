// =============== [Char Counter Algo] ================


const charCounter = (str) => {
  // Define an empty Object
  let cuteStr = str.replace(/\s/gi, '').toLowerCase()
  let obj = {}
  // Looping the string (str)
  for (let char of cuteStr) {
    obj[char] = ++obj[char] || 1
  }
  return obj
}


charCounter('Jamal Farah is a cool software engineer')


