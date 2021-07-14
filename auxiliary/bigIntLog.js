export {
  flLog, clLog
};

// TODO: Improve so base can go beyond 36.

// Floor Logarithm
function flLog(base, n) {
  return BigInt(n.toString(Number(base)).length - 1)
}

// Ceiling Logarithm
function clLog(base, n) {
  if (n == 1n) {
    return 0n
  }

  return BigInt((n-1n).toString(Number(base)).length)
}
