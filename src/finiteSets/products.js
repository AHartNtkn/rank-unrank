export {
  finProdCard,
  finProdUnrankI, finProdRankI,
  finProdUnrank, finProdRank,
  tupProdError
};

import { bigRankError, negRankError } from '../genericErrors.js';
import { zeroFinError, negFinError, negElemError, bigElemError } from './errors.js';

// Products of finite sets.
// Represented by an array of finite set cardinalities.

// --- Cardinality ---

function finProdCard(finSets) {
  return finSets.reduce((n, r) => n * r, 1n)
}

// --- Ranking/Unranking ---

// Note: Consumes rank
function finProdUnrankI(finSets, rank) {
  let tup = []

  for (let i = 0; i < finSets.length; i++) {
    tup.push(rank % finSets[i])
    rank /= finSets[i]
  }
  
  return tup
}

function finProdRankI(finSets, tup) {
  if(tup.length == 0) {
    return 0n
  }

  let rank = tup[tup.length-1]

  for (let i = tup.length - 2; i >= 0; i--) {
    rank *= finSets[i]
    rank += tup[i]
  }
  
  return rank
}

// --- Error Checking ---

const tupProdError = Error('Tuple length must match product choices.')

// Note: Consumes rank
function finProdUnrank(finSets, rank) {
  if (rank < 0) {
    throw negRankError
  }

  for (let i = 0; i < finSets.length; i++) {
    if(finSets[i] == 0) {
      throw zeroFinError
    }

    if(finSets[i] < 0) {
      throw negFinError
    }
  }

  if (rank >= finProdCard(finSets)) {
    throw bigRankError
  }

  return finProdUnrankI(finSets, rank)
}

function finProdRank(finSets, tup) {
  if (finSets.length != tup.length) {
    throw tupProdError
  }

  for (let i = 0; i < finSets.length; i++) {
    if(finSets[i] == 0) {
      throw zeroFinError
    }

    if(finSets[i] < 0) {
      throw negFinError
    }

    if(tup[i] < 0) {
      throw negElemError
    }

    if(tup[i] >= finSets[i]) {
      throw bigElemError
    }
  }

  return finProdRankI(finSets, tup)
}