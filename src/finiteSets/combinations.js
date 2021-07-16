export {
  combCard,
  combUnrankI, combRankI,
  combUnrank, combRank,
  negLenError, bigLenError, uniqueError, sortedError
};

import { bigRankError, negRankError } from '../genericErrors.js';
import { negFinError, negElemError, bigElemError } from './errors.js';

// Combinations of finite sets

// --- Cardinality ---

// Binomial implementation
// Source:
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-20.php
function combCard(finSet, length) {
    var coeff = 1n;
    for (var x = finSet-length+1n; x <= finSet; x++) coeff *= x;
    for (x = 1n; x <= length; x++) coeff /= x;
    return coeff;
}

// --- Ranking/Unranking ---

function combUnrankI(finSet, length, rank) {
  let comb = []
  let n = finSet
  let choose = length

  while (choose > 0) {
    let c = combCard(n-1n, choose-1n)

    if (rank >= combCard(n-1n, choose-1n)) {
      // Note: the sum from l to h of n over Binomial[n, ch]
      //       is Binomial[1 + h, 1 + ch] - Binomial[l, 1 + ch]

      // Binary search for v where l = n - v
      // This will find the largest l such that the above is less than 'rank'.
      let vl = 0n
      let vh = n
      let va = undefined

      while (vl+1n != vh) {
        va = (vh + vl) / 2n
        if (0 < rank - combCard(n, choose) + combCard(n-va, choose)) {
          vl = va
        } else {
          vh = va
        }
      }

      let v = undefined
      if (0 <= rank - combCard(n, choose) + combCard(n-vh, choose)) {
        v = vh
      } else {
        v = vl
      }

      rank -= combCard(n, choose) - combCard(n-v, choose)
      n -= v
    } else {
      comb.push(finSet-n)
      choose--
      n--
    }

  }

  return comb
}

// TODO: Improve efficiency
// Should be linear in length of comb, not size of finSet
function combRankI(finSet, comb) {
  if (comb.length == 0) {
    return 0
  }

  let index = comb.length - 1
  let n = finSet - comb[index] - 1n
  let choose = 0n
  let rank = 0n
  while (n < finSet) {
    n++

    if (finSet - n != comb[[index]] && index >= 0) {
      rank += combCard(finSet - comb[[index]]-1n, choose)
              - combCard(n-1n, choose)
      n += finSet - comb[[index]] - n - 1n
    } else if (index < 0) {
      rank += combCard(finSet, choose)
              - combCard(n-1n, choose)
      n += finSet - n
    } else {
      index--
      choose++
    }
  }

  return rank
}

// --- Error Checking ---

const negLenError = Error('Lengths must not be negative.')
const uniqueError = Error('Elements can only appear at most once per combination.')
const sortedError = Error('Combinations are represented by sorted lists.')
const bigLenError = Error('Cannot have combination larger than sampled set.')

function combUnrank(finSet, length, rank) {
  if (finSet < 0) {
    throw negFinError
  }

  if (rank < 0) {
    throw negRankError
  }

  if (length < 0) {
    throw negLenError
  }

  if (length > finSet) {
    throw bigLenError
  }

  if (rank >= combCard(finSet, length)) {
    throw bigRankError
  }

  return combUnrankI(finSet, length, rank)
}

function combRank(finSet, comb) {
  if (finSet < 0) {
    throw negFinError
  }

  // Check sorting and uniqueness
  for (let i = 0; i < comb.length - 1; i++) {
    if (comb[i] > comb[i+1]) {
      throw sortedError
    } else if (comb[i] == comb[i+1]) {
      throw uniqueError
    }
  }

  for (let i = 0; i < comb.length; i++) {
    if (comb[i] < 0) {
      throw negElemError
    } else if (comb[i] >= finSet) {
      throw bigElemError
    }
  }

  return combRankI(finSet, comb)
}
