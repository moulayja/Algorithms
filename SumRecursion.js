
// ===================== [ Recursion example II ] ================

function sum(num) {
  if (num === 1) return 1;
  return num + sum(num - 1)
}

sum(4)
