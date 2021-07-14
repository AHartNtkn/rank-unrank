export {
  digit, undigit
};

// Converts a number into a bigendian digit representation.

function digit(base, n) {
  let d = [];

  while (n > 0n) {
    d.push(n % base)
    n /= base
  }

  return d
}

function undigit(base, b) {
  let n = 0n;

  for (let i = 0n; i < b.length; i++) {
    n += (base ** i) * b[i]
  }

  return n
}
