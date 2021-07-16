var test = {}

import('./src/auxiliary/bigIntLog.js').then((value) => {test = {...test, ...value}})
import('./src/ultilities/enumerate.js').then((value) => {test = {...test, ...value}})
import('./src/auxiliary/digit.js').then((value) => {test = {...test, ...value}})
import('./src/finiteSets/sums.js').then((value) => {test = {...test, ...value}})
import('./src/finiteSets/products.js').then((value) => {test = {...test, ...value}})
import('./src/finiteSets/combinations.js').then((value) => {test = {...test, ...value}})
import('./src/finiteSets/permutations/permutations.js').then((value) => {test = {...test, ...value}})
