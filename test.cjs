var i = {}

import('./src/auxiliary/bigIntLog.js').then((value) => {i = {...i, ...value}})
import('./src/ultilities/enumerate.js').then((value) => {i = {...i, ...value}})
import('./src/auxiliary/digit.js').then((value) => {i = {...i, ...value}})
import('./src/finiteSets/sums.js').then((value) => {i = {...i, ...value}})
import('./src/finiteSets/products.js').then((value) => {i = {...i, ...value}})
