export {
  finSumCard,
  finSumUnrankI, finSumRankI,
  finSumUnrank, finSumRank,
  negSumValError, negSumIndError, bigSumValError, bigSumIndError
};

import { bigRankError, negRankError } from '../genericErrors.js';
import { negFinError } from './errors.js';

// Sums (coproducts) of finite sets.
// Represented by a pair consisting of an index within the sum
// and an element of that part of the sum.

// Example: [3n, 9n] is an element of the coproduct represented by
//          [1n, 0n, 20n, 10n, 17n]
//          where 3n is an index and 8n is an element of the finite
//          set 10n.

// --- Cardinality ---

function finSumCard(finSets) {
  return finSets.reduce((n, r) => n + r)
}

// --- Ranking/Unranking ---

// Note: Consumes rank
function finSumUnrankI(finSets, rank) {
  let index = 0

  while (finSets[index] <= rank) {
    rank -= finSets[index]
    index++
  }
  
  return [index, rank]
}

// Note: Consumes finSets
function finSumRankI(finSets, sum) {
  let index = sum[0]
  let rank = sum[1]

  if (index == 0) {
    return rank
  }

  return rank +
         finSets.slice(0, index).reduce((n, r) => n + r)
}

// --- Error Checking ---

const negSumValError  = Error('Sum value cannot be negative.')
const negSumIndError = Error('Sum index cannot be negative.')
const bigSumIndError  = Error('Sum index larger than sum choices.')
const bigSumValError  = Error('Sum value larger than choice set.')

function finSumUnrank(finSets, rank) {
  if (rank < 0) {
    throw negRankError
  }

  if (rank >= finSumCard(finSets)) {
    throw bigRankError
  }

  for (let i = 0; i < finSets.length; i++) {
    if(finSets[i] < 0) {
      throw negFinError
    }
  }

  return finSumUnrankI(finSets, rank)
}

function finSumRank(finSets, sum) {
  if (sum[0] < 0) {
    throw negSumIndError
  }

  if (sum[1] < 0) {
    throw negSumValError
  }

  if (finSets[sum[0]] <= sum[1]) {
    throw bigSumValError
  }

  if (sum[0] >= finSets.length) {
    throw bigSumIndError
  }

  for (let i = 0; i < finSets.length; i++) {
    if(finSets[i] < 0) {
      throw negFinError
    }
  }

  return finSumRankI(finSets, sum)
}
