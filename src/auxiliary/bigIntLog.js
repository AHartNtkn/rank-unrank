export {
  flLog, clLog
};

// Floor Logarithm
// Warning: This will run forever if base is set to 1.
function flLog(base, n) {
  let l = 0n;

  while (n > 0n) {
    l++
    n /= base
  }

  return l-1n
}

// Ceiling Logarithm
// Warning: This will run forever if base is set to 1.
function clLog(base, n) {
  let l = 0n;

  while (n > 1n) {
    if (n % base == 0) {
      n /= base
    } else {
      n /= base
      n++
    }
    l++
  }

  return l
}
