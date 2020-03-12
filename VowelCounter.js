// =============== [Vowel Counter Algo] ================


const vowelCounter = str => {
  let counter = 0;
  let checker = ['a', 'e', 'i', 'o', 'u']
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }
  return counter;
}

vowelCounter('jamalino koko chino')













