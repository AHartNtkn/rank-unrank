export {
  negElemError, bigElemError,
  zeroFinError, negFinError,
  negSumError, negSumIError, bigSumError,
  tupProdError, zeroProdError
};

const negElemError = Error('Elements of finite sets cannot be negative.')
const bigElemError = Error('Element too big for given finite set.')
const zeroFinError = Error('Construction cannot be made with empty set.')
const negFinError  = Error('Finite sets cannot have negative cardinality.')