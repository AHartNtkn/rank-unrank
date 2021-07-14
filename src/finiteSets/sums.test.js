import {finSumUnrank, finSumRank, negSumValError, negSumIndError, bigSumValError, bigSumIndError} from './sums.js'
import {negElemError, bigElemError, zeroFinError, negFinError} from './errors.js'
import {bigRankError, negRankError} from '../genericErrors.js'

test('Verifying error instances of finSumUnrank', () => {
  expect(() => {
    finSumUnrank(
    [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, -28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
    ,445n)
  }).toThrow(negFinError)

  expect(() => {
    finSumUnrank(
    [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, 28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
    ,-445n)
  }).toThrow(negRankError)

  expect(() => {
    finSumUnrank(
    [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, 28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
    ,524n)
  }).toThrow(bigRankError)
})

test('Verifying error instances of finSumRank', () => {
  expect(() => {
    finSumRank(
    [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, -28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
    ,[2, 2n])
  }).toThrow(negFinError)

  expect(() => {
    finSumRank(
    [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, 28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
    ,[-2, 2n])
  }).toThrow(negSumIndError)

  expect(() => {
    finSumRank(
    [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, 28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
    ,[2, -2n])
  }).toThrow(negSumValError)

  expect(() => {
    finSumRank(
    [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, 28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
    ,[26, 2n])
  }).toThrow(bigSumIndError)

  expect(() => {
    finSumRank(
    [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, 28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
    ,[2, 3n])
  }).toThrow(bigSumValError)
})

// TODO: Remover .toString() whenever jest supports BigInt
test('Verifying for several values for that finSumRank and finSumUnrank are inverses.', () => {
  expect(finSumRank(
  [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, 28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
  ,finSumUnrank(
  [40n, 27n, 3n, 0n, 10n, 20n, 9n, 34n, 43n, 9n, 17n, 37n, 20n, 21n, 43n, 28n, 28n, 29n, 4n, 6n, 45n, 2n, 36n, 2n, 4n, 7n]
  ,445n)).toString()
  ).toBe(445n.toString())

  expect(finSumRank(
  [0n, 17n, 11n, 7n, 3n, 15n, 5n, 7n, 9n, 0n, 17n, 0n, 6n, 10n, 14n, 6n, 16n, 2n, 2n, 16n, 7n, 13n, 9n, 9n, 15n, 12n, 3n, 4n, 16n, 4n, 7n, 9n, 10n, 14n, 11n, 4n, 2n, 9n, 0n, 6n, 0n, 3n, 17n, 5n, 0n, 17n, 10n, 8n, 2n, 0n, 1n, 7n, 13n, 1n, 7n, 7n]
  ,finSumUnrank(
  [0n, 17n, 11n, 7n, 3n, 15n, 5n, 7n, 9n, 0n, 17n, 0n, 6n, 10n, 14n, 6n, 16n, 2n, 2n, 16n, 7n, 13n, 9n, 9n, 15n, 12n, 3n, 4n, 16n, 4n, 7n, 9n, 10n, 14n, 11n, 4n, 2n, 9n, 0n, 6n, 0n, 3n, 17n, 5n, 0n, 17n, 10n, 8n, 2n, 0n, 1n, 7n, 13n, 1n, 7n, 7n]
  ,319n)).toString()
  ).toBe(319n.toString())

  expect(finSumRank(
  [38n, 7n, 30n, 25n, 31n, 26n, 29n, 41n, 20n, 20n, 19n, 22n, 26n, 26n, 25n, 35n, 24n, 34n, 4n, 20n, 32n, 25n, 15n, 30n, 14n, 33n, 4n, 0n, 41n, 7n, 15n, 11n, 33n, 38n, 41n, 40n, 6n, 12n, 6n, 21n, 26n, 12n, 6n, 33n, 4n, 13n, 7n, 18n, 29n, 7n, 38n, 39n, 10n, 1n, 2n, 37n, 16n, 3n, 11n, 5n, 3n]
  ,finSumUnrank(
  [38n, 7n, 30n, 25n, 31n, 26n, 29n, 41n, 20n, 20n, 19n, 22n, 26n, 26n, 25n, 35n, 24n, 34n, 4n, 20n, 32n, 25n, 15n, 30n, 14n, 33n, 4n, 0n, 41n, 7n, 15n, 11n, 33n, 38n, 41n, 40n, 6n, 12n, 6n, 21n, 26n, 12n, 6n, 33n, 4n, 13n, 7n, 18n, 29n, 7n, 38n, 39n, 10n, 1n, 2n, 37n, 16n, 3n, 11n, 5n, 3n]
  ,245n)).toString()
  ).toBe(245n.toString())

  expect(finSumRank(
  [27n, 3n, 19n, 11n, 5n, 2n, 16n, 25n, 0n, 19n, 18n, 28n]
  ,finSumUnrank(
  [27n, 3n, 19n, 11n, 5n, 2n, 16n, 25n, 0n, 19n, 18n, 28n]
  ,97n)).toString()
  ).toBe(97n.toString())

  expect(finSumRank(
  [49n, 43n, 18n, 43n, 32n, 26n, 39n, 1n, 1n]
  ,finSumUnrank(
  [49n, 43n, 18n, 43n, 32n, 26n, 39n, 1n, 1n]
  ,177n)).toString()
  ).toBe(177n.toString())

  expect(finSumRank(
  [5n, 11n, 29n, 32n, 26n, 32n, 24n, 14n, 18n, 16n, 10n, 19n, 41n, 11n, 9n, 6n, 19n, 10n, 14n, 7n, 38n, 12n, 22n, 11n, 47n, 8n, 7n, 34n, 12n, 39n, 13n, 2n, 10n, 47n, 38n, 15n, 39n, 27n, 6n, 3n, 35n, 15n]
  ,finSumUnrank(
  [5n, 11n, 29n, 32n, 26n, 32n, 24n, 14n, 18n, 16n, 10n, 19n, 41n, 11n, 9n, 6n, 19n, 10n, 14n, 7n, 38n, 12n, 22n, 11n, 47n, 8n, 7n, 34n, 12n, 39n, 13n, 2n, 10n, 47n, 38n, 15n, 39n, 27n, 6n, 3n, 35n, 15n]
  ,530n)).toString()
  ).toBe(530n.toString())

  expect(finSumRank(
  [2n, 0n, 6n, 15n, 19n, 27n, 32n, 16n, 34n, 12n, 10n, 6n, 15n, 18n, 19n, 30n, 17n, 10n, 33n, 7n, 31n, 33n, 24n, 5n, 13n, 27n, 3n, 9n, 14n, 15n, 11n, 32n, 12n, 11n, 19n, 0n, 1n, 9n, 21n, 11n, 32n, 7n, 32n, 15n, 24n, 28n, 21n, 26n, 34n, 22n, 5n, 28n, 4n]
  ,finSumUnrank(
  [2n, 0n, 6n, 15n, 19n, 27n, 32n, 16n, 34n, 12n, 10n, 6n, 15n, 18n, 19n, 30n, 17n, 10n, 33n, 7n, 31n, 33n, 24n, 5n, 13n, 27n, 3n, 9n, 14n, 15n, 11n, 32n, 12n, 11n, 19n, 0n, 1n, 9n, 21n, 11n, 32n, 7n, 32n, 15n, 24n, 28n, 21n, 26n, 34n, 22n, 5n, 28n, 4n]
  ,12n)).toString()
  ).toBe(12n.toString())

  expect(finSumRank(
  [14n, 13n, 14n, 13n, 30n, 20n, 9n, 5n, 4n, 19n, 3n]
  ,finSumUnrank(
  [14n, 13n, 14n, 13n, 30n, 20n, 9n, 5n, 4n, 19n, 3n]
  ,67n)).toString()
  ).toBe(67n.toString())

  expect(finSumRank(
  [1n, 2n, 2n, 1n, 2n, 0n, 2n, 1n, 0n, 0n, 2n, 0n, 0n, 0n, 1n, 0n, 2n, 2n, 1n, 3n, 0n, 2n, 3n, 3n, 0n, 3n, 0n, 2n, 2n, 3n, 1n, 2n, 1n, 3n, 3n, 1n, 2n, 2n, 1n, 3n, 1n, 1n, 0n, 3n, 1n]
  ,finSumUnrank(
  [1n, 2n, 2n, 1n, 2n, 0n, 2n, 1n, 0n, 0n, 2n, 0n, 0n, 0n, 1n, 0n, 2n, 2n, 1n, 3n, 0n, 2n, 3n, 3n, 0n, 3n, 0n, 2n, 2n, 3n, 1n, 2n, 1n, 3n, 3n, 1n, 2n, 2n, 1n, 3n, 1n, 1n, 0n, 3n, 1n]
  ,41n)).toString()
  ).toBe(41n.toString())

  expect(finSumRank(
  [18n, 21n, 23n, 19n, 10n, 12n, 5n, 9n, 27n, 5n, 11n, 20n, 14n, 25n, 3n, 11n, 6n, 23n, 20n, 3n, 16n, 14n, 7n, 15n, 18n, 1n, 4n, 15n, 23n, 12n, 12n, 12n, 9n, 12n, 21n, 2n, 14n, 4n, 7n, 7n, 10n, 0n, 15n, 5n, 20n, 6n]
  ,finSumUnrank(
  [18n, 21n, 23n, 19n, 10n, 12n, 5n, 9n, 27n, 5n, 11n, 20n, 14n, 25n, 3n, 11n, 6n, 23n, 20n, 3n, 16n, 14n, 7n, 15n, 18n, 1n, 4n, 15n, 23n, 12n, 12n, 12n, 9n, 12n, 21n, 2n, 14n, 4n, 7n, 7n, 10n, 0n, 15n, 5n, 20n, 6n]
  ,258n)).toString()
  ).toBe(258n.toString())

  expect(finSumRank(
  [1n, 16n, 13n, 10n, 13n, 13n, 11n, 2n, 17n, 7n, 7n, 7n, 10n, 4n, 14n, 15n, 7n, 0n, 7n, 7n, 1n, 2n, 11n, 16n, 2n, 0n, 4n, 1n, 12n, 8n, 1n, 0n, 9n, 9n, 5n, 3n, 2n, 10n, 2n, 11n, 8n, 1n, 5n, 7n, 8n, 7n, 9n, 2n, 8n, 8n, 11n, 5n, 5n, 4n, 9n, 6n, 17n, 8n, 4n, 7n, 7n, 4n, 16n, 5n, 12n, 14n, 7n, 1n, 0n, 9n, 1n, 8n, 1n]
  ,finSumUnrank(
  [1n, 16n, 13n, 10n, 13n, 13n, 11n, 2n, 17n, 7n, 7n, 7n, 10n, 4n, 14n, 15n, 7n, 0n, 7n, 7n, 1n, 2n, 11n, 16n, 2n, 0n, 4n, 1n, 12n, 8n, 1n, 0n, 9n, 9n, 5n, 3n, 2n, 10n, 2n, 11n, 8n, 1n, 5n, 7n, 8n, 7n, 9n, 2n, 8n, 8n, 11n, 5n, 5n, 4n, 9n, 6n, 17n, 8n, 4n, 7n, 7n, 4n, 16n, 5n, 12n, 14n, 7n, 1n, 0n, 9n, 1n, 8n, 1n]
  ,434n)).toString()
  ).toBe(434n.toString())

  expect(finSumRank(
  [46n, 45n, 13n, 23n, 21n, 33n, 19n, 2n, 9n, 1n]
  ,finSumUnrank(
  [46n, 45n, 13n, 23n, 21n, 33n, 19n, 2n, 9n, 1n]
  ,176n)).toString()
  ).toBe(176n.toString())

  expect(finSumRank(
  [0n, 6n, 11n, 10n, 4n, 3n, 7n, 4n, 10n, 7n, 2n, 1n, 2n, 2n, 10n, 9n, 4n, 4n, 11n, 3n, 6n, 2n, 1n, 11n, 1n, 7n, 4n, 5n, 8n, 11n, 9n, 6n, 0n, 4n, 10n, 6n, 9n, 4n, 7n, 8n, 5n, 10n, 10n, 1n, 4n, 11n, 4n]
  ,finSumUnrank(
  [0n, 6n, 11n, 10n, 4n, 3n, 7n, 4n, 10n, 7n, 2n, 1n, 2n, 2n, 10n, 9n, 4n, 4n, 11n, 3n, 6n, 2n, 1n, 11n, 1n, 7n, 4n, 5n, 8n, 11n, 9n, 6n, 0n, 4n, 10n, 6n, 9n, 4n, 7n, 8n, 5n, 10n, 10n, 1n, 4n, 11n, 4n]
  ,65n)).toString()
  ).toBe(65n.toString())

  expect(finSumRank(
  [21n, 26n, 1n, 9n, 13n, 4n, 21n, 8n, 19n, 6n, 3n, 24n, 8n, 16n, 22n, 14n, 6n, 17n, 1n, 19n, 18n, 27n, 21n, 4n, 1n, 11n, 26n, 26n, 13n, 21n, 9n, 22n, 3n, 22n, 21n, 0n, 4n, 8n, 14n, 6n, 0n, 16n, 24n, 25n, 4n, 2n, 2n, 20n, 6n, 27n, 4n, 0n, 14n, 7n, 6n, 1n]
  ,finSumUnrank(
  [21n, 26n, 1n, 9n, 13n, 4n, 21n, 8n, 19n, 6n, 3n, 24n, 8n, 16n, 22n, 14n, 6n, 17n, 1n, 19n, 18n, 27n, 21n, 4n, 1n, 11n, 26n, 26n, 13n, 21n, 9n, 22n, 3n, 22n, 21n, 0n, 4n, 8n, 14n, 6n, 0n, 16n, 24n, 25n, 4n, 2n, 2n, 20n, 6n, 27n, 4n, 0n, 14n, 7n, 6n, 1n]
  ,324n)).toString()
  ).toBe(324n.toString())

  expect(finSumRank(
  [12n, 1n, 5n, 12n, 0n, 0n, 9n, 1n, 10n, 15n, 1n, 4n, 10n, 7n, 9n]
  ,finSumUnrank(
  [12n, 1n, 5n, 12n, 0n, 0n, 9n, 1n, 10n, 15n, 1n, 4n, 10n, 7n, 9n]
  ,17n)).toString()
  ).toBe(17n.toString())

  expect(finSumRank(
  [3n, 11n, 0n, 7n, 7n, 8n, 5n, 10n, 12n, 4n, 14n, 3n, 6n]
  ,finSumUnrank(
  [3n, 11n, 0n, 7n, 7n, 8n, 5n, 10n, 12n, 4n, 14n, 3n, 6n]
  ,50n)).toString()
  ).toBe(50n.toString())

  expect(finSumRank(
  [0n, 6n, 0n, 5n, 1n, 3n, 12n, 3n, 12n, 10n, 5n, 13n, 0n, 6n, 2n, 7n, 4n, 3n, 9n, 10n, 12n, 4n, 6n, 12n, 5n, 2n, 13n, 13n, 2n]
  ,finSumUnrank(
  [0n, 6n, 0n, 5n, 1n, 3n, 12n, 3n, 12n, 10n, 5n, 13n, 0n, 6n, 2n, 7n, 4n, 3n, 9n, 10n, 12n, 4n, 6n, 12n, 5n, 2n, 13n, 13n, 2n]
  ,52n)).toString()
  ).toBe(52n.toString())

  expect(finSumRank(
  [43n, 10n, 39n, 44n, 24n, 12n, 0n, 11n, 37n, 29n, 20n, 18n, 42n, 22n, 34n, 33n, 29n, 39n, 2n, 41n, 21n, 5n, 27n, 44n, 37n, 4n, 4n, 30n, 17n, 30n, 26n, 4n, 40n, 14n, 1n, 12n, 30n, 10n, 10n, 44n, 3n]
  ,finSumUnrank(
  [43n, 10n, 39n, 44n, 24n, 12n, 0n, 11n, 37n, 29n, 20n, 18n, 42n, 22n, 34n, 33n, 29n, 39n, 2n, 41n, 21n, 5n, 27n, 44n, 37n, 4n, 4n, 30n, 17n, 30n, 26n, 4n, 40n, 14n, 1n, 12n, 30n, 10n, 10n, 44n, 3n]
  ,791n)).toString()
  ).toBe(791n.toString())

  expect(finSumRank(
  [39n, 13n, 20n, 0n, 29n, 16n, 0n, 35n, 40n, 45n, 26n, 37n, 14n, 17n, 31n, 24n, 43n, 5n, 44n, 42n, 42n, 21n, 13n, 42n, 18n, 33n, 14n, 24n, 16n, 24n, 6n, 10n, 22n, 41n, 11n, 1n, 27n, 3n, 39n, 14n, 25n, 10n, 16n, 27n, 39n, 25n, 0n, 7n, 28n, 9n, 13n, 5n, 30n, 15n, 1n]
  ,finSumUnrank(
  [39n, 13n, 20n, 0n, 29n, 16n, 0n, 35n, 40n, 45n, 26n, 37n, 14n, 17n, 31n, 24n, 43n, 5n, 44n, 42n, 42n, 21n, 13n, 42n, 18n, 33n, 14n, 24n, 16n, 24n, 6n, 10n, 22n, 41n, 11n, 1n, 27n, 3n, 39n, 14n, 25n, 10n, 16n, 27n, 39n, 25n, 0n, 7n, 28n, 9n, 13n, 5n, 30n, 15n, 1n]
  ,425n)).toString()
  ).toBe(425n.toString())

  expect(finSumRank(
  [26n, 19n, 5n]
  ,finSumUnrank(
  [26n, 19n, 5n]
  ,2n)).toString()
  ).toBe(2n.toString())

  expect(finSumRank(
  [3n, 47n, 2n, 18n, 12n, 41n, 14n, 36n, 42n, 33n, 1n, 39n, 34n, 2n, 31n, 28n, 1n, 33n, 33n, 23n, 36n, 14n, 34n, 19n, 46n, 10n, 0n, 29n, 29n, 38n, 35n, 22n, 18n, 27n, 10n, 30n, 42n, 20n, 48n, 4n, 26n, 8n, 41n, 33n, 20n, 43n, 14n, 6n, 39n, 26n, 20n, 32n, 19n, 31n, 1n, 9n]
  ,finSumUnrank(
  [3n, 47n, 2n, 18n, 12n, 41n, 14n, 36n, 42n, 33n, 1n, 39n, 34n, 2n, 31n, 28n, 1n, 33n, 33n, 23n, 36n, 14n, 34n, 19n, 46n, 10n, 0n, 29n, 29n, 38n, 35n, 22n, 18n, 27n, 10n, 30n, 42n, 20n, 48n, 4n, 26n, 8n, 41n, 33n, 20n, 43n, 14n, 6n, 39n, 26n, 20n, 32n, 19n, 31n, 1n, 9n]
  ,1164n)).toString()
  ).toBe(1164n.toString())

  expect(finSumRank(
  [10n, 7n, 20n, 22n, 15n, 16n, 13n, 1n, 23n, 10n, 32n, 7n, 4n, 28n, 24n, 0n, 11n, 32n, 5n, 21n, 1n, 9n, 16n, 36n, 4n]
  ,finSumUnrank(
  [10n, 7n, 20n, 22n, 15n, 16n, 13n, 1n, 23n, 10n, 32n, 7n, 4n, 28n, 24n, 0n, 11n, 32n, 5n, 21n, 1n, 9n, 16n, 36n, 4n]
  ,77n)).toString()
  ).toBe(77n.toString())

  expect(finSumRank(
  [3n, 0n, 0n, 1n, 2n, 4n, 3n, 3n, 1n, 0n, 2n, 1n, 3n, 1n, 5n, 3n, 3n, 1n, 2n, 4n, 4n, 4n, 4n, 1n, 5n, 2n, 5n, 4n, 5n, 4n, 5n, 2n, 2n, 1n, 4n, 0n, 4n, 4n, 1n, 5n, 3n, 1n, 5n, 5n, 4n, 0n, 5n, 3n, 2n, 0n, 4n, 5n, 0n, 3n, 3n, 3n, 0n, 5n, 1n]
  ,finSumUnrank(
  [3n, 0n, 0n, 1n, 2n, 4n, 3n, 3n, 1n, 0n, 2n, 1n, 3n, 1n, 5n, 3n, 3n, 1n, 2n, 4n, 4n, 4n, 4n, 1n, 5n, 2n, 5n, 4n, 5n, 4n, 5n, 2n, 2n, 1n, 4n, 0n, 4n, 4n, 1n, 5n, 3n, 1n, 5n, 5n, 4n, 0n, 5n, 3n, 2n, 0n, 4n, 5n, 0n, 3n, 3n, 3n, 0n, 5n, 1n]
  ,17n)).toString()
  ).toBe(17n.toString())

  expect(finSumRank(
  [40n, 47n, 8n, 11n, 39n, 6n, 37n, 39n, 29n, 4n, 3n, 14n, 35n, 32n, 17n, 19n, 23n, 40n, 40n, 5n, 26n, 11n, 3n, 5n, 22n, 30n, 28n, 32n, 32n, 31n, 34n, 9n, 4n, 26n, 47n, 42n, 6n, 36n, 8n, 3n, 37n, 11n, 27n, 17n, 29n, 18n, 1n, 37n, 19n, 23n, 5n]
  ,finSumUnrank(
  [40n, 47n, 8n, 11n, 39n, 6n, 37n, 39n, 29n, 4n, 3n, 14n, 35n, 32n, 17n, 19n, 23n, 40n, 40n, 5n, 26n, 11n, 3n, 5n, 22n, 30n, 28n, 32n, 32n, 31n, 34n, 9n, 4n, 26n, 47n, 42n, 6n, 36n, 8n, 3n, 37n, 11n, 27n, 17n, 29n, 18n, 1n, 37n, 19n, 23n, 5n]
  ,44n)).toString()
  ).toBe(44n.toString())

  expect(finSumRank(
  [28n, 13n, 33n, 7n, 22n, 2n, 20n, 36n, 48n, 34n, 6n, 2n, 30n, 13n, 3n, 24n, 22n, 11n, 18n, 17n, 31n, 46n, 31n, 57n, 42n, 57n, 1n, 48n, 3n, 25n, 59n, 47n, 50n, 35n, 44n, 27n, 46n, 41n, 19n]
  ,finSumUnrank(
  [28n, 13n, 33n, 7n, 22n, 2n, 20n, 36n, 48n, 34n, 6n, 2n, 30n, 13n, 3n, 24n, 22n, 11n, 18n, 17n, 31n, 46n, 31n, 57n, 42n, 57n, 1n, 48n, 3n, 25n, 59n, 47n, 50n, 35n, 44n, 27n, 46n, 41n, 19n]
  ,947n)).toString()
  ).toBe(947n.toString())

  expect(finSumRank(
  [6n, 5n, 1n, 7n, 7n, 4n, 1n, 7n, 8n, 0n, 8n, 2n, 5n, 7n, 3n, 7n, 2n, 8n, 4n, 9n, 7n, 5n, 0n, 7n, 3n, 4n, 3n, 4n, 1n, 5n, 6n, 4n, 2n, 2n, 6n, 8n, 8n, 3n, 1n, 4n, 6n, 2n, 2n, 3n, 8n, 4n, 8n, 4n, 2n, 5n, 6n, 0n, 6n, 9n, 5n, 5n, 7n, 8n, 4n, 5n, 3n, 6n]
  ,finSumUnrank(
  [6n, 5n, 1n, 7n, 7n, 4n, 1n, 7n, 8n, 0n, 8n, 2n, 5n, 7n, 3n, 7n, 2n, 8n, 4n, 9n, 7n, 5n, 0n, 7n, 3n, 4n, 3n, 4n, 1n, 5n, 6n, 4n, 2n, 2n, 6n, 8n, 8n, 3n, 1n, 4n, 6n, 2n, 2n, 3n, 8n, 4n, 8n, 4n, 2n, 5n, 6n, 0n, 6n, 9n, 5n, 5n, 7n, 8n, 4n, 5n, 3n, 6n]
  ,170n)).toString()
  ).toBe(170n.toString())

  expect(finSumRank(
  [6n, 6n, 4n]
  ,finSumUnrank(
  [6n, 6n, 4n]
  ,2n)).toString()
  ).toBe(2n.toString())

  expect(finSumRank(
  [2n, 8n, 3n, 8n, 0n, 24n, 25n, 10n, 27n, 11n, 6n, 10n, 9n, 23n, 25n, 11n, 3n, 3n, 19n, 13n, 18n, 7n, 27n, 25n, 4n, 18n, 28n, 13n, 24n, 3n, 13n]
  ,finSumUnrank(
  [2n, 8n, 3n, 8n, 0n, 24n, 25n, 10n, 27n, 11n, 6n, 10n, 9n, 23n, 25n, 11n, 3n, 3n, 19n, 13n, 18n, 7n, 27n, 25n, 4n, 18n, 28n, 13n, 24n, 3n, 13n]
  ,68n)).toString()
  ).toBe(68n.toString())

  expect(finSumRank(
  [10n, 8n, 0n, 5n, 4n, 3n, 3n, 10n, 3n, 1n, 6n, 6n, 0n, 6n, 1n, 1n, 0n, 7n, 0n, 8n, 5n, 6n, 1n, 10n, 5n, 6n, 7n, 8n, 6n, 10n, 6n, 4n, 6n, 6n, 8n, 2n]
  ,finSumUnrank(
  [10n, 8n, 0n, 5n, 4n, 3n, 3n, 10n, 3n, 1n, 6n, 6n, 0n, 6n, 1n, 1n, 0n, 7n, 0n, 8n, 5n, 6n, 1n, 10n, 5n, 6n, 7n, 8n, 6n, 10n, 6n, 4n, 6n, 6n, 8n, 2n]
  ,144n)).toString()
  ).toBe(144n.toString())

  expect(finSumRank(
  [2n, 20n, 5n, 30n, 14n, 18n, 30n, 29n, 7n, 30n, 8n, 4n, 25n, 14n, 0n, 1n, 24n, 17n, 12n, 28n, 3n, 25n, 0n, 5n, 24n, 16n, 24n, 10n, 20n, 8n, 5n, 19n, 27n, 21n, 28n, 27n, 22n, 20n, 29n, 16n, 5n]
  ,finSumUnrank(
  [2n, 20n, 5n, 30n, 14n, 18n, 30n, 29n, 7n, 30n, 8n, 4n, 25n, 14n, 0n, 1n, 24n, 17n, 12n, 28n, 3n, 25n, 0n, 5n, 24n, 16n, 24n, 10n, 20n, 8n, 5n, 19n, 27n, 21n, 28n, 27n, 22n, 20n, 29n, 16n, 5n]
  ,614n)).toString()
  ).toBe(614n.toString())

  expect(finSumRank(
  [14n, 41n, 6n, 3n, 1n, 29n, 39n, 1n, 17n, 19n, 11n, 2n, 12n]
  ,finSumUnrank(
  [14n, 41n, 6n, 3n, 1n, 29n, 39n, 1n, 17n, 19n, 11n, 2n, 12n]
  ,78n)).toString()
  ).toBe(78n.toString())

  expect(finSumRank(
  [16n, 5n, 31n, 20n, 9n, 36n, 19n, 30n, 8n, 31n, 14n, 24n, 41n, 10n, 0n, 55n, 3n, 34n, 9n, 25n, 45n, 46n, 28n, 4n, 46n, 30n, 24n, 39n, 1n, 28n, 52n, 7n]
  ,finSumUnrank(
  [16n, 5n, 31n, 20n, 9n, 36n, 19n, 30n, 8n, 31n, 14n, 24n, 41n, 10n, 0n, 55n, 3n, 34n, 9n, 25n, 45n, 46n, 28n, 4n, 46n, 30n, 24n, 39n, 1n, 28n, 52n, 7n]
  ,340n)).toString()
  ).toBe(340n.toString())

  expect(finSumRank(
  [2n, 9n, 3n, 5n, 15n, 16n, 9n, 14n, 10n, 20n, 22n, 6n, 12n, 19n, 9n, 22n, 7n, 14n, 15n, 13n, 16n, 0n, 8n, 0n, 12n, 16n, 6n, 8n, 5n, 18n, 10n, 18n, 12n, 21n, 17n, 11n, 3n, 9n, 22n, 8n, 2n, 13n, 9n, 20n, 19n, 7n, 5n, 10n, 12n, 1n, 3n]
  ,finSumUnrank(
  [2n, 9n, 3n, 5n, 15n, 16n, 9n, 14n, 10n, 20n, 22n, 6n, 12n, 19n, 9n, 22n, 7n, 14n, 15n, 13n, 16n, 0n, 8n, 0n, 12n, 16n, 6n, 8n, 5n, 18n, 10n, 18n, 12n, 21n, 17n, 11n, 3n, 9n, 22n, 8n, 2n, 13n, 9n, 20n, 19n, 7n, 5n, 10n, 12n, 1n, 3n]
  ,167n)).toString()
  ).toBe(167n.toString())

  expect(finSumRank(
  [2n, 1n, 0n, 1n, 1n, 1n, 2n, 1n, 0n, 0n, 0n, 0n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 0n, 1n, 0n, 2n, 2n, 0n, 1n, 0n, 2n, 2n, 2n, 1n, 0n, 2n, 1n, 2n, 0n, 1n, 0n, 1n, 1n, 2n, 1n, 2n, 0n, 0n, 1n, 1n, 2n, 0n, 1n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 0n, 2n, 1n, 0n, 2n, 0n, 2n, 2n, 0n, 1n, 1n, 1n, 0n, 0n, 2n, 1n, 2n, 2n, 0n, 0n, 0n, 2n, 0n, 2n, 1n, 1n, 2n, 0n, 2n, 2n, 0n, 0n, 0n, 2n, 0n, 2n, 0n, 1n, 0n, 2n, 0n, 0n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 0n, 2n, 2n, 1n, 0n, 1n, 1n, 1n, 0n, 1n, 1n, 2n, 0n, 2n, 1n, 2n, 0n, 0n, 1n, 2n, 0n, 2n, 0n, 0n, 2n, 0n, 1n, 0n, 2n, 1n, 2n, 1n, 0n, 0n, 2n, 1n, 2n, 1n, 2n, 2n, 0n, 1n, 0n, 0n, 2n, 1n, 2n, 1n, 0n, 2n, 0n, 0n, 1n, 2n, 1n, 2n, 0n, 2n, 1n, 0n, 1n]
  ,finSumUnrank(
  [2n, 1n, 0n, 1n, 1n, 1n, 2n, 1n, 0n, 0n, 0n, 0n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 0n, 1n, 0n, 2n, 2n, 0n, 1n, 0n, 2n, 2n, 2n, 1n, 0n, 2n, 1n, 2n, 0n, 1n, 0n, 1n, 1n, 2n, 1n, 2n, 0n, 0n, 1n, 1n, 2n, 0n, 1n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 0n, 2n, 1n, 0n, 2n, 0n, 2n, 2n, 0n, 1n, 1n, 1n, 0n, 0n, 2n, 1n, 2n, 2n, 0n, 0n, 0n, 2n, 0n, 2n, 1n, 1n, 2n, 0n, 2n, 2n, 0n, 0n, 0n, 2n, 0n, 2n, 0n, 1n, 0n, 2n, 0n, 0n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 0n, 2n, 2n, 1n, 0n, 1n, 1n, 1n, 0n, 1n, 1n, 2n, 0n, 2n, 1n, 2n, 0n, 0n, 1n, 2n, 0n, 2n, 0n, 0n, 2n, 0n, 1n, 0n, 2n, 1n, 2n, 1n, 0n, 0n, 2n, 1n, 2n, 1n, 2n, 2n, 0n, 1n, 0n, 0n, 2n, 1n, 2n, 1n, 0n, 2n, 0n, 0n, 1n, 2n, 1n, 2n, 0n, 2n, 1n, 0n, 1n]
  ,101n)).toString()
  ).toBe(101n.toString())

  expect(finSumRank(
  [3n]
  ,finSumUnrank(
  [3n]
  ,1n)).toString()
  ).toBe(1n.toString())

  expect(finSumRank(
  [3n, 6n, 11n, 38n, 7n, 11n, 19n, 36n, 6n, 24n, 20n, 23n, 39n]
  ,finSumUnrank(
  [3n, 6n, 11n, 38n, 7n, 11n, 19n, 36n, 6n, 24n, 20n, 23n, 39n]
  ,127n)).toString()
  ).toBe(127n.toString())

  expect(finSumRank(
  [5n, 13n, 8n, 16n, 7n, 21n, 9n, 40n, 2n, 62n, 39n, 36n, 43n, 55n, 41n, 14n]
  ,finSumUnrank(
  [5n, 13n, 8n, 16n, 7n, 21n, 9n, 40n, 2n, 62n, 39n, 36n, 43n, 55n, 41n, 14n]
  ,26n)).toString()
  ).toBe(26n.toString())

  expect(finSumRank(
  [23n, 5n, 6n, 3n, 15n, 21n, 4n, 16n, 17n, 3n, 18n, 13n, 14n, 11n, 14n, 11n, 18n, 16n, 22n, 19n, 25n, 22n, 11n, 8n, 21n, 23n, 18n, 11n, 10n, 5n, 6n, 1n, 16n, 3n, 6n, 16n, 24n, 6n, 3n]
  ,finSumUnrank(
  [23n, 5n, 6n, 3n, 15n, 21n, 4n, 16n, 17n, 3n, 18n, 13n, 14n, 11n, 14n, 11n, 18n, 16n, 22n, 19n, 25n, 22n, 11n, 8n, 21n, 23n, 18n, 11n, 10n, 5n, 6n, 1n, 16n, 3n, 6n, 16n, 24n, 6n, 3n]
  ,411n)).toString()
  ).toBe(411n.toString())

  expect(finSumRank(
  [27n, 15n, 16n, 19n, 14n, 11n, 6n, 2n, 24n, 11n, 8n, 28n, 24n, 11n, 23n, 26n, 1n, 20n, 24n, 12n]
  ,finSumUnrank(
  [27n, 15n, 16n, 19n, 14n, 11n, 6n, 2n, 24n, 11n, 8n, 28n, 24n, 11n, 23n, 26n, 1n, 20n, 24n, 12n]
  ,162n)).toString()
  ).toBe(162n.toString())

  expect(finSumRank(
  [2n, 3n, 7n, 11n, 14n, 7n, 7n, 2n, 6n, 12n, 11n, 6n, 6n, 11n, 9n, 6n, 3n, 11n, 2n, 17n, 15n, 16n, 5n, 16n, 15n, 18n, 9n, 10n, 14n, 6n, 18n, 1n, 0n, 10n, 6n, 16n, 0n, 16n, 12n, 3n, 14n, 2n]
  ,finSumUnrank(
  [2n, 3n, 7n, 11n, 14n, 7n, 7n, 2n, 6n, 12n, 11n, 6n, 6n, 11n, 9n, 6n, 3n, 11n, 2n, 17n, 15n, 16n, 5n, 16n, 15n, 18n, 9n, 10n, 14n, 6n, 18n, 1n, 0n, 10n, 6n, 16n, 0n, 16n, 12n, 3n, 14n, 2n]
  ,264n)).toString()
  ).toBe(264n.toString())

  expect(finSumRank(
  [18n, 36n, 7n, 26n, 5n, 13n, 27n, 1n, 35n, 6n, 3n, 34n, 17n, 15n, 6n, 8n, 12n, 8n, 4n, 37n, 5n, 20n, 21n, 26n, 11n, 4n, 19n, 19n, 34n, 24n, 24n, 33n, 38n, 27n, 6n, 9n, 6n, 22n, 12n, 18n, 3n, 19n, 22n, 27n, 2n, 18n, 30n, 37n, 3n, 6n, 28n, 27n, 13n, 17n, 27n, 32n, 21n, 21n]
  ,finSumUnrank(
  [18n, 36n, 7n, 26n, 5n, 13n, 27n, 1n, 35n, 6n, 3n, 34n, 17n, 15n, 6n, 8n, 12n, 8n, 4n, 37n, 5n, 20n, 21n, 26n, 11n, 4n, 19n, 19n, 34n, 24n, 24n, 33n, 38n, 27n, 6n, 9n, 6n, 22n, 12n, 18n, 3n, 19n, 22n, 27n, 2n, 18n, 30n, 37n, 3n, 6n, 28n, 27n, 13n, 17n, 27n, 32n, 21n, 21n]
  ,20n)).toString()
  ).toBe(20n.toString())

  expect(finSumRank(
  [1n, 2n, 5n, 8n, 8n, 9n, 3n, 1n, 6n, 10n, 4n, 9n, 10n, 9n, 9n, 8n, 1n, 6n, 4n]
  ,finSumUnrank(
  [1n, 2n, 5n, 8n, 8n, 9n, 3n, 1n, 6n, 10n, 4n, 9n, 10n, 9n, 9n, 8n, 1n, 6n, 4n]
  ,69n)).toString()
  ).toBe(69n.toString())

  expect(finSumRank(
  [39n, 48n, 11n, 37n, 13n, 37n, 22n, 3n, 51n, 50n, 42n, 12n, 5n, 47n, 47n, 39n, 41n, 18n, 6n, 32n, 14n, 6n, 40n, 47n, 45n, 39n, 50n, 37n, 18n, 1n, 1n, 35n, 47n, 4n, 22n, 1n, 22n, 25n, 9n, 1n, 18n, 11n, 21n, 3n, 41n, 14n, 37n]
  ,finSumUnrank(
  [39n, 48n, 11n, 37n, 13n, 37n, 22n, 3n, 51n, 50n, 42n, 12n, 5n, 47n, 47n, 39n, 41n, 18n, 6n, 32n, 14n, 6n, 40n, 47n, 45n, 39n, 50n, 37n, 18n, 1n, 1n, 35n, 47n, 4n, 22n, 1n, 22n, 25n, 9n, 1n, 18n, 11n, 21n, 3n, 41n, 14n, 37n]
  ,525n)).toString()
  ).toBe(525n.toString())

  expect(finSumRank(
  [4n, 21n, 8n, 6n, 2n, 10n, 4n, 20n, 7n, 5n, 14n, 6n, 10n, 3n, 10n, 4n, 20n, 0n, 3n, 5n, 2n, 17n, 20n, 13n, 16n, 21n, 18n, 10n, 13n, 5n, 19n, 11n, 4n, 20n, 8n, 6n, 14n, 18n]
  ,finSumUnrank(
  [4n, 21n, 8n, 6n, 2n, 10n, 4n, 20n, 7n, 5n, 14n, 6n, 10n, 3n, 10n, 4n, 20n, 0n, 3n, 5n, 2n, 17n, 20n, 13n, 16n, 21n, 18n, 10n, 13n, 5n, 19n, 11n, 4n, 20n, 8n, 6n, 14n, 18n]
  ,395n)).toString()
  ).toBe(395n.toString())

  expect(finSumRank(
  [29n, 29n, 27n, 32n, 13n, 20n, 36n, 20n, 22n, 44n, 13n, 14n, 9n, 32n, 41n, 8n, 25n, 9n, 41n, 11n, 3n, 31n, 9n, 40n, 17n, 7n, 13n, 36n, 35n, 28n, 16n, 2n, 20n, 11n, 36n, 35n, 43n, 29n, 15n, 10n, 31n, 2n, 19n, 25n, 21n, 4n, 34n, 6n, 36n, 31n, 38n, 30n, 14n, 42n, 13n, 26n, 2n, 23n]
  ,finSumUnrank(
  [29n, 29n, 27n, 32n, 13n, 20n, 36n, 20n, 22n, 44n, 13n, 14n, 9n, 32n, 41n, 8n, 25n, 9n, 41n, 11n, 3n, 31n, 9n, 40n, 17n, 7n, 13n, 36n, 35n, 28n, 16n, 2n, 20n, 11n, 36n, 35n, 43n, 29n, 15n, 10n, 31n, 2n, 19n, 25n, 21n, 4n, 34n, 6n, 36n, 31n, 38n, 30n, 14n, 42n, 13n, 26n, 2n, 23n]
  ,326n)).toString()
  ).toBe(326n.toString())

  expect(finSumRank(
  [17n, 23n, 20n, 24n, 26n, 5n, 24n, 22n, 7n, 26n, 11n]
  ,finSumUnrank(
  [17n, 23n, 20n, 24n, 26n, 5n, 24n, 22n, 7n, 26n, 11n]
  ,42n)).toString()
  ).toBe(42n.toString())

  expect(finSumRank(
  [2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 0n, 1n, 1n, 0n, 0n, 0n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 0n, 2n, 0n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 0n, 2n, 1n, 1n, 2n, 2n, 1n]
  ,finSumUnrank(
  [2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 0n, 1n, 1n, 0n, 0n, 0n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 0n, 2n, 0n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 0n, 2n, 1n, 1n, 2n, 2n, 1n]
  ,16n)).toString()
  ).toBe(16n.toString())

  expect(finSumRank(
  [21n, 28n, 35n, 22n, 47n, 48n, 45n, 11n, 11n, 6n, 29n, 53n, 42n, 53n, 1n, 27n, 33n, 41n, 43n, 41n, 18n, 24n, 40n, 19n, 24n, 9n, 41n, 7n, 46n, 16n, 20n, 17n, 52n, 28n, 12n, 13n, 18n, 36n, 18n, 7n, 21n, 5n, 49n, 43n, 52n, 45n, 36n, 46n, 11n, 36n, 51n, 23n, 44n, 25n, 19n, 1n]
  ,finSumUnrank(
  [21n, 28n, 35n, 22n, 47n, 48n, 45n, 11n, 11n, 6n, 29n, 53n, 42n, 53n, 1n, 27n, 33n, 41n, 43n, 41n, 18n, 24n, 40n, 19n, 24n, 9n, 41n, 7n, 46n, 16n, 20n, 17n, 52n, 28n, 12n, 13n, 18n, 36n, 18n, 7n, 21n, 5n, 49n, 43n, 52n, 45n, 36n, 46n, 11n, 36n, 51n, 23n, 44n, 25n, 19n, 1n]
  ,1564n)).toString()
  ).toBe(1564n.toString())

  expect(finSumRank(
  [39n, 6n, 23n, 3n, 15n, 19n, 21n, 19n, 42n, 32n, 20n, 3n, 28n, 22n, 25n, 39n, 14n, 42n, 24n, 42n, 33n, 32n, 32n, 10n, 15n, 33n, 31n, 20n, 4n, 6n, 5n, 4n, 38n, 2n, 4n, 34n, 31n, 15n, 7n, 19n, 27n, 2n, 16n, 29n, 31n, 4n, 4n]
  ,finSumUnrank(
  [39n, 6n, 23n, 3n, 15n, 19n, 21n, 19n, 42n, 32n, 20n, 3n, 28n, 22n, 25n, 39n, 14n, 42n, 24n, 42n, 33n, 32n, 32n, 10n, 15n, 33n, 31n, 20n, 4n, 6n, 5n, 4n, 38n, 2n, 4n, 34n, 31n, 15n, 7n, 19n, 27n, 2n, 16n, 29n, 31n, 4n, 4n]
  ,255n)).toString()
  ).toBe(255n.toString())

  expect(finSumRank(
  [7n, 6n, 0n, 1n, 4n, 1n, 5n, 1n, 9n, 4n, 7n, 8n, 0n, 9n, 5n, 0n, 3n, 0n, 2n, 3n, 5n, 3n, 8n, 0n, 8n, 2n, 5n, 3n, 8n, 8n, 3n, 7n, 7n, 8n, 4n, 1n, 6n, 3n, 4n, 4n, 2n, 9n, 6n, 3n, 7n, 7n, 8n, 4n, 5n, 3n, 4n, 6n, 9n, 1n, 1n, 3n, 4n, 8n, 3n, 2n, 3n, 8n, 1n, 3n, 2n, 4n, 6n, 8n, 2n, 7n, 5n, 2n, 9n, 6n, 2n, 5n, 6n, 2n, 4n, 3n, 7n, 7n, 5n, 7n, 0n, 6n, 2n, 8n, 8n, 6n, 8n, 8n]
  ,finSumUnrank(
  [7n, 6n, 0n, 1n, 4n, 1n, 5n, 1n, 9n, 4n, 7n, 8n, 0n, 9n, 5n, 0n, 3n, 0n, 2n, 3n, 5n, 3n, 8n, 0n, 8n, 2n, 5n, 3n, 8n, 8n, 3n, 7n, 7n, 8n, 4n, 1n, 6n, 3n, 4n, 4n, 2n, 9n, 6n, 3n, 7n, 7n, 8n, 4n, 5n, 3n, 4n, 6n, 9n, 1n, 1n, 3n, 4n, 8n, 3n, 2n, 3n, 8n, 1n, 3n, 2n, 4n, 6n, 8n, 2n, 7n, 5n, 2n, 9n, 6n, 2n, 5n, 6n, 2n, 4n, 3n, 7n, 7n, 5n, 7n, 0n, 6n, 2n, 8n, 8n, 6n, 8n, 8n]
  ,21n)).toString()
  ).toBe(21n.toString())

  expect(finSumRank(
  [29n, 31n, 13n, 7n, 7n]
  ,finSumUnrank(
  [29n, 31n, 13n, 7n, 7n]
  ,48n)).toString()
  ).toBe(48n.toString())

  expect(finSumRank(
  [9n, 0n, 30n, 16n, 17n, 8n, 30n, 25n, 20n, 6n, 8n, 4n, 17n, 20n, 6n, 13n, 29n, 28n, 27n, 29n]
  ,finSumUnrank(
  [9n, 0n, 30n, 16n, 17n, 8n, 30n, 25n, 20n, 6n, 8n, 4n, 17n, 20n, 6n, 13n, 29n, 28n, 27n, 29n]
  ,282n)).toString()
  ).toBe(282n.toString())

  expect(finSumRank(
  [16n, 41n, 56n, 24n, 42n, 19n, 24n, 55n, 48n, 10n, 62n, 28n, 33n, 19n, 57n, 40n, 24n, 3n, 36n, 31n, 12n, 22n, 39n, 29n, 47n, 54n, 57n, 14n, 59n, 6n, 15n, 57n, 45n, 50n, 24n, 1n, 32n, 26n, 30n, 19n, 26n, 52n, 41n, 59n, 7n, 47n, 26n, 61n, 1n]
  ,finSumUnrank(
  [16n, 41n, 56n, 24n, 42n, 19n, 24n, 55n, 48n, 10n, 62n, 28n, 33n, 19n, 57n, 40n, 24n, 3n, 36n, 31n, 12n, 22n, 39n, 29n, 47n, 54n, 57n, 14n, 59n, 6n, 15n, 57n, 45n, 50n, 24n, 1n, 32n, 26n, 30n, 19n, 26n, 52n, 41n, 59n, 7n, 47n, 26n, 61n, 1n]
  ,972n)).toString()
  ).toBe(972n.toString())

  expect(finSumRank(
  [37n, 10n, 28n, 32n, 30n, 25n, 11n, 14n, 37n, 22n, 29n, 30n, 2n, 9n, 12n, 13n, 5n, 17n, 39n, 32n, 38n, 39n, 1n, 40n, 24n, 4n, 41n]
  ,finSumUnrank(
  [37n, 10n, 28n, 32n, 30n, 25n, 11n, 14n, 37n, 22n, 29n, 30n, 2n, 9n, 12n, 13n, 5n, 17n, 39n, 32n, 38n, 39n, 1n, 40n, 24n, 4n, 41n]
  ,158n)).toString()
  ).toBe(158n.toString())

  expect(finSumRank(
  [9n, 5n, 10n, 20n, 3n, 10n, 9n, 13n, 11n, 0n, 17n, 22n, 20n, 4n, 5n, 17n, 5n, 3n, 4n, 6n, 8n, 18n, 16n, 20n, 1n, 17n, 16n, 10n, 8n, 21n, 2n, 9n]
  ,finSumUnrank(
  [9n, 5n, 10n, 20n, 3n, 10n, 9n, 13n, 11n, 0n, 17n, 22n, 20n, 4n, 5n, 17n, 5n, 3n, 4n, 6n, 8n, 18n, 16n, 20n, 1n, 17n, 16n, 10n, 8n, 21n, 2n, 9n]
  ,3n)).toString()
  ).toBe(3n.toString())

  expect(finSumRank(
  [28n, 22n, 40n, 41n, 31n, 24n, 47n, 60n, 36n, 43n, 27n, 21n, 41n, 18n, 4n]
  ,finSumUnrank(
  [28n, 22n, 40n, 41n, 31n, 24n, 47n, 60n, 36n, 43n, 27n, 21n, 41n, 18n, 4n]
  ,442n)).toString()
  ).toBe(442n.toString())

  expect(finSumRank(
  [21n, 4n, 41n, 35n, 31n, 19n, 43n, 19n, 9n, 39n, 1n, 40n, 40n, 15n, 11n, 3n, 31n, 40n, 1n, 9n, 1n, 14n, 25n, 24n, 24n, 6n, 39n, 32n, 36n, 9n, 26n, 33n, 32n, 2n, 11n, 3n, 1n]
  ,finSumUnrank(
  [21n, 4n, 41n, 35n, 31n, 19n, 43n, 19n, 9n, 39n, 1n, 40n, 40n, 15n, 11n, 3n, 31n, 40n, 1n, 9n, 1n, 14n, 25n, 24n, 24n, 6n, 39n, 32n, 36n, 9n, 26n, 33n, 32n, 2n, 11n, 3n, 1n]
  ,158n)).toString()
  ).toBe(158n.toString())

  expect(finSumRank(
  [3n, 2n, 2n, 1n, 0n, 0n, 0n, 3n, 3n, 0n, 1n, 2n, 1n, 0n, 3n, 1n]
  ,finSumUnrank(
  [3n, 2n, 2n, 1n, 0n, 0n, 0n, 3n, 3n, 0n, 1n, 2n, 1n, 0n, 3n, 1n]
  ,6n)).toString()
  ).toBe(6n.toString())

  expect(finSumRank(
  [5n, 1n, 2n, 4n, 3n, 5n, 0n, 2n, 5n, 2n, 0n, 3n, 0n, 3n, 4n, 4n, 4n, 5n, 4n, 4n, 3n, 4n, 3n, 4n, 4n, 0n, 0n, 3n, 2n, 3n, 2n, 5n, 2n, 5n, 0n, 3n, 1n, 5n, 1n, 1n, 3n, 2n, 2n, 5n, 4n, 1n, 3n, 4n, 5n, 5n, 4n, 4n, 0n, 2n, 0n, 4n, 1n, 3n, 5n, 3n, 5n, 4n, 3n, 0n, 1n, 3n, 4n, 5n, 5n, 4n, 5n, 5n, 0n, 0n, 1n, 2n, 3n, 4n, 2n, 5n, 2n, 2n, 0n, 3n, 3n, 3n, 5n, 4n, 2n, 3n, 5n, 5n, 4n, 2n, 4n, 0n, 2n, 3n, 1n, 1n, 5n, 1n, 4n, 4n, 1n, 1n, 5n, 1n, 4n, 5n, 2n, 3n, 1n, 1n, 0n, 1n]
  ,finSumUnrank(
  [5n, 1n, 2n, 4n, 3n, 5n, 0n, 2n, 5n, 2n, 0n, 3n, 0n, 3n, 4n, 4n, 4n, 5n, 4n, 4n, 3n, 4n, 3n, 4n, 4n, 0n, 0n, 3n, 2n, 3n, 2n, 5n, 2n, 5n, 0n, 3n, 1n, 5n, 1n, 1n, 3n, 2n, 2n, 5n, 4n, 1n, 3n, 4n, 5n, 5n, 4n, 4n, 0n, 2n, 0n, 4n, 1n, 3n, 5n, 3n, 5n, 4n, 3n, 0n, 1n, 3n, 4n, 5n, 5n, 4n, 5n, 5n, 0n, 0n, 1n, 2n, 3n, 4n, 2n, 5n, 2n, 2n, 0n, 3n, 3n, 3n, 5n, 4n, 2n, 3n, 5n, 5n, 4n, 2n, 4n, 0n, 2n, 3n, 1n, 1n, 5n, 1n, 4n, 4n, 1n, 1n, 5n, 1n, 4n, 5n, 2n, 3n, 1n, 1n, 0n, 1n]
  ,290n)).toString()
  ).toBe(290n.toString())

  expect(finSumRank(
  [0n, 0n, 3n, 0n, 3n, 4n, 3n, 1n, 4n, 5n, 5n, 0n, 1n, 5n, 3n, 5n, 3n, 4n, 3n, 5n, 5n, 2n, 4n, 2n, 5n, 4n, 2n, 0n, 5n, 4n, 0n, 5n, 0n, 2n, 2n, 5n, 0n, 4n, 2n, 5n, 4n, 3n, 4n, 4n, 3n, 2n, 0n, 0n, 0n, 3n, 5n, 1n, 3n, 4n, 0n, 1n, 3n, 0n, 5n, 0n, 3n, 3n, 5n, 4n, 3n, 1n, 1n, 4n, 4n, 0n, 5n, 0n, 3n, 0n, 0n, 5n, 5n, 5n, 5n, 5n, 3n, 3n, 1n, 1n, 1n, 4n, 5n, 4n, 4n, 1n, 4n, 1n, 3n, 4n, 4n, 5n, 4n, 5n, 2n, 4n, 2n, 5n, 3n, 2n, 4n, 4n, 3n, 3n, 5n, 2n, 2n, 0n, 4n, 0n, 5n, 2n, 4n, 1n, 4n, 4n, 5n, 4n]
  ,finSumUnrank(
  [0n, 0n, 3n, 0n, 3n, 4n, 3n, 1n, 4n, 5n, 5n, 0n, 1n, 5n, 3n, 5n, 3n, 4n, 3n, 5n, 5n, 2n, 4n, 2n, 5n, 4n, 2n, 0n, 5n, 4n, 0n, 5n, 0n, 2n, 2n, 5n, 0n, 4n, 2n, 5n, 4n, 3n, 4n, 4n, 3n, 2n, 0n, 0n, 0n, 3n, 5n, 1n, 3n, 4n, 0n, 1n, 3n, 0n, 5n, 0n, 3n, 3n, 5n, 4n, 3n, 1n, 1n, 4n, 4n, 0n, 5n, 0n, 3n, 0n, 0n, 5n, 5n, 5n, 5n, 5n, 3n, 3n, 1n, 1n, 1n, 4n, 5n, 4n, 4n, 1n, 4n, 1n, 3n, 4n, 4n, 5n, 4n, 5n, 2n, 4n, 2n, 5n, 3n, 2n, 4n, 4n, 3n, 3n, 5n, 2n, 2n, 0n, 4n, 0n, 5n, 2n, 4n, 1n, 4n, 4n, 5n, 4n]
  ,119n)).toString()
  ).toBe(119n.toString())

  expect(finSumRank(
  [25n, 12n, 12n, 38n, 21n, 6n, 6n, 33n, 0n, 5n, 8n, 5n, 17n, 9n, 26n, 25n, 22n, 7n, 11n]
  ,finSumUnrank(
  [25n, 12n, 12n, 38n, 21n, 6n, 6n, 33n, 0n, 5n, 8n, 5n, 17n, 9n, 26n, 25n, 22n, 7n, 11n]
  ,267n)).toString()
  ).toBe(267n.toString())

  expect(finSumRank(
  [54n, 1n, 53n, 8n, 30n, 22n, 48n, 41n, 33n, 3n, 12n, 11n, 40n, 15n, 2n, 0n, 7n, 15n, 31n, 30n, 7n, 2n, 21n, 30n, 27n, 11n, 27n, 51n, 43n, 16n, 29n, 49n, 7n, 10n, 50n, 5n, 44n, 28n, 32n, 1n]
  ,finSumUnrank(
  [54n, 1n, 53n, 8n, 30n, 22n, 48n, 41n, 33n, 3n, 12n, 11n, 40n, 15n, 2n, 0n, 7n, 15n, 31n, 30n, 7n, 2n, 21n, 30n, 27n, 11n, 27n, 51n, 43n, 16n, 29n, 49n, 7n, 10n, 50n, 5n, 44n, 28n, 32n, 1n]
  ,847n)).toString()
  ).toBe(847n.toString())

  expect(finSumRank(
  [2n, 10n, 3n, 1n, 1n, 9n, 7n, 4n, 5n, 3n, 4n, 9n, 4n, 0n, 8n, 8n, 8n, 10n, 4n, 0n, 3n, 7n, 9n, 6n, 9n, 7n, 8n, 4n, 9n, 0n, 2n, 8n, 4n, 6n, 1n, 8n, 5n, 10n, 3n, 0n, 3n, 5n, 9n, 2n, 3n, 8n, 2n, 9n, 8n]
  ,finSumUnrank(
  [2n, 10n, 3n, 1n, 1n, 9n, 7n, 4n, 5n, 3n, 4n, 9n, 4n, 0n, 8n, 8n, 8n, 10n, 4n, 0n, 3n, 7n, 9n, 6n, 9n, 7n, 8n, 4n, 9n, 0n, 2n, 8n, 4n, 6n, 1n, 8n, 5n, 10n, 3n, 0n, 3n, 5n, 9n, 2n, 3n, 8n, 2n, 9n, 8n]
  ,94n)).toString()
  ).toBe(94n.toString())

  expect(finSumRank(
  [50n, 3n, 35n, 43n, 21n, 22n, 37n, 20n, 40n, 34n, 50n, 42n, 50n, 29n, 13n, 2n, 38n, 60n, 15n, 23n, 3n, 8n, 55n, 58n, 37n, 17n, 15n, 48n, 56n, 48n, 24n, 60n, 23n, 32n, 47n, 6n, 60n, 41n, 58n, 39n, 35n, 32n, 42n, 32n, 25n]
  ,finSumUnrank(
  [50n, 3n, 35n, 43n, 21n, 22n, 37n, 20n, 40n, 34n, 50n, 42n, 50n, 29n, 13n, 2n, 38n, 60n, 15n, 23n, 3n, 8n, 55n, 58n, 37n, 17n, 15n, 48n, 56n, 48n, 24n, 60n, 23n, 32n, 47n, 6n, 60n, 41n, 58n, 39n, 35n, 32n, 42n, 32n, 25n]
  ,1050n)).toString()
  ).toBe(1050n.toString())

  expect(finSumRank(
  [5n, 5n, 8n, 1n, 0n, 2n, 2n, 4n, 1n, 6n, 8n, 2n, 2n, 5n, 2n, 6n, 0n, 8n, 7n, 6n, 1n, 5n, 6n, 5n, 6n, 3n, 1n, 0n, 3n, 0n, 5n, 7n, 4n, 0n, 8n, 2n, 4n, 4n, 1n, 1n, 2n, 5n, 3n, 1n, 7n]
  ,finSumUnrank(
  [5n, 5n, 8n, 1n, 0n, 2n, 2n, 4n, 1n, 6n, 8n, 2n, 2n, 5n, 2n, 6n, 0n, 8n, 7n, 6n, 1n, 5n, 6n, 5n, 6n, 3n, 1n, 0n, 3n, 0n, 5n, 7n, 4n, 0n, 8n, 2n, 4n, 4n, 1n, 1n, 2n, 5n, 3n, 1n, 7n]
  ,137n)).toString()
  ).toBe(137n.toString())

  expect(finSumRank(
  [9n, 23n, 24n, 37n, 23n, 13n, 31n, 23n, 7n, 22n, 1n, 35n, 25n, 38n, 27n, 32n, 21n, 3n]
  ,finSumUnrank(
  [9n, 23n, 24n, 37n, 23n, 13n, 31n, 23n, 7n, 22n, 1n, 35n, 25n, 38n, 27n, 32n, 21n, 3n]
  ,237n)).toString()
  ).toBe(237n.toString())

  expect(finSumRank(
  [23n, 3n, 22n, 28n, 31n, 27n, 10n, 6n, 13n, 27n, 15n, 35n, 34n, 36n, 12n, 29n, 35n, 26n, 24n, 17n, 16n, 16n, 1n, 11n, 24n, 36n, 11n, 31n, 21n, 27n, 19n, 33n, 27n, 4n, 11n, 7n, 21n, 27n, 24n, 5n, 31n, 21n, 37n, 37n, 16n, 22n, 33n, 5n, 20n, 32n, 23n, 18n, 22n, 20n, 0n, 34n, 5n, 36n, 1n, 17n, 14n, 14n, 5n, 1n]
  ,finSumUnrank(
  [23n, 3n, 22n, 28n, 31n, 27n, 10n, 6n, 13n, 27n, 15n, 35n, 34n, 36n, 12n, 29n, 35n, 26n, 24n, 17n, 16n, 16n, 1n, 11n, 24n, 36n, 11n, 31n, 21n, 27n, 19n, 33n, 27n, 4n, 11n, 7n, 21n, 27n, 24n, 5n, 31n, 21n, 37n, 37n, 16n, 22n, 33n, 5n, 20n, 32n, 23n, 18n, 22n, 20n, 0n, 34n, 5n, 36n, 1n, 17n, 14n, 14n, 5n, 1n]
  ,470n)).toString()
  ).toBe(470n.toString())

  expect(finSumRank(
  [3n, 11n, 34n, 1n, 20n, 15n, 15n, 25n, 25n, 16n, 27n, 0n, 36n, 5n, 37n, 36n, 19n, 10n, 14n, 30n, 32n, 19n, 19n, 12n, 19n, 1n, 35n, 30n, 38n, 3n, 37n, 20n, 39n, 11n, 15n, 26n, 8n, 37n, 40n, 6n]
  ,finSumUnrank(
  [3n, 11n, 34n, 1n, 20n, 15n, 15n, 25n, 25n, 16n, 27n, 0n, 36n, 5n, 37n, 36n, 19n, 10n, 14n, 30n, 32n, 19n, 19n, 12n, 19n, 1n, 35n, 30n, 38n, 3n, 37n, 20n, 39n, 11n, 15n, 26n, 8n, 37n, 40n, 6n]
  ,72n)).toString()
  ).toBe(72n.toString())

  expect(finSumRank(
  [16n, 5n, 13n, 2n, 6n, 15n, 3n, 5n, 16n, 2n, 6n, 0n, 4n, 8n, 2n, 2n, 13n, 13n, 6n, 4n, 14n, 5n, 10n, 14n, 14n, 13n, 11n, 9n, 10n, 8n, 15n, 8n, 7n, 12n, 8n, 3n, 13n, 7n, 17n, 4n, 15n, 16n, 17n, 12n, 7n, 16n, 11n, 8n, 4n, 17n, 3n, 10n, 3n, 0n, 4n, 17n, 15n, 10n, 7n, 17n, 9n, 12n, 0n, 16n, 6n, 15n, 11n]
  ,finSumUnrank(
  [16n, 5n, 13n, 2n, 6n, 15n, 3n, 5n, 16n, 2n, 6n, 0n, 4n, 8n, 2n, 2n, 13n, 13n, 6n, 4n, 14n, 5n, 10n, 14n, 14n, 13n, 11n, 9n, 10n, 8n, 15n, 8n, 7n, 12n, 8n, 3n, 13n, 7n, 17n, 4n, 15n, 16n, 17n, 12n, 7n, 16n, 11n, 8n, 4n, 17n, 3n, 10n, 3n, 0n, 4n, 17n, 15n, 10n, 7n, 17n, 9n, 12n, 0n, 16n, 6n, 15n, 11n]
  ,298n)).toString()
  ).toBe(298n.toString())

  expect(finSumRank(
  [1n, 1n, 8n, 7n, 2n, 8n, 4n, 2n, 1n, 8n, 11n, 9n, 6n, 9n, 12n, 8n, 8n, 6n, 0n, 6n, 6n, 7n, 1n, 0n, 3n, 5n, 5n, 11n, 4n, 9n, 12n, 2n, 4n, 12n, 7n, 4n, 12n, 4n, 12n, 8n, 9n, 9n, 2n, 4n, 7n, 2n, 2n, 8n, 3n, 11n, 9n, 4n, 7n, 5n, 9n, 12n, 9n, 1n, 1n]
  ,finSumUnrank(
  [1n, 1n, 8n, 7n, 2n, 8n, 4n, 2n, 1n, 8n, 11n, 9n, 6n, 9n, 12n, 8n, 8n, 6n, 0n, 6n, 6n, 7n, 1n, 0n, 3n, 5n, 5n, 11n, 4n, 9n, 12n, 2n, 4n, 12n, 7n, 4n, 12n, 4n, 12n, 8n, 9n, 9n, 2n, 4n, 7n, 2n, 2n, 8n, 3n, 11n, 9n, 4n, 7n, 5n, 9n, 12n, 9n, 1n, 1n]
  ,225n)).toString()
  ).toBe(225n.toString())

  expect(finSumRank(
  [30n, 1n, 6n]
  ,finSumUnrank(
  [30n, 1n, 6n]
  ,13n)).toString()
  ).toBe(13n.toString())

  expect(finSumRank(
  [38n, 26n, 27n, 20n, 39n, 41n, 15n, 41n, 11n, 15n, 16n, 14n, 12n, 15n, 20n, 10n, 42n, 37n, 40n, 10n, 5n, 3n, 24n, 19n, 29n, 24n, 24n, 21n, 1n, 3n, 10n, 19n, 28n, 15n, 43n, 0n, 30n, 23n, 17n, 19n, 45n, 35n, 36n, 43n, 7n, 39n, 32n, 13n, 4n, 37n, 29n, 19n, 43n, 20n]
  ,finSumUnrank(
  [38n, 26n, 27n, 20n, 39n, 41n, 15n, 41n, 11n, 15n, 16n, 14n, 12n, 15n, 20n, 10n, 42n, 37n, 40n, 10n, 5n, 3n, 24n, 19n, 29n, 24n, 24n, 21n, 1n, 3n, 10n, 19n, 28n, 15n, 43n, 0n, 30n, 23n, 17n, 19n, 45n, 35n, 36n, 43n, 7n, 39n, 32n, 13n, 4n, 37n, 29n, 19n, 43n, 20n]
  ,105n)).toString()
  ).toBe(105n.toString())

  expect(finSumRank(
  [14n, 0n, 11n, 1n, 3n, 1n, 11n, 12n, 1n, 12n, 9n, 4n, 5n, 13n, 12n, 5n, 14n, 8n]
  ,finSumUnrank(
  [14n, 0n, 11n, 1n, 3n, 1n, 11n, 12n, 1n, 12n, 9n, 4n, 5n, 13n, 12n, 5n, 14n, 8n]
  ,13n)).toString()
  ).toBe(13n.toString())

  expect(finSumRank(
  [42n, 37n, 18n, 22n, 37n, 42n, 14n, 44n, 22n, 26n, 8n, 16n, 8n, 22n, 11n, 2n, 29n, 20n, 19n, 34n, 48n, 15n, 44n, 27n, 34n, 48n, 27n, 39n, 22n, 32n, 42n, 49n, 15n, 11n, 15n, 32n]
  ,finSumUnrank(
  [42n, 37n, 18n, 22n, 37n, 42n, 14n, 44n, 22n, 26n, 8n, 16n, 8n, 22n, 11n, 2n, 29n, 20n, 19n, 34n, 48n, 15n, 44n, 27n, 34n, 48n, 27n, 39n, 22n, 32n, 42n, 49n, 15n, 11n, 15n, 32n]
  ,165n)).toString()
  ).toBe(165n.toString())

  expect(finSumRank(
  [27n, 14n, 27n, 30n, 4n, 21n, 5n, 5n, 26n, 15n, 28n, 0n, 30n, 22n, 25n, 29n, 22n, 13n, 24n, 3n, 30n, 11n, 3n, 19n, 8n, 7n, 9n, 1n]
  ,finSumUnrank(
  [27n, 14n, 27n, 30n, 4n, 21n, 5n, 5n, 26n, 15n, 28n, 0n, 30n, 22n, 25n, 29n, 22n, 13n, 24n, 3n, 30n, 11n, 3n, 19n, 8n, 7n, 9n, 1n]
  ,17n)).toString()
  ).toBe(17n.toString())

  expect(finSumRank(
  [10n, 30n, 3n, 19n, 27n, 25n, 9n, 10n]
  ,finSumUnrank(
  [10n, 30n, 3n, 19n, 27n, 25n, 9n, 10n]
  ,99n)).toString()
  ).toBe(99n.toString())

  expect(finSumRank(
  [24n, 16n, 28n, 7n, 6n, 20n, 28n, 25n, 17n, 3n, 18n, 11n, 10n, 10n, 12n, 13n, 12n, 12n, 24n]
  ,finSumUnrank(
  [24n, 16n, 28n, 7n, 6n, 20n, 28n, 25n, 17n, 3n, 18n, 11n, 10n, 10n, 12n, 13n, 12n, 12n, 24n]
  ,219n)).toString()
  ).toBe(219n.toString())

  expect(finSumRank(
  [49n, 42n, 20n, 58n, 21n, 50n, 36n, 53n, 35n, 55n, 51n, 42n, 51n, 21n, 32n, 45n, 42n, 15n, 52n, 48n, 11n, 15n, 20n, 16n, 7n, 13n, 9n, 21n, 42n, 35n, 27n, 19n, 11n, 43n, 48n, 57n, 9n, 9n, 1n]
  ,finSumUnrank(
  [49n, 42n, 20n, 58n, 21n, 50n, 36n, 53n, 35n, 55n, 51n, 42n, 51n, 21n, 32n, 45n, 42n, 15n, 52n, 48n, 11n, 15n, 20n, 16n, 7n, 13n, 9n, 21n, 42n, 35n, 27n, 19n, 11n, 43n, 48n, 57n, 9n, 9n, 1n]
  ,376n)).toString()
  ).toBe(376n.toString())

  expect(finSumRank(
  [11n, 22n, 12n, 24n, 2n, 23n, 3n, 0n, 19n, 8n, 6n, 11n, 15n, 18n, 7n]
  ,finSumUnrank(
  [11n, 22n, 12n, 24n, 2n, 23n, 3n, 0n, 19n, 8n, 6n, 11n, 15n, 18n, 7n]
  ,13n)).toString()
  ).toBe(13n.toString())

  expect(finSumRank(
  [3n, 10n, 11n, 15n]
  ,finSumUnrank(
  [3n, 10n, 11n, 15n]
  ,10n)).toString()
  ).toBe(10n.toString())

  expect(finSumRank(
  [6n, 39n, 7n, 19n, 15n, 2n, 27n, 40n, 8n, 29n, 2n, 31n, 3n, 17n, 40n, 30n, 20n, 9n, 12n, 39n, 7n, 18n, 9n, 2n, 40n, 18n, 27n, 23n, 13n, 4n, 41n, 10n, 27n, 1n, 41n, 27n, 3n, 4n]
  ,finSumUnrank(
  [6n, 39n, 7n, 19n, 15n, 2n, 27n, 40n, 8n, 29n, 2n, 31n, 3n, 17n, 40n, 30n, 20n, 9n, 12n, 39n, 7n, 18n, 9n, 2n, 40n, 18n, 27n, 23n, 13n, 4n, 41n, 10n, 27n, 1n, 41n, 27n, 3n, 4n]
  ,136n)).toString()
  ).toBe(136n.toString())

  expect(finSumRank(
  [15n, 8n, 17n, 13n, 18n]
  ,finSumUnrank(
  [15n, 8n, 17n, 13n, 18n]
  ,21n)).toString()
  ).toBe(21n.toString())

  expect(finSumRank(
  [32n, 46n, 32n, 43n, 26n, 1n, 29n, 37n, 3n, 11n, 4n, 16n, 46n, 19n, 23n, 31n, 25n, 33n, 13n, 45n, 24n, 31n, 3n, 44n, 51n, 31n, 27n, 8n, 43n, 31n, 26n, 2n, 4n, 45n, 45n, 7n, 26n, 38n, 21n, 32n, 28n, 8n]
  ,finSumUnrank(
  [32n, 46n, 32n, 43n, 26n, 1n, 29n, 37n, 3n, 11n, 4n, 16n, 46n, 19n, 23n, 31n, 25n, 33n, 13n, 45n, 24n, 31n, 3n, 44n, 51n, 31n, 27n, 8n, 43n, 31n, 26n, 2n, 4n, 45n, 45n, 7n, 26n, 38n, 21n, 32n, 28n, 8n]
  ,272n)).toString()
  ).toBe(272n.toString())

  expect(finSumRank(
  [4n, 11n, 10n, 11n, 1n, 8n, 7n, 10n, 0n, 10n, 4n, 7n, 11n, 11n, 0n, 5n, 7n, 7n, 1n, 8n, 3n, 3n, 11n, 2n, 9n, 3n, 8n, 11n, 2n, 2n, 0n, 10n, 5n, 4n, 10n, 2n, 12n, 5n, 1n, 8n, 1n, 2n, 8n, 5n, 4n, 3n, 7n, 1n, 10n, 7n, 5n, 9n, 11n, 1n, 10n, 0n, 1n, 3n]
  ,finSumUnrank(
  [4n, 11n, 10n, 11n, 1n, 8n, 7n, 10n, 0n, 10n, 4n, 7n, 11n, 11n, 0n, 5n, 7n, 7n, 1n, 8n, 3n, 3n, 11n, 2n, 9n, 3n, 8n, 11n, 2n, 2n, 0n, 10n, 5n, 4n, 10n, 2n, 12n, 5n, 1n, 8n, 1n, 2n, 8n, 5n, 4n, 3n, 7n, 1n, 10n, 7n, 5n, 9n, 11n, 1n, 10n, 0n, 1n, 3n]
  ,53n)).toString()
  ).toBe(53n.toString())

  expect(finSumRank(
  [24n, 28n, 12n, 43n, 38n, 42n, 7n, 14n, 34n, 19n, 13n, 36n, 20n, 19n, 1n, 16n, 19n, 39n, 6n, 18n, 27n, 3n, 39n, 12n, 16n, 5n, 11n, 17n, 33n, 18n, 22n, 4n]
  ,finSumUnrank(
  [24n, 28n, 12n, 43n, 38n, 42n, 7n, 14n, 34n, 19n, 13n, 36n, 20n, 19n, 1n, 16n, 19n, 39n, 6n, 18n, 27n, 3n, 39n, 12n, 16n, 5n, 11n, 17n, 33n, 18n, 22n, 4n]
  ,11n)).toString()
  ).toBe(11n.toString())

  expect(finSumRank(
  [8n, 0n, 12n, 2n, 12n, 9n, 6n, 15n, 14n, 0n, 6n, 1n, 12n, 5n, 10n, 4n, 2n, 7n, 0n, 6n, 5n, 13n, 0n, 13n, 8n, 14n, 8n, 12n, 12n, 9n, 14n, 15n, 4n, 5n, 12n, 3n, 11n, 6n, 3n, 10n, 15n, 13n, 2n, 8n, 5n, 12n, 6n, 9n, 14n, 15n, 12n, 2n, 10n, 1n, 1n, 0n, 2n, 8n, 1n, 2n, 0n, 9n, 4n, 9n, 9n, 7n, 1n]
  ,finSumUnrank(
  [8n, 0n, 12n, 2n, 12n, 9n, 6n, 15n, 14n, 0n, 6n, 1n, 12n, 5n, 10n, 4n, 2n, 7n, 0n, 6n, 5n, 13n, 0n, 13n, 8n, 14n, 8n, 12n, 12n, 9n, 14n, 15n, 4n, 5n, 12n, 3n, 11n, 6n, 3n, 10n, 15n, 13n, 2n, 8n, 5n, 12n, 6n, 9n, 14n, 15n, 12n, 2n, 10n, 1n, 1n, 0n, 2n, 8n, 1n, 2n, 0n, 9n, 4n, 9n, 9n, 7n, 1n]
  ,75n)).toString()
  ).toBe(75n.toString())

  expect(finSumRank(
  [48n, 46n, 30n, 0n, 19n, 7n, 0n, 44n, 25n, 46n, 20n, 4n, 55n, 41n, 21n, 42n, 36n, 31n, 22n, 15n, 34n, 30n, 3n, 40n, 6n, 7n, 23n, 47n, 24n, 27n, 25n, 29n, 3n, 5n, 38n, 43n, 4n, 35n, 27n, 49n, 4n, 5n, 18n, 0n, 13n, 40n, 25n, 17n, 36n, 12n, 12n, 3n]
  ,finSumUnrank(
  [48n, 46n, 30n, 0n, 19n, 7n, 0n, 44n, 25n, 46n, 20n, 4n, 55n, 41n, 21n, 42n, 36n, 31n, 22n, 15n, 34n, 30n, 3n, 40n, 6n, 7n, 23n, 47n, 24n, 27n, 25n, 29n, 3n, 5n, 38n, 43n, 4n, 35n, 27n, 49n, 4n, 5n, 18n, 0n, 13n, 40n, 25n, 17n, 36n, 12n, 12n, 3n]
  ,254n)).toString()
  ).toBe(254n.toString())

  expect(finSumRank(
  [19n, 17n, 19n, 1n, 34n, 26n, 24n, 6n, 26n, 1n, 33n, 24n, 17n, 25n, 5n, 13n, 21n, 25n, 28n, 28n, 24n, 23n, 11n, 1n, 21n, 4n, 3n, 6n, 29n, 7n, 10n, 7n]
  ,finSumUnrank(
  [19n, 17n, 19n, 1n, 34n, 26n, 24n, 6n, 26n, 1n, 33n, 24n, 17n, 25n, 5n, 13n, 21n, 25n, 28n, 28n, 24n, 23n, 11n, 1n, 21n, 4n, 3n, 6n, 29n, 7n, 10n, 7n]
  ,496n)).toString()
  ).toBe(496n.toString())

  expect(finSumRank(
  [24n, 19n, 22n, 51n, 26n, 34n, 34n, 13n, 3n, 47n, 23n, 12n, 36n, 17n, 3n, 7n, 36n, 9n, 6n, 29n, 16n, 37n, 25n, 7n, 12n, 26n, 47n, 23n, 49n, 26n, 28n, 16n, 8n, 15n, 29n, 9n, 37n, 7n, 42n, 34n, 28n, 12n, 49n, 44n, 13n, 23n, 33n, 39n, 17n, 22n, 41n, 11n, 28n, 11n, 24n, 34n, 13n]
  ,finSumUnrank(
  [24n, 19n, 22n, 51n, 26n, 34n, 34n, 13n, 3n, 47n, 23n, 12n, 36n, 17n, 3n, 7n, 36n, 9n, 6n, 29n, 16n, 37n, 25n, 7n, 12n, 26n, 47n, 23n, 49n, 26n, 28n, 16n, 8n, 15n, 29n, 9n, 37n, 7n, 42n, 34n, 28n, 12n, 49n, 44n, 13n, 23n, 33n, 39n, 17n, 22n, 41n, 11n, 28n, 11n, 24n, 34n, 13n]
  ,1243n)).toString()
  ).toBe(1243n.toString())

  expect(finSumRank(
  [5n, 4n, 26n, 16n, 24n, 26n, 4n, 26n, 8n, 15n, 30n, 17n, 18n, 9n, 2n, 16n, 26n, 25n, 33n, 29n, 3n, 0n, 19n, 21n, 9n, 37n, 15n, 15n, 22n, 37n, 22n, 11n, 23n, 41n, 31n, 37n, 33n, 41n, 19n, 21n, 37n, 40n, 7n]
  ,finSumUnrank(
  [5n, 4n, 26n, 16n, 24n, 26n, 4n, 26n, 8n, 15n, 30n, 17n, 18n, 9n, 2n, 16n, 26n, 25n, 33n, 29n, 3n, 0n, 19n, 21n, 9n, 37n, 15n, 15n, 22n, 37n, 22n, 11n, 23n, 41n, 31n, 37n, 33n, 41n, 19n, 21n, 37n, 40n, 7n]
  ,393n)).toString()
  ).toBe(393n.toString())

  expect(finSumRank(
  [39n, 20n, 11n, 40n, 45n, 22n, 53n, 5n, 36n, 25n, 5n]
  ,finSumUnrank(
  [39n, 20n, 11n, 40n, 45n, 22n, 53n, 5n, 36n, 25n, 5n]
  ,168n)).toString()
  ).toBe(168n.toString())

  expect(finSumRank(
  [12n, 5n, 1n]
  ,finSumUnrank(
  [12n, 5n, 1n]
  ,8n)).toString()
  ).toBe(8n.toString())

  expect(finSumRank(
  [33n, 52n, 31n, 36n, 8n, 12n, 50n, 47n, 61n, 2n]
  ,finSumUnrank(
  [33n, 52n, 31n, 36n, 8n, 12n, 50n, 47n, 61n, 2n]
  ,132n)).toString()
  ).toBe(132n.toString())

  expect(finSumRank(
  [0n, 5n, 5n, 3n, 1n, 2n, 3n, 0n, 4n, 1n, 1n, 3n, 4n, 1n, 0n, 1n, 5n, 2n, 4n, 4n, 3n, 4n, 1n, 4n, 1n, 0n, 5n, 4n, 3n, 1n, 0n, 5n, 6n, 6n, 6n, 0n, 3n, 1n, 6n, 6n, 1n, 2n, 1n, 0n, 6n, 1n, 1n, 2n, 6n, 2n, 6n, 5n, 3n, 1n, 0n, 4n, 4n]
  ,finSumUnrank(
  [0n, 5n, 5n, 3n, 1n, 2n, 3n, 0n, 4n, 1n, 1n, 3n, 4n, 1n, 0n, 1n, 5n, 2n, 4n, 4n, 3n, 4n, 1n, 4n, 1n, 0n, 5n, 4n, 3n, 1n, 0n, 5n, 6n, 6n, 6n, 0n, 3n, 1n, 6n, 6n, 1n, 2n, 1n, 0n, 6n, 1n, 1n, 2n, 6n, 2n, 6n, 5n, 3n, 1n, 0n, 4n, 4n]
  ,147n)).toString()
  ).toBe(147n.toString())

  expect(finSumRank(
  [0n, 0n, 0n, 0n, 2n, 0n, 1n, 1n, 2n, 0n, 0n, 1n, 2n, 1n, 1n, 0n, 0n, 1n, 1n, 0n, 2n, 1n, 1n, 2n, 0n, 0n, 0n, 1n, 0n, 1n, 2n, 1n, 1n, 0n, 1n, 1n, 0n, 2n, 1n, 0n, 0n, 1n, 1n, 2n, 0n, 0n, 1n, 1n, 1n, 0n, 1n, 0n, 1n, 0n, 0n, 0n, 0n, 0n, 2n, 1n, 2n, 0n, 1n, 2n, 0n, 2n, 2n, 0n, 2n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 2n, 0n, 0n, 1n, 1n, 2n, 0n, 1n, 1n, 1n, 2n, 0n, 0n, 0n, 1n, 2n, 2n, 0n, 2n, 2n, 2n, 1n, 1n, 0n, 1n, 1n, 1n, 1n, 1n, 1n, 0n, 0n, 1n, 0n, 0n, 2n, 2n, 0n, 2n, 2n, 1n, 1n, 1n, 2n, 0n, 0n, 0n, 0n, 1n, 2n, 0n, 0n, 2n, 1n, 0n, 0n, 1n, 0n, 0n, 2n, 0n, 2n, 0n, 2n, 1n, 2n, 2n, 0n, 2n, 2n, 1n, 0n, 0n, 1n, 1n, 1n, 0n, 2n, 1n, 0n, 0n, 1n, 0n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 0n, 2n, 0n, 1n, 2n, 2n, 2n, 2n, 1n, 0n, 0n, 0n, 1n, 0n, 0n, 1n]
  ,finSumUnrank(
  [0n, 0n, 0n, 0n, 2n, 0n, 1n, 1n, 2n, 0n, 0n, 1n, 2n, 1n, 1n, 0n, 0n, 1n, 1n, 0n, 2n, 1n, 1n, 2n, 0n, 0n, 0n, 1n, 0n, 1n, 2n, 1n, 1n, 0n, 1n, 1n, 0n, 2n, 1n, 0n, 0n, 1n, 1n, 2n, 0n, 0n, 1n, 1n, 1n, 0n, 1n, 0n, 1n, 0n, 0n, 0n, 0n, 0n, 2n, 1n, 2n, 0n, 1n, 2n, 0n, 2n, 2n, 0n, 2n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 2n, 0n, 0n, 1n, 1n, 2n, 0n, 1n, 1n, 1n, 2n, 0n, 0n, 0n, 1n, 2n, 2n, 0n, 2n, 2n, 2n, 1n, 1n, 0n, 1n, 1n, 1n, 1n, 1n, 1n, 0n, 0n, 1n, 0n, 0n, 2n, 2n, 0n, 2n, 2n, 1n, 1n, 1n, 2n, 0n, 0n, 0n, 0n, 1n, 2n, 0n, 0n, 2n, 1n, 0n, 0n, 1n, 0n, 0n, 2n, 0n, 2n, 0n, 2n, 1n, 2n, 2n, 0n, 2n, 2n, 1n, 0n, 0n, 1n, 1n, 1n, 0n, 2n, 1n, 0n, 0n, 1n, 0n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 0n, 2n, 0n, 1n, 2n, 2n, 2n, 2n, 1n, 0n, 0n, 0n, 1n, 0n, 0n, 1n]
  ,22n)).toString()
  ).toBe(22n.toString())

  expect(finSumRank(
  [2n, 9n, 20n, 16n, 8n, 27n, 20n, 25n, 22n, 16n, 24n, 27n, 23n, 32n, 32n, 26n, 9n, 20n, 32n, 17n, 9n, 33n, 0n, 21n, 1n, 7n, 11n, 9n, 3n, 8n, 9n, 6n, 12n, 8n, 23n, 4n, 16n, 18n, 29n, 2n, 12n, 27n, 26n, 17n, 27n, 28n, 1n]
  ,finSumUnrank(
  [2n, 9n, 20n, 16n, 8n, 27n, 20n, 25n, 22n, 16n, 24n, 27n, 23n, 32n, 32n, 26n, 9n, 20n, 32n, 17n, 9n, 33n, 0n, 21n, 1n, 7n, 11n, 9n, 3n, 8n, 9n, 6n, 12n, 8n, 23n, 4n, 16n, 18n, 29n, 2n, 12n, 27n, 26n, 17n, 27n, 28n, 1n]
  ,267n)).toString()
  ).toBe(267n.toString())

  expect(finSumRank(
  [20n, 5n, 3n, 9n, 5n, 29n, 6n, 11n]
  ,finSumUnrank(
  [20n, 5n, 3n, 9n, 5n, 29n, 6n, 11n]
  ,67n)).toString()
  ).toBe(67n.toString())

  expect(finSumRank(
  [4n, 3n, 6n, 5n, 0n, 7n, 4n, 2n, 2n, 6n, 2n, 1n, 4n, 1n, 4n, 4n, 3n, 6n, 2n, 4n, 1n, 3n, 5n, 1n, 2n, 6n, 4n, 0n, 5n, 7n, 5n, 6n, 3n, 0n, 1n, 4n, 7n, 6n, 0n, 7n, 3n, 2n, 2n, 4n, 4n, 3n, 2n, 7n, 7n, 4n, 7n, 5n, 4n, 5n, 0n, 1n, 1n, 5n, 6n, 7n, 7n, 4n, 3n, 2n, 1n, 3n, 7n, 2n, 7n, 3n, 4n, 6n, 4n, 0n, 7n, 4n, 6n, 1n, 0n, 1n, 1n, 1n, 6n, 1n, 4n, 0n, 5n, 3n, 0n, 5n, 3n, 2n, 5n, 7n, 5n, 2n, 3n, 3n, 4n, 7n, 7n, 2n, 3n, 0n, 5n]
  ,finSumUnrank(
  [4n, 3n, 6n, 5n, 0n, 7n, 4n, 2n, 2n, 6n, 2n, 1n, 4n, 1n, 4n, 4n, 3n, 6n, 2n, 4n, 1n, 3n, 5n, 1n, 2n, 6n, 4n, 0n, 5n, 7n, 5n, 6n, 3n, 0n, 1n, 4n, 7n, 6n, 0n, 7n, 3n, 2n, 2n, 4n, 4n, 3n, 2n, 7n, 7n, 4n, 7n, 5n, 4n, 5n, 0n, 1n, 1n, 5n, 6n, 7n, 7n, 4n, 3n, 2n, 1n, 3n, 7n, 2n, 7n, 3n, 4n, 6n, 4n, 0n, 7n, 4n, 6n, 1n, 0n, 1n, 1n, 1n, 6n, 1n, 4n, 0n, 5n, 3n, 0n, 5n, 3n, 2n, 5n, 7n, 5n, 2n, 3n, 3n, 4n, 7n, 7n, 2n, 3n, 0n, 5n]
  ,124n)).toString()
  ).toBe(124n.toString())

  expect(finSumRank(
  [28n, 4n, 4n, 16n, 0n, 13n, 31n, 21n, 16n, 31n, 9n, 1n]
  ,finSumUnrank(
  [28n, 4n, 4n, 16n, 0n, 13n, 31n, 21n, 16n, 31n, 9n, 1n]
  ,154n)).toString()
  ).toBe(154n.toString())

  expect(finSumRank(
  [44n, 31n, 19n, 4n, 7n, 11n, 43n, 19n, 46n, 24n, 22n, 7n, 16n, 24n, 44n, 38n, 17n, 32n, 4n, 33n, 30n, 32n, 35n, 41n, 1n, 25n, 30n, 5n, 6n, 4n, 9n, 1n]
  ,finSumUnrank(
  [44n, 31n, 19n, 4n, 7n, 11n, 43n, 19n, 46n, 24n, 22n, 7n, 16n, 24n, 44n, 38n, 17n, 32n, 4n, 33n, 30n, 32n, 35n, 41n, 1n, 25n, 30n, 5n, 6n, 4n, 9n, 1n]
  ,568n)).toString()
  ).toBe(568n.toString())
})
