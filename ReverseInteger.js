
//=============== [Reverse Integer Algo With Solution] ==================

const reverseInt = n => {

    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');
  
    return parseInt(reversed) * Math.sign(n);
  }
  
  reverseInt(-12356)

