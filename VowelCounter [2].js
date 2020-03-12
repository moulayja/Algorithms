// ============[Vowel Counter Algo {Solution II }] ===========


const vowelCounter = str => {
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0
  }
  
  vowelCounter('jAmAlIno kOkO chInO moumin')