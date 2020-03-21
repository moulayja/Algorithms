

// =================== [ Recursion CountDown examples ] ===============


function countDown(num) {
    if (num <= 0) {
      console.log('all set buddy');
      return;
    }
    console.log(num)
    num--;
    countDown(num)
  }
  
  countDown(15)

