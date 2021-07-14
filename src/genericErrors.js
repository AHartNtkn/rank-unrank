export {
  bigRankError, negRankError
};

const bigRankError = Error('Rank is larger than collection cardinality.')
const negRankError = Error('Rank cannot be negative.')
