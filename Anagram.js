


// =============== [Anagram Algo] ================



const anagramCheck = (originalStr, newStr) => {
  // Defining an Object to store;
  let store = {}
  let store2 = {}

  for (let char1 of originalStr) {
    store[char1] = ++store[char1] || 1
  }
  for (let char2 of newStr) {
    store2[char2] = ++store2[char2] || 1
  }
  return Object.entries(store).flat(Infinity)
}

anagramCheck('jamal', 'lamaj')



