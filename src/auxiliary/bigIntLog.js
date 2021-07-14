export {
  flLog, clLog
};

// TODO: Improve implementation if possible

// Floor Logarithm
function flLog(base, n) {
  let l = 0n;

  while (n > 0n) {
    l++
    n /= base
  }

  return l-1n
}

// TODO: Improve Ceiling
// Ceiling Logarithm
function clLog(base, n) {
  if (n == 1n) {
    return 0n
  }

  return BigInt((n-1n).toString(Number(base)).length)
}
