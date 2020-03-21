
// =============== [Palindrom Algo] ==================


const palindrome = str => {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
  }
  
  palindrome('RaceCar')

  