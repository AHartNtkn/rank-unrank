export {
  permCard,
  permUnrankI, permRankI,
  permUnrank, permRank
};

import { bigRankError, negRankError } from '../../genericErrors.js';
import { negFinError, negElemError, bigElemError } from '../errors.js';

// Permutations of finite sets
// Same as bijections over finite sets.

// --- Cardinality ---

// BigInt Factorial
function permCard(n) { 
  let r = 1n

  for (let i = BigInt(n); i > 1; i--) {
    r *= i
  }

  return r
}

// --- Ranking/Unranking ---

function permUnrankI(finSet, rank) {
  let perm = []
  let options = [...Array(Number(finSet)).keys()]

  for (let i = finSet; i > 0n; i--) {
    let j = Number(rank % i)

    perm.push(options[j])

    // This is done implicitly by the next line.
    // Important for understanding the inverse.
    // rank -= BigInt(j)
    rank /= i

    options.splice(j, 1)
  }

  return perm
}

// TODO: Replace with linear-time function
function permRankI(finSet, perm) {
  let rank = 0n
  let options = []

  for (let i = finSet - 1n; i >= 0; i--) {
    // Binary search to locate smallest index, j, whose value
    // is larger than current element in permuation, perm[i]
    let jl = 0
    let jh = options.length-1
    while (jl < jh-1) {
      let ja = Math.floor((jl + jh)/2)
      if (options[ja] < perm[i]) {
        jl = ja
      } else {
        jh = ja
      }
    }

    let j = Number()
    if (options.length == 0) {
      j = 0
    } else if (options[jl] > perm[i]) {
      j = jl
    } else if (options[jh] < perm[i]) {
      j = jh + 1
    } else {
      j = jh
    }
    options.splice(j,0,perm[i])

    rank *= finSet - i
    rank += BigInt(j)
  }

  return rank
}

// --- Error Checking ---

const permLenError = Error('Permutations over a set of size n must be of length n.')
const permUnqError = Error('Permutations cannot have repeated elements.')

function permUnrank(finSet, rank) {
  if (finSet < 0) {
    throw negFinError
  }

  if (rank < 0) {
    throw negRankError
  }

  if (rank >= permCard(finSet)) {
    throw bigRankError
  }

  return permUnrankI(finSet, rank)
}

function permRank(finSet, perm) {
  if (finSet < 0) {
    throw negFinError
  }

  if (perm.length != finSet) {
    throw permLenError
  }

  for (let i = 0; i < perm.length; i++) {
    if (perm[i] < 0) {
      throw negElemError
    } else if (perm[i] >= finSet) {
      throw bigElemError
    }
  }

  // Check uniqueness
  let countList = [...Array(Number(finSet)).keys()].map(x=>0)
  for (let i = 0; i < perm.length; i++) {
    countList[perm[i]]++
  }
  for (let i = 0; i < countList.length; i++) {
    if (countList[i] != 1) {
      throw permUnqError
    }
  }

  return permRankI(finSet, perm)
}
