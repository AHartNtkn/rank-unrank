import {finProdUnrank, finProdRank, tupProdError} from './products.js'
import {negElemError, bigElemError, zeroFinError, negFinError} from './errors.js'
import {bigRankError, negRankError} from '../genericErrors.js'

test('Verifying error instances of finProdUnrank', () => {
  expect(() => {
    finProdUnrank(
    [11n, 5n, 9n, 8n, 12n, 0n, 14n, 7n, 10n, 5n, 15n, 12n, 7n, 8n, 9n, 15n, 5n, 9n, 11n, 5n, 2n, 8n, 14n, 1n, 12n, 13n, 1n, 15n, 4n, 12n, 3n, 12n, 1n, 11n, 5n, 10n, 7n, 12n, 8n, 12n, 11n, 12n, 2n, 14n, 2n, 10n, 14n, 12n, 13n, 2n, 8n, 15n, 15n, 8n, 8n, 14n, 7n, 2n, 12n, 6n, 4n, 6n, 12n, 3n]    
    ,445n)
  }).toThrow(zeroFinError)

  expect(() => {
    finProdUnrank(
    [11n, 5n, 9n, 8n, 12n, 10n, -14n, 7n, 10n, 5n, 15n, 12n, 7n, 8n, 9n, 15n, 5n, 9n, 11n, 5n, 2n, 8n, 14n, 1n, 12n, 13n, 1n, 15n, 4n, 12n, 3n, 12n, 1n, 11n, 5n, 10n, 7n, 12n, 8n, 12n, 11n, 12n, 2n, 14n, 2n, 10n, 14n, 12n, 13n, 2n, 8n, 15n, 15n, 8n, 8n, 14n, 7n, 2n, 12n, 6n, 4n, 6n, 12n, 3n]
    ,445n)
  }).toThrow(negFinError)

  expect(() => {
    finProdUnrank(
    [11n, 5n, 9n, 8n, 12n, 10n, 14n, 7n, 10n, 5n, 15n, 12n, 7n, 8n, 9n, 15n, 5n, 9n, 11n, 5n, 2n, 8n, 14n, 1n, 12n, 13n, 1n, 15n, 4n, 12n, 3n, 12n, 1n, 11n, 5n, 10n, 7n, 12n, 8n, 12n, 11n, 12n, 2n, 14n, 2n, 10n, 14n, 12n, 13n, 2n, 8n, 15n, 15n, 8n, 8n, 14n, 7n, 2n, 12n, 6n, 4n, 6n, 12n, 3n]
    ,-524n)
  }).toThrow(negRankError)

  expect(() => {
    finProdUnrank(
    [11n, 5n, 9n, 8n, 12n, 10n, 14n, 7n, 10n, 5n, 15n, 12n, 7n, 8n, 9n, 15n, 5n, 9n, 11n, 5n, 2n, 8n, 14n, 1n, 12n, 13n, 1n, 15n, 4n, 12n, 3n, 12n, 1n, 11n, 5n, 10n, 7n, 12n, 8n, 12n, 11n, 12n, 2n, 14n, 2n, 10n, 14n, 12n, 13n, 2n, 8n, 15n, 15n, 8n, 8n, 14n, 7n, 2n, 12n, 6n, 4n, 6n, 12n, 3n]
    ,14287696476475689678037271719163854218854400000000000000n)
  }).toThrow(bigRankError)
})

test('Verifying error instances of finProdRank', () => {
  expect(() => {
    finProdRank(
    [11n, 5n, 9n, 8n, 12n, 0n, 14n, 10n, 5n, 15n]    
    ,[ 3n, 0n, 0n, 4n, 8n, 9n, 9n, 8n, 2n, 1n ])
  }).toThrow(zeroFinError)

  expect(() => {
    finProdRank(
    [11n, 5n, 9n, 8n, 12n, -10n, 14n, 10n, 5n, 15n]    
    ,[ 3n, 0n, 0n, 4n, 8n, 9n, 9n, 8n, 2n, 1n ])
  }).toThrow(negFinError)

  expect(() => {
    finProdRank(
    [11n, 5n, 9n, 8n, 12n, 10n, 14n, 10n, 5n, 15n]   
    ,[ 3n, 0n, 0n, -4n, 8n, 9n, 9n, 8n, 2n, 1n ])
  }).toThrow(negElemError)

  expect(() => {
    finProdRank(
    [11n, 5n, 9n, 8n, 12n, 10n, 14n, 10n, 5n, 15n] 
    ,[ 11n, 0n, 0n, 4n, 8n, 9n, 9n, 8n, 2n, 1n ])
  }).toThrow(bigElemError)

  expect(() => {
    finProdRank(
    [11n, 5n, 9n, 8n, 12n, 10n, 14n, 10n, 5n, 15n] 
    ,[ 3n, 0n, 0n, 4n, 8n, 9n, 9n, 8n, 2n ])
  }).toThrow(tupProdError)

  expect(() => {
    finProdRank(
    [11n, 5n, 9n, 8n, 12n, 10n, 14n, 10n, 5n, 15n] 
    ,[ 3n, 0n, 0n, 4n, 8n, 9n, 9n, 8n, 2n, 1n, 3n ])
  }).toThrow(tupProdError)
})

test('Test empty product.', () => {
  expect(
    finProdUnrank([], 0n).toString()
  ).toBe([].toString())

  expect(
    finProdRank([], []).toString()
  ).toBe(0n.toString())

  expect(() => {
    finProdUnrank([], 1n)
  }).toThrow(bigRankError)


  expect(() => {
    finProdRank([], [0n])
  }).toThrow(tupProdError)
})

// TODO: Remove .toString() whenever jest supports BigInt
test('Verifying for some small values that finProdRank and finProdUnrank are inverses.', () => {
  for(let i=0n; i<5040n; i++) {
    expect(finProdRank(
    [1n, 2n, 3n, 4n, 5n, 6n, 7n],
    finProdUnrank(
    [1n, 2n, 3n, 4n, 5n, 6n, 7n]
    ,i)).toString()
    ).toBe(i.toString())
  }
})

// TODO: Remove .toString() whenever jest supports BigInt
test('Verifying for several values that finProdRank and finProdUnrank are inverses.', () => {
  expect(finProdRank(
  [2n, 23n, 11n, 17n, 22n, 15n, 13n, 24n, 4n]
  ,finProdUnrank(
  [2n, 23n, 11n, 17n, 22n, 15n, 13n, 24n, 4n]
  ,322767773n)).toString()
  ).toBe(322767773n.toString())

  expect(finProdRank(
  [26n, 15n, 45n, 14n, 31n, 3n, 23n, 5n]
  ,finProdUnrank(
  [26n, 15n, 45n, 14n, 31n, 3n, 23n, 5n]
  ,2482127129n)).toString()
  ).toBe(2482127129n.toString())

  expect(finProdRank(
  [15n, 19n, 29n, 23n, 7n, 21n, 21n, 16n, 17n, 12n, 16n, 28n, 3n, 29n]
  ,finProdUnrank(
  [15n, 19n, 29n, 23n, 7n, 21n, 21n, 16n, 17n, 12n, 16n, 28n, 3n, 29n]
  ,24946811771126254n)).toString()
  ).toBe(24946811771126254n.toString())

  expect(finProdRank(
  [11n, 5n, 9n, 8n, 12n, 10n, 14n, 7n, 10n, 5n, 15n, 12n, 7n, 8n, 9n, 15n, 5n, 9n, 11n, 5n, 2n, 8n, 14n, 1n, 12n, 13n, 1n, 15n, 4n, 12n, 3n, 12n, 1n, 11n, 5n, 10n, 7n, 12n, 8n, 12n, 11n, 12n, 2n, 14n, 2n, 10n, 14n, 12n, 13n, 2n, 8n, 15n, 15n, 8n, 8n, 14n, 7n, 2n, 12n, 6n, 4n, 6n, 12n, 3n]
  ,finProdUnrank(
  [11n, 5n, 9n, 8n, 12n, 10n, 14n, 7n, 10n, 5n, 15n, 12n, 7n, 8n, 9n, 15n, 5n, 9n, 11n, 5n, 2n, 8n, 14n, 1n, 12n, 13n, 1n, 15n, 4n, 12n, 3n, 12n, 1n, 11n, 5n, 10n, 7n, 12n, 8n, 12n, 11n, 12n, 2n, 14n, 2n, 10n, 14n, 12n, 13n, 2n, 8n, 15n, 15n, 8n, 8n, 14n, 7n, 2n, 12n, 6n, 4n, 6n, 12n, 3n]
  ,4416675388189116023660193276158183706350535955590753990n)).toString()
  ).toBe(4416675388189116023660193276158183706350535955590753990n.toString())

  expect(finProdRank(
  [7n, 22n, 3n, 29n, 16n, 34n, 9n, 21n, 40n, 14n, 26n, 35n, 41n, 8n, 37n, 32n, 25n, 11n, 2n, 13n, 29n, 14n, 5n, 39n, 19n, 12n, 12n, 22n, 2n, 35n, 3n, 11n, 2n, 35n, 10n, 31n, 30n, 14n, 13n, 11n, 41n, 24n, 37n, 40n, 4n, 20n, 17n, 22n, 19n, 38n, 8n]
  ,finProdUnrank(
  [7n, 22n, 3n, 29n, 16n, 34n, 9n, 21n, 40n, 14n, 26n, 35n, 41n, 8n, 37n, 32n, 25n, 11n, 2n, 13n, 29n, 14n, 5n, 39n, 19n, 12n, 12n, 22n, 2n, 35n, 3n, 11n, 2n, 35n, 10n, 31n, 30n, 14n, 13n, 11n, 41n, 24n, 37n, 40n, 4n, 20n, 17n, 22n, 19n, 38n, 8n]
  ,3031053557735236939949588936077697695803923214727590924070332n)).toString()
  ).toBe(3031053557735236939949588936077697695803923214727590924070332n.toString())

  expect(finProdRank(
  [45n, 16n, 33n, 31n, 43n, 22n, 1n, 6n, 17n, 51n, 41n, 38n, 53n, 37n, 10n, 45n, 28n, 39n, 20n, 42n, 20n, 19n, 31n, 13n, 56n, 41n, 21n, 47n, 43n, 5n, 3n]
  ,finProdUnrank(
  [45n, 16n, 33n, 31n, 43n, 22n, 1n, 6n, 17n, 51n, 41n, 38n, 53n, 37n, 10n, 45n, 28n, 39n, 20n, 42n, 20n, 19n, 31n, 13n, 56n, 41n, 21n, 47n, 43n, 5n, 3n]
  ,441684947411365066987222375842382339381139n)).toString()
  ).toBe(441684947411365066987222375842382339381139n.toString())

  expect(finProdRank(
  [48n, 17n, 11n, 50n, 3n, 33n, 39n, 46n, 44n, 46n, 9n, 26n, 8n, 9n, 28n, 37n, 14n, 52n, 36n, 46n, 44n, 9n, 42n, 23n, 16n, 28n, 36n, 46n, 5n, 34n, 18n, 12n, 3n, 49n, 25n, 21n, 27n, 28n, 44n, 38n, 8n, 5n]
  ,finProdUnrank(
  [48n, 17n, 11n, 50n, 3n, 33n, 39n, 46n, 44n, 46n, 9n, 26n, 8n, 9n, 28n, 37n, 14n, 52n, 36n, 46n, 44n, 9n, 42n, 23n, 16n, 28n, 36n, 46n, 5n, 34n, 18n, 12n, 3n, 49n, 25n, 21n, 27n, 28n, 44n, 38n, 8n, 5n]
  ,42127313036756803582642069219154105687221669065652966678n)).toString()
  ).toBe(42127313036756803582642069219154105687221669065652966678n.toString())

  expect(finProdRank(
  [20n, 4n, 17n, 34n, 11n, 28n, 5n, 1n, 43n, 20n, 7n, 57n, 45n, 37n, 11n, 57n, 6n, 52n, 29n, 47n, 7n, 47n, 34n, 50n, 19n, 11n, 44n, 17n, 20n, 7n, 8n, 31n, 53n, 41n, 44n, 17n, 53n, 48n, 18n, 5n, 51n, 38n, 56n, 35n]
  ,finProdUnrank(
  [20n, 4n, 17n, 34n, 11n, 28n, 5n, 1n, 43n, 20n, 7n, 57n, 45n, 37n, 11n, 57n, 6n, 52n, 29n, 47n, 7n, 47n, 34n, 50n, 19n, 11n, 44n, 17n, 20n, 7n, 8n, 31n, 53n, 41n, 44n, 17n, 53n, 48n, 18n, 5n, 51n, 38n, 56n, 35n]
  ,20007375719252436536789955931590782265186967270255075756117n)).toString()
  ).toBe(20007375719252436536789955931590782265186967270255075756117n.toString())

  expect(finProdRank(
  [36n, 15n, 10n, 29n, 4n, 30n, 25n, 26n, 30n, 33n, 6n, 18n, 6n, 46n, 23n, 46n, 18n, 17n, 7n, 5n, 8n, 23n, 24n, 15n, 5n, 4n, 18n, 43n, 14n, 32n, 31n, 6n, 8n, 13n, 4n, 48n, 31n, 32n, 3n]
  ,finProdUnrank(
  [36n, 15n, 10n, 29n, 4n, 30n, 25n, 26n, 30n, 33n, 6n, 18n, 6n, 46n, 23n, 46n, 18n, 17n, 7n, 5n, 8n, 23n, 24n, 15n, 5n, 4n, 18n, 43n, 14n, 32n, 31n, 6n, 8n, 13n, 4n, 48n, 31n, 32n, 3n]
  ,8207904962114837037110049771365955741813342020n)).toString()
  ).toBe(8207904962114837037110049771365955741813342020n.toString())

  expect(finProdRank(
  [16n, 19n, 3n, 1n, 14n, 7n, 11n, 18n, 10n, 1n, 22n, 13n, 23n, 7n, 10n, 14n, 23n, 3n, 3n, 7n, 23n, 18n, 7n, 2n]
  ,finProdUnrank(
  [16n, 19n, 3n, 1n, 14n, 7n, 11n, 18n, 10n, 1n, 22n, 13n, 23n, 7n, 10n, 14n, 23n, 3n, 3n, 7n, 23n, 18n, 7n, 2n]
  ,1919553568333235130923n)).toString()
  ).toBe(1919553568333235130923n.toString())

  expect(finProdRank(
  [29n, 1n, 11n, 19n, 17n, 5n, 19n, 4n, 16n, 33n, 7n, 9n, 8n, 35n, 37n, 17n, 8n, 10n, 24n, 17n, 24n, 10n, 10n, 32n, 5n, 35n, 24n, 35n, 13n, 13n, 10n, 7n, 5n, 17n, 9n, 33n, 5n, 26n, 13n, 24n, 2n, 6n, 4n, 33n, 27n, 10n, 14n, 2n, 10n, 26n, 25n, 8n, 31n, 10n, 9n, 34n, 25n, 7n, 7n, 14n, 17n, 8n]
  ,finProdUnrank(
  [29n, 1n, 11n, 19n, 17n, 5n, 19n, 4n, 16n, 33n, 7n, 9n, 8n, 35n, 37n, 17n, 8n, 10n, 24n, 17n, 24n, 10n, 10n, 32n, 5n, 35n, 24n, 35n, 13n, 13n, 10n, 7n, 5n, 17n, 9n, 33n, 5n, 26n, 13n, 24n, 2n, 6n, 4n, 33n, 27n, 10n, 14n, 2n, 10n, 26n, 25n, 8n, 31n, 10n, 9n, 34n, 25n, 7n, 7n, 14n, 17n, 8n]
  ,57757030782471122825660549223264603502989843831913448573544335155354n)).toString()
  ).toBe(57757030782471122825660549223264603502989843831913448573544335155354n.toString())

  expect(finProdRank(
  [7n, 27n, 42n, 41n, 20n, 29n, 39n, 37n, 27n, 38n, 44n, 9n, 37n, 1n, 34n, 7n, 30n, 43n, 15n, 17n, 6n, 35n, 13n, 36n, 5n, 20n, 18n, 20n, 28n, 9n, 19n, 22n, 8n, 24n, 17n, 31n, 16n, 19n, 19n, 9n, 8n]
  ,finProdUnrank(
  [7n, 27n, 42n, 41n, 20n, 29n, 39n, 37n, 27n, 38n, 44n, 9n, 37n, 1n, 34n, 7n, 30n, 43n, 15n, 17n, 6n, 35n, 13n, 36n, 5n, 20n, 18n, 20n, 28n, 9n, 19n, 22n, 8n, 24n, 17n, 31n, 16n, 19n, 19n, 9n, 8n]
  ,2743897373014934088349599138599421670956106373152399n)).toString()
  ).toBe(2743897373014934088349599138599421670956106373152399n.toString())

  expect(finProdRank(
  [2n, 22n, 26n, 18n, 5n, 22n, 40n, 15n, 40n, 13n, 13n, 22n, 2n, 6n, 40n, 9n, 9n, 10n, 24n, 37n, 13n, 5n, 29n, 7n, 30n, 19n, 7n, 3n]
  ,finProdUnrank(
  [2n, 22n, 26n, 18n, 5n, 22n, 40n, 15n, 40n, 13n, 13n, 22n, 2n, 6n, 40n, 9n, 9n, 10n, 24n, 37n, 13n, 5n, 29n, 7n, 30n, 19n, 7n, 3n]
  ,9030498903626383908509336512594n)).toString()
  ).toBe(9030498903626383908509336512594n.toString())

  expect(finProdRank(
  [4n, 1n, 4n, 4n, 2n, 2n, 2n, 2n, 2n, 3n, 4n, 3n, 3n, 2n, 4n, 3n, 4n, 2n, 4n, 2n, 3n, 4n, 1n, 1n, 1n, 3n, 3n, 4n, 4n, 1n, 3n, 3n, 4n, 4n, 4n, 1n, 2n, 3n, 4n, 4n, 4n, 1n, 4n, 1n, 2n, 3n, 3n, 1n, 4n, 4n, 3n, 4n, 4n, 3n, 1n, 3n, 1n, 3n, 3n, 3n, 3n, 2n, 4n, 3n, 2n, 1n, 3n, 2n, 2n, 1n, 2n, 3n, 3n, 3n, 4n, 2n, 4n, 1n, 2n, 3n, 3n, 2n, 3n, 4n, 2n, 1n, 1n, 1n, 2n, 3n, 3n, 2n, 4n, 4n, 2n, 1n, 1n, 1n, 3n, 2n, 4n, 3n, 2n, 3n, 4n, 3n, 3n, 4n, 4n, 2n, 1n, 3n, 4n, 2n, 1n, 3n, 3n, 4n, 1n, 4n, 1n, 2n, 3n, 3n, 3n, 3n, 1n, 2n, 4n, 2n, 4n, 3n, 3n, 3n]
  ,finProdUnrank(
  [4n, 1n, 4n, 4n, 2n, 2n, 2n, 2n, 2n, 3n, 4n, 3n, 3n, 2n, 4n, 3n, 4n, 2n, 4n, 2n, 3n, 4n, 1n, 1n, 1n, 3n, 3n, 4n, 4n, 1n, 3n, 3n, 4n, 4n, 4n, 1n, 2n, 3n, 4n, 4n, 4n, 1n, 4n, 1n, 2n, 3n, 3n, 1n, 4n, 4n, 3n, 4n, 4n, 3n, 1n, 3n, 1n, 3n, 3n, 3n, 3n, 2n, 4n, 3n, 2n, 1n, 3n, 2n, 2n, 1n, 2n, 3n, 3n, 3n, 4n, 2n, 4n, 1n, 2n, 3n, 3n, 2n, 3n, 4n, 2n, 1n, 1n, 1n, 2n, 3n, 3n, 2n, 4n, 4n, 2n, 1n, 1n, 1n, 3n, 2n, 4n, 3n, 2n, 3n, 4n, 3n, 3n, 4n, 4n, 2n, 1n, 3n, 4n, 2n, 1n, 3n, 3n, 4n, 1n, 4n, 1n, 2n, 3n, 3n, 3n, 3n, 1n, 2n, 4n, 2n, 4n, 3n, 3n, 3n]
  ,1932798389669582066056353266949787132490991063409138n)).toString()
  ).toBe(1932798389669582066056353266949787132490991063409138n.toString())

  expect(finProdRank(
  [19n, 8n, 20n, 15n, 18n, 22n, 1n, 18n, 4n, 19n, 20n, 9n, 12n, 19n, 24n, 24n, 18n, 20n, 3n, 7n]
  ,finProdUnrank(
  [19n, 8n, 20n, 15n, 18n, 22n, 1n, 18n, 4n, 19n, 20n, 9n, 12n, 19n, 24n, 24n, 18n, 20n, 3n, 7n]
  ,679212239087420385227n)).toString()
  ).toBe(679212239087420385227n.toString())

  expect(finProdRank(
  [34n, 50n, 25n, 40n, 35n, 19n, 15n, 12n, 43n, 9n, 14n, 45n, 30n, 48n, 27n, 47n, 22n, 49n, 45n, 34n, 26n, 34n, 27n, 41n, 2n, 8n, 25n, 21n, 40n, 40n, 38n, 30n, 47n, 16n, 2n, 13n, 39n, 7n, 28n, 47n, 34n, 6n, 25n, 2n, 3n, 21n, 30n, 28n, 39n, 27n, 24n, 2n]
  ,finProdUnrank(
  [34n, 50n, 25n, 40n, 35n, 19n, 15n, 12n, 43n, 9n, 14n, 45n, 30n, 48n, 27n, 47n, 22n, 49n, 45n, 34n, 26n, 34n, 27n, 41n, 2n, 8n, 25n, 21n, 40n, 40n, 38n, 30n, 47n, 16n, 2n, 13n, 39n, 7n, 28n, 47n, 34n, 6n, 25n, 2n, 3n, 21n, 30n, 28n, 39n, 27n, 24n, 2n]
  ,190379611635884056138963399679531237415033308907152727082155505048765n)).toString()
  ).toBe(190379611635884056138963399679531237415033308907152727082155505048765n.toString())

  expect(finProdRank(
  [27n, 18n, 15n, 24n, 9n, 13n, 11n, 20n, 14n, 21n, 25n, 24n, 20n, 15n, 14n, 9n, 26n, 17n, 6n]
  ,finProdUnrank(
  [27n, 18n, 15n, 24n, 9n, 13n, 11n, 20n, 14n, 21n, 25n, 24n, 20n, 15n, 14n, 9n, 26n, 17n, 6n]
  ,33198845112134407551874n)).toString()
  ).toBe(33198845112134407551874n.toString())

  expect(finProdRank(
  [1n, 7n, 22n, 6n, 16n, 2n, 17n, 24n, 20n, 28n, 13n, 5n, 32n, 13n, 5n, 24n, 16n, 8n, 11n, 11n, 18n, 11n, 13n, 16n, 31n, 25n, 6n, 5n]
  ,finProdUnrank(
  [1n, 7n, 22n, 6n, 16n, 2n, 17n, 24n, 20n, 28n, 13n, 5n, 32n, 13n, 5n, 24n, 16n, 8n, 11n, 11n, 18n, 11n, 13n, 16n, 31n, 25n, 6n, 5n]
  ,80900619903514280522854942232n)).toString()
  ).toBe(80900619903514280522854942232n.toString())

  expect(finProdRank(
  [20n]
  ,finProdUnrank(
  [20n]
  ,11n)).toString()
  ).toBe(11n.toString())

  expect(finProdRank(
  [2n, 2n, 5n, 11n, 1n, 9n, 2n, 1n, 11n, 12n, 4n, 6n, 2n, 3n, 5n, 10n, 1n, 2n, 11n, 4n, 4n, 1n, 11n, 1n, 10n, 6n, 9n, 12n, 9n, 10n, 12n, 1n, 5n, 4n, 2n, 12n, 2n, 12n, 6n, 11n, 6n, 11n, 3n, 8n, 9n, 4n, 4n, 3n, 11n, 6n, 8n, 9n, 10n, 2n, 4n, 1n, 6n, 9n, 5n, 4n, 5n, 10n, 12n, 1n, 12n, 2n, 7n, 12n, 5n, 4n, 8n, 1n, 12n, 8n, 10n, 12n, 5n, 3n, 10n, 2n, 4n]
  ,finProdUnrank(
  [2n, 2n, 5n, 11n, 1n, 9n, 2n, 1n, 11n, 12n, 4n, 6n, 2n, 3n, 5n, 10n, 1n, 2n, 11n, 4n, 4n, 1n, 11n, 1n, 10n, 6n, 9n, 12n, 9n, 10n, 12n, 1n, 5n, 4n, 2n, 12n, 2n, 12n, 6n, 11n, 6n, 11n, 3n, 8n, 9n, 4n, 4n, 3n, 11n, 6n, 8n, 9n, 10n, 2n, 4n, 1n, 6n, 9n, 5n, 4n, 5n, 10n, 12n, 1n, 12n, 2n, 7n, 12n, 5n, 4n, 8n, 1n, 12n, 8n, 10n, 12n, 5n, 3n, 10n, 2n, 4n]
  ,14217370716337888301965508509791178667678117712473773328n)).toString()
  ).toBe(14217370716337888301965508509791178667678117712473773328n.toString())

  expect(finProdRank(
  [34n, 37n, 11n, 14n, 43n, 43n, 21n, 16n, 1n, 6n, 22n, 16n, 40n, 34n, 10n, 26n, 39n, 33n, 13n, 17n, 24n, 19n, 41n, 42n, 18n, 19n, 41n, 5n, 34n, 9n, 25n, 33n, 17n, 38n, 18n, 24n, 18n, 2n]
  ,finProdUnrank(
  [34n, 37n, 11n, 14n, 43n, 43n, 21n, 16n, 1n, 6n, 22n, 16n, 40n, 34n, 10n, 26n, 39n, 33n, 13n, 17n, 24n, 19n, 41n, 42n, 18n, 19n, 41n, 5n, 34n, 9n, 25n, 33n, 17n, 38n, 18n, 24n, 18n, 2n]
  ,1568113753613507341027972008283370818784690491400n)).toString()
  ).toBe(1568113753613507341027972008283370818784690491400n.toString())

  expect(finProdRank(
  [4n, 11n, 7n, 8n, 12n, 16n, 4n, 3n, 10n, 11n, 16n, 9n, 16n, 9n, 14n, 3n, 16n, 13n, 16n, 2n, 4n, 11n, 4n, 1n, 9n, 6n, 8n, 1n, 10n, 12n, 6n, 10n, 7n, 4n, 11n, 14n, 14n, 2n, 4n, 10n, 10n, 15n, 5n, 16n, 12n, 3n, 7n, 2n, 5n, 6n, 6n]
  ,finProdUnrank(
  [4n, 11n, 7n, 8n, 12n, 16n, 4n, 3n, 10n, 11n, 16n, 9n, 16n, 9n, 14n, 3n, 16n, 13n, 16n, 2n, 4n, 11n, 4n, 1n, 9n, 6n, 8n, 1n, 10n, 12n, 6n, 10n, 7n, 4n, 11n, 14n, 14n, 2n, 4n, 10n, 10n, 15n, 5n, 16n, 12n, 3n, 7n, 2n, 5n, 6n, 6n]
  ,8271810293107613110921767701650543884506304n)).toString()
  ).toBe(8271810293107613110921767701650543884506304n.toString())

  expect(finProdRank(
  [19n, 24n, 30n, 3n, 6n, 10n, 21n, 12n, 34n, 19n, 30n, 1n, 21n, 13n, 8n, 7n, 6n, 19n, 5n, 21n, 23n, 26n, 14n, 34n, 33n, 9n, 21n, 4n, 17n, 15n, 1n, 26n, 7n, 17n, 30n, 28n, 17n, 9n, 26n, 28n, 11n, 28n, 17n, 23n, 6n, 7n, 5n, 9n, 20n, 14n, 24n, 19n, 17n, 1n, 30n, 3n, 28n, 33n, 9n, 5n, 26n, 2n]
  ,finProdUnrank(
  [19n, 24n, 30n, 3n, 6n, 10n, 21n, 12n, 34n, 19n, 30n, 1n, 21n, 13n, 8n, 7n, 6n, 19n, 5n, 21n, 23n, 26n, 14n, 34n, 33n, 9n, 21n, 4n, 17n, 15n, 1n, 26n, 7n, 17n, 30n, 28n, 17n, 9n, 26n, 28n, 11n, 28n, 17n, 23n, 6n, 7n, 5n, 9n, 20n, 14n, 24n, 19n, 17n, 1n, 30n, 3n, 28n, 33n, 9n, 5n, 26n, 2n]
  ,50505529308172022669420997319281848522436696471761413618556839283956n)).toString()
  ).toBe(50505529308172022669420997319281848522436696471761413618556839283956n.toString())

  expect(finProdRank(
  [60n, 57n, 46n, 19n, 36n, 56n, 20n, 8n, 30n, 25n, 15n, 44n, 3n, 7n]
  ,finProdUnrank(
  [60n, 57n, 46n, 19n, 36n, 56n, 20n, 8n, 30n, 25n, 15n, 44n, 3n, 7n]
  ,2984623892521388673n)).toString()
  ).toBe(2984623892521388673n.toString())

  expect(finProdRank(
  [5n, 23n, 22n, 6n, 13n, 15n, 12n, 23n, 24n, 7n, 21n, 5n, 23n, 4n, 13n, 13n, 17n, 18n, 6n, 20n, 24n, 9n, 14n, 3n, 13n, 1n, 6n, 9n, 24n, 23n, 18n, 13n, 19n, 16n, 14n, 7n, 3n, 26n, 10n, 21n, 16n, 25n, 5n, 24n, 15n, 3n, 5n, 9n, 1n, 7n, 12n, 16n, 5n, 5n, 13n, 7n, 21n, 22n, 13n, 19n, 5n, 22n, 13n]
  ,finProdUnrank(
  [5n, 23n, 22n, 6n, 13n, 15n, 12n, 23n, 24n, 7n, 21n, 5n, 23n, 4n, 13n, 13n, 17n, 18n, 6n, 20n, 24n, 9n, 14n, 3n, 13n, 1n, 6n, 9n, 24n, 23n, 18n, 13n, 19n, 16n, 14n, 7n, 3n, 26n, 10n, 21n, 16n, 25n, 5n, 24n, 15n, 3n, 5n, 9n, 1n, 7n, 12n, 16n, 5n, 5n, 13n, 7n, 21n, 22n, 13n, 19n, 5n, 22n, 13n]
  ,82127393525042099873614073552157385251571950167671669341877103450n)).toString()
  ).toBe(82127393525042099873614073552157385251571950167671669341877103450n.toString())

  expect(finProdRank(
  [8n, 20n, 33n, 16n, 30n, 10n, 15n, 24n, 6n, 35n, 39n, 29n, 37n, 12n, 20n, 46n, 22n, 47n, 33n, 31n, 40n, 17n, 23n, 29n, 19n, 42n, 26n, 23n, 41n, 41n, 22n, 6n, 21n, 18n, 8n, 5n, 6n, 15n, 29n, 1n, 18n, 11n, 13n, 30n, 43n, 17n, 28n, 17n, 29n, 13n, 38n, 20n, 9n, 6n]
  ,finProdUnrank(
  [8n, 20n, 33n, 16n, 30n, 10n, 15n, 24n, 6n, 35n, 39n, 29n, 37n, 12n, 20n, 46n, 22n, 47n, 33n, 31n, 40n, 17n, 23n, 29n, 19n, 42n, 26n, 23n, 41n, 41n, 22n, 6n, 21n, 18n, 8n, 5n, 6n, 15n, 29n, 1n, 18n, 11n, 13n, 30n, 43n, 17n, 28n, 17n, 29n, 13n, 38n, 20n, 9n, 6n]
  ,557348128674467711435315062373486423622507303765657456834868223476892n)).toString()
  ).toBe(557348128674467711435315062373486423622507303765657456834868223476892n.toString())

  expect(finProdRank(
  [3n, 16n, 10n, 20n, 16n, 19n, 7n, 2n, 1n, 2n, 11n, 17n, 10n, 28n, 17n, 8n, 30n, 19n, 24n, 3n, 30n, 8n, 9n, 26n, 23n, 4n, 4n, 2n, 1n, 12n, 8n, 30n, 16n, 23n, 7n, 26n, 16n, 30n, 14n, 8n, 29n, 10n, 28n, 5n, 22n, 29n, 12n, 19n, 1n, 13n, 17n, 28n, 7n, 3n, 4n, 4n, 24n, 21n, 8n, 14n, 17n]
  ,finProdUnrank(
  [3n, 16n, 10n, 20n, 16n, 19n, 7n, 2n, 1n, 2n, 11n, 17n, 10n, 28n, 17n, 8n, 30n, 19n, 24n, 3n, 30n, 8n, 9n, 26n, 23n, 4n, 4n, 2n, 1n, 12n, 8n, 30n, 16n, 23n, 7n, 26n, 16n, 30n, 14n, 8n, 29n, 10n, 28n, 5n, 22n, 29n, 12n, 19n, 1n, 13n, 17n, 28n, 7n, 3n, 4n, 4n, 24n, 21n, 8n, 14n, 17n]
  ,72318528166892485937680973192144024486532440523572907062304734n)).toString()
  ).toBe(72318528166892485937680973192144024486532440523572907062304734n.toString())

  expect(finProdRank(
  [20n, 14n, 8n, 26n, 23n, 21n, 6n, 13n, 22n, 6n, 13n, 13n, 26n, 14n, 4n, 1n, 1n, 12n, 3n, 19n, 6n, 9n, 7n, 23n, 13n, 19n, 6n, 12n, 22n, 22n, 22n, 7n, 7n, 28n, 24n, 2n, 15n, 12n]
  ,finProdUnrank(
  [20n, 14n, 8n, 26n, 23n, 21n, 6n, 13n, 22n, 6n, 13n, 13n, 26n, 14n, 4n, 1n, 1n, 12n, 3n, 19n, 6n, 9n, 7n, 23n, 13n, 19n, 6n, 12n, 22n, 22n, 22n, 7n, 7n, 28n, 24n, 2n, 15n, 12n]
  ,344264205882813635463938494755833365376n)).toString()
  ).toBe(344264205882813635463938494755833365376n.toString())

  expect(finProdRank(
  [1n, 37n, 6n, 36n, 14n, 18n, 4n, 23n, 30n, 18n, 17n, 14n, 18n, 33n, 12n, 37n, 6n]
  ,finProdUnrank(
  [1n, 37n, 6n, 36n, 14n, 18n, 4n, 23n, 30n, 18n, 17n, 14n, 18n, 33n, 12n, 37n, 6n]
  ,2639600618292520596n)).toString()
  ).toBe(2639600618292520596n.toString())

  expect(finProdRank(
  [1n, 3n, 5n, 8n, 7n, 6n, 7n, 5n, 4n, 6n, 9n, 7n, 8n, 2n, 1n, 7n, 8n, 9n, 5n, 4n, 4n, 9n, 4n, 6n, 2n, 3n, 3n, 2n, 6n, 3n, 7n, 7n, 2n, 7n, 9n, 7n, 5n, 3n, 6n, 9n, 3n, 5n, 6n, 6n, 4n, 2n, 6n, 1n, 7n, 1n, 9n, 7n, 3n, 2n, 1n, 4n, 3n, 3n, 8n, 9n, 5n, 7n, 7n, 9n, 4n, 3n, 2n, 3n, 2n, 4n, 8n, 7n, 1n, 4n, 4n, 5n, 2n, 9n, 1n, 2n, 1n, 5n, 7n, 4n, 9n, 3n, 4n, 8n, 7n, 6n, 9n, 4n, 5n]
  ,finProdUnrank(
  [1n, 3n, 5n, 8n, 7n, 6n, 7n, 5n, 4n, 6n, 9n, 7n, 8n, 2n, 1n, 7n, 8n, 9n, 5n, 4n, 4n, 9n, 4n, 6n, 2n, 3n, 3n, 2n, 6n, 3n, 7n, 7n, 2n, 7n, 9n, 7n, 5n, 3n, 6n, 9n, 3n, 5n, 6n, 6n, 4n, 2n, 6n, 1n, 7n, 1n, 9n, 7n, 3n, 2n, 1n, 4n, 3n, 3n, 8n, 9n, 5n, 7n, 7n, 9n, 4n, 3n, 2n, 3n, 2n, 4n, 8n, 7n, 1n, 4n, 4n, 5n, 2n, 9n, 1n, 2n, 1n, 5n, 7n, 4n, 9n, 3n, 4n, 8n, 7n, 6n, 9n, 4n, 5n]
  ,24337545004141602887889429687432978033299976015142958506304n)).toString()
  ).toBe(24337545004141602887889429687432978033299976015142958506304n.toString())

  expect(finProdRank(
  [22n, 6n, 12n, 16n, 12n, 21n, 19n, 1n, 1n, 12n, 9n, 21n, 21n, 9n, 17n, 1n, 2n, 18n, 3n, 15n, 3n, 11n, 7n, 12n, 6n, 16n, 18n, 24n, 19n, 13n, 19n, 10n, 22n, 8n, 8n, 7n, 19n, 2n, 6n, 21n, 21n, 5n, 2n, 4n, 5n, 15n, 11n, 10n, 8n, 5n, 16n, 11n, 17n, 6n, 3n]
  ,finProdUnrank(
  [22n, 6n, 12n, 16n, 12n, 21n, 19n, 1n, 1n, 12n, 9n, 21n, 21n, 9n, 17n, 1n, 2n, 18n, 3n, 15n, 3n, 11n, 7n, 12n, 6n, 16n, 18n, 24n, 19n, 13n, 19n, 10n, 22n, 8n, 8n, 7n, 19n, 2n, 6n, 21n, 21n, 5n, 2n, 4n, 5n, 15n, 11n, 10n, 8n, 5n, 16n, 11n, 17n, 6n, 3n]
  ,5246997924998010068191475220863112386699138921244830n)).toString()
  ).toBe(5246997924998010068191475220863112386699138921244830n.toString())

  expect(finProdRank(
  [34n, 22n, 30n, 12n, 29n, 2n, 19n, 1n, 7n, 8n, 14n, 20n, 21n, 24n, 10n, 22n, 31n, 32n, 16n, 15n, 32n, 26n, 29n, 13n, 25n, 26n, 22n, 20n, 7n, 26n, 19n, 34n, 32n, 5n, 6n, 19n, 7n, 6n, 1n, 10n, 30n, 11n, 1n, 24n, 25n, 18n, 2n, 26n, 18n, 14n, 2n, 31n, 28n, 22n, 24n, 31n, 23n, 24n, 22n, 8n, 13n, 7n, 24n, 20n, 9n]
  ,finProdUnrank(
  [34n, 22n, 30n, 12n, 29n, 2n, 19n, 1n, 7n, 8n, 14n, 20n, 21n, 24n, 10n, 22n, 31n, 32n, 16n, 15n, 32n, 26n, 29n, 13n, 25n, 26n, 22n, 20n, 7n, 26n, 19n, 34n, 32n, 5n, 6n, 19n, 7n, 6n, 1n, 10n, 30n, 11n, 1n, 24n, 25n, 18n, 2n, 26n, 18n, 14n, 2n, 31n, 28n, 22n, 24n, 31n, 23n, 24n, 22n, 8n, 13n, 7n, 24n, 20n, 9n]
  ,224202102485255693888436576292267720705669723442222899988216517909838425961n)).toString()
  ).toBe(224202102485255693888436576292267720705669723442222899988216517909838425961n.toString())

  expect(finProdRank(
  [5n, 16n, 2n, 11n, 9n, 20n, 15n, 21n, 24n, 23n, 9n, 15n, 15n, 17n, 12n, 14n, 17n, 11n, 19n, 5n, 22n, 25n, 7n, 20n, 16n, 13n, 8n, 2n]
  ,finProdUnrank(
  [5n, 16n, 2n, 11n, 9n, 20n, 15n, 21n, 24n, 23n, 9n, 15n, 15n, 17n, 12n, 14n, 17n, 11n, 19n, 5n, 22n, 25n, 7n, 20n, 16n, 13n, 8n, 2n]
  ,372106492394390169829092942292n)).toString()
  ).toBe(372106492394390169829092942292n.toString())

  expect(finProdRank(
  [10n, 8n, 14n, 7n, 15n, 12n, 14n, 12n, 7n, 10n, 5n, 9n, 12n, 3n, 14n, 1n, 14n, 10n, 9n, 14n, 15n, 4n, 1n, 15n, 13n, 3n, 7n, 6n, 8n, 3n, 10n, 2n]
  ,finProdUnrank(
  [10n, 8n, 14n, 7n, 15n, 12n, 14n, 12n, 7n, 10n, 5n, 9n, 12n, 3n, 14n, 1n, 14n, 10n, 9n, 14n, 15n, 4n, 1n, 15n, 13n, 3n, 7n, 6n, 8n, 3n, 10n, 2n]
  ,3661004605414396898726148000n)).toString()
  ).toBe(3661004605414396898726148000n.toString())

  expect(finProdRank(
  [48n, 24n, 10n, 27n, 4n, 17n, 26n]
  ,finProdUnrank(
  [48n, 24n, 10n, 27n, 4n, 17n, 26n]
  ,119993814n)).toString()
  ).toBe(119993814n.toString())

  expect(finProdRank(
  [11n, 1n, 6n, 7n, 5n, 12n, 12n, 4n, 7n, 13n, 6n, 12n, 8n, 1n, 12n, 4n, 2n, 5n, 3n, 5n, 8n, 8n, 5n, 2n, 7n, 5n, 8n, 3n, 7n, 7n, 5n, 5n, 11n, 9n, 2n]
  ,finProdUnrank(
  [11n, 1n, 6n, 7n, 5n, 12n, 12n, 4n, 7n, 13n, 6n, 12n, 8n, 1n, 12n, 4n, 2n, 5n, 3n, 5n, 8n, 8n, 5n, 2n, 7n, 5n, 8n, 3n, 7n, 7n, 5n, 5n, 11n, 9n, 2n]
  ,59382569451543016173322727n)).toString()
  ).toBe(59382569451543016173322727n.toString())

  expect(finProdRank(
  [19n, 24n, 36n, 30n, 14n, 27n, 32n, 36n, 14n, 16n, 22n, 4n, 35n, 4n, 40n, 3n, 13n, 44n, 36n, 16n, 30n, 38n, 29n, 8n, 13n, 2n, 37n, 14n, 39n, 20n, 2n, 15n, 8n, 40n, 27n, 10n, 10n, 33n, 25n, 10n, 12n, 41n, 33n, 29n, 8n, 15n, 30n, 34n, 30n, 3n, 32n, 5n, 5n, 27n, 27n, 11n, 35n]
  ,finProdUnrank(
  [19n, 24n, 36n, 30n, 14n, 27n, 32n, 36n, 14n, 16n, 22n, 4n, 35n, 4n, 40n, 3n, 13n, 44n, 36n, 16n, 30n, 38n, 29n, 8n, 13n, 2n, 37n, 14n, 39n, 20n, 2n, 15n, 8n, 40n, 27n, 10n, 10n, 33n, 25n, 10n, 12n, 41n, 33n, 29n, 8n, 15n, 30n, 34n, 30n, 3n, 32n, 5n, 5n, 27n, 27n, 11n, 35n]
  ,1805681442555663573082229288494005914493477125363611951101959054430998n)).toString()
  ).toBe(1805681442555663573082229288494005914493477125363611951101959054430998n.toString())

  expect(finProdRank(
  [2n, 12n, 33n, 16n, 46n, 40n, 28n, 25n, 20n, 30n, 5n, 11n, 22n, 25n, 36n, 40n, 48n, 2n, 25n, 16n, 22n, 15n, 45n]
  ,finProdUnrank(
  [2n, 12n, 33n, 16n, 46n, 40n, 28n, 25n, 20n, 30n, 5n, 11n, 22n, 25n, 36n, 40n, 48n, 2n, 25n, 16n, 22n, 15n, 45n]
  ,210092844204513508343006404743n)).toString()
  ).toBe(210092844204513508343006404743n.toString())

  expect(finProdRank(
  [11n, 25n, 30n, 21n, 8n, 14n, 22n, 20n, 28n, 12n, 19n, 24n, 21n, 15n, 8n, 27n, 18n, 8n, 29n, 12n, 17n, 26n, 23n, 16n, 7n, 28n, 23n, 29n, 25n, 20n, 24n, 17n, 18n, 6n, 24n, 24n, 26n, 24n, 8n, 23n, 24n, 14n, 9n, 6n, 22n, 13n, 12n, 1n, 21n, 7n, 9n, 8n, 29n]
  ,finProdUnrank(
  [11n, 25n, 30n, 21n, 8n, 14n, 22n, 20n, 28n, 12n, 19n, 24n, 21n, 15n, 8n, 27n, 18n, 8n, 29n, 12n, 17n, 26n, 23n, 16n, 7n, 28n, 23n, 29n, 25n, 20n, 24n, 17n, 18n, 6n, 24n, 24n, 26n, 24n, 8n, 23n, 24n, 14n, 9n, 6n, 22n, 13n, 12n, 1n, 21n, 7n, 9n, 8n, 29n]
  ,794739561098851379811354243974705542673263485600947134277846814n)).toString()
  ).toBe(794739561098851379811354243974705542673263485600947134277846814n.toString())

  expect(finProdRank(
  [1n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 2n]
  ,finProdUnrank(
  [1n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 2n]
  ,39337461720360267227793984526718n)).toString()
  ).toBe(39337461720360267227793984526718n.toString())

  expect(finProdRank(
  [4n, 15n, 36n, 44n, 2n, 4n, 12n, 9n, 13n, 40n, 13n, 8n, 17n, 23n, 28n, 36n, 12n, 33n, 18n, 42n, 38n, 27n, 31n, 41n, 43n, 35n, 42n, 33n, 10n, 31n, 38n, 37n, 32n, 18n, 37n, 2n, 38n, 33n, 9n, 36n, 27n, 28n, 22n, 28n, 5n, 13n, 27n, 2n, 5n, 15n, 27n, 1n, 36n, 26n, 24n, 22n, 35n, 5n, 26n]
  ,finProdUnrank(
  [4n, 15n, 36n, 44n, 2n, 4n, 12n, 9n, 13n, 40n, 13n, 8n, 17n, 23n, 28n, 36n, 12n, 33n, 18n, 42n, 38n, 27n, 31n, 41n, 43n, 35n, 42n, 33n, 10n, 31n, 38n, 37n, 32n, 18n, 37n, 2n, 38n, 33n, 9n, 36n, 27n, 28n, 22n, 28n, 5n, 13n, 27n, 2n, 5n, 15n, 27n, 1n, 36n, 26n, 24n, 22n, 35n, 5n, 26n]
  ,56928576601308081351349839223888902925552347651460017959955971430964425286n)).toString()
  ).toBe(56928576601308081351349839223888902925552347651460017959955971430964425286n.toString())

  expect(finProdRank(
  [8n, 8n, 6n, 8n, 4n, 5n, 6n, 6n, 5n, 4n, 5n, 6n, 7n, 3n, 7n, 1n, 2n, 1n, 7n, 1n, 8n, 4n, 2n, 1n, 7n, 6n, 6n, 3n, 2n, 8n, 7n, 8n, 6n, 7n, 3n, 2n, 7n, 8n, 5n, 7n, 1n, 2n, 2n, 1n, 5n, 6n, 3n, 3n, 5n, 5n, 3n, 6n, 4n, 4n, 2n, 6n, 6n, 2n, 5n, 5n, 8n, 8n, 1n, 5n, 3n, 1n, 2n, 3n, 5n, 1n, 5n, 8n, 5n, 6n, 8n, 8n, 6n, 3n, 6n, 3n, 7n, 8n, 3n, 1n, 3n, 6n, 5n, 5n, 3n, 3n]
  ,finProdUnrank(
  [8n, 8n, 6n, 8n, 4n, 5n, 6n, 6n, 5n, 4n, 5n, 6n, 7n, 3n, 7n, 1n, 2n, 1n, 7n, 1n, 8n, 4n, 2n, 1n, 7n, 6n, 6n, 3n, 2n, 8n, 7n, 8n, 6n, 7n, 3n, 2n, 7n, 8n, 5n, 7n, 1n, 2n, 2n, 1n, 5n, 6n, 3n, 3n, 5n, 5n, 3n, 6n, 4n, 4n, 2n, 6n, 6n, 2n, 5n, 5n, 8n, 8n, 1n, 5n, 3n, 1n, 2n, 3n, 5n, 1n, 5n, 8n, 5n, 6n, 8n, 8n, 6n, 3n, 6n, 3n, 7n, 8n, 3n, 1n, 3n, 6n, 5n, 5n, 3n, 3n]
  ,187044167599840687731974603633252770927952996074885748n)).toString()
  ).toBe(187044167599840687731974603633252770927952996074885748n.toString())

  expect(finProdRank(
  [38n, 13n, 21n, 9n, 7n, 25n, 8n, 34n, 13n, 43n, 37n, 15n, 40n, 39n, 43n, 39n, 5n, 26n, 6n, 10n, 33n, 11n, 11n, 23n, 43n, 6n, 11n, 12n, 15n, 30n, 9n, 10n, 27n, 41n, 13n, 12n, 11n, 3n, 26n, 17n]
  ,finProdUnrank(
  [38n, 13n, 21n, 9n, 7n, 25n, 8n, 34n, 13n, 43n, 37n, 15n, 40n, 39n, 43n, 39n, 5n, 26n, 6n, 10n, 33n, 11n, 11n, 23n, 43n, 6n, 11n, 12n, 15n, 30n, 9n, 10n, 27n, 41n, 13n, 12n, 11n, 3n, 26n, 17n]
  ,6994309918258265000549456007817688654577865986876n)).toString()
  ).toBe(6994309918258265000549456007817688654577865986876n.toString())

  expect(finProdRank(
  [1n, 19n, 19n, 24n, 24n, 4n, 6n, 7n, 4n, 19n, 11n, 1n, 2n, 20n, 1n, 20n, 8n]
  ,finProdUnrank(
  [1n, 19n, 19n, 24n, 24n, 4n, 6n, 7n, 4n, 19n, 11n, 1n, 2n, 20n, 1n, 20n, 8n]
  ,43528152018232n)).toString()
  ).toBe(43528152018232n.toString())

  expect(finProdRank(
  [6n, 2n, 20n, 32n, 23n, 26n, 9n, 28n, 35n, 35n, 8n]
  ,finProdUnrank(
  [6n, 2n, 20n, 32n, 23n, 26n, 9n, 28n, 35n, 35n, 8n]
  ,1000351154009n)).toString()
  ).toBe(1000351154009n.toString())

  expect(finProdRank(
  [5n, 19n, 46n, 52n, 54n, 23n, 52n, 8n, 5n, 12n, 35n, 21n, 23n, 51n, 54n, 53n, 56n, 13n, 43n, 55n, 26n, 3n, 29n, 15n, 8n, 40n, 7n, 48n, 11n, 49n, 22n, 51n, 41n, 50n, 2n, 46n, 14n, 50n, 52n, 54n, 27n, 5n, 51n, 55n, 32n, 48n, 14n, 21n, 56n, 43n, 32n, 38n, 25n, 13n, 4n]
  ,finProdUnrank(
  [5n, 19n, 46n, 52n, 54n, 23n, 52n, 8n, 5n, 12n, 35n, 21n, 23n, 51n, 54n, 53n, 56n, 13n, 43n, 55n, 26n, 3n, 29n, 15n, 8n, 40n, 7n, 48n, 11n, 49n, 22n, 51n, 41n, 50n, 2n, 46n, 14n, 50n, 52n, 54n, 27n, 5n, 51n, 55n, 32n, 48n, 14n, 21n, 56n, 43n, 32n, 38n, 25n, 13n, 4n]
  ,2625829966525792255804199688372050360467146268918750169310690905008136033852n)).toString()
  ).toBe(2625829966525792255804199688372050360467146268918750169310690905008136033852n.toString())

  expect(finProdRank(
  [9n, 33n, 31n, 8n, 8n, 29n, 31n, 22n, 33n, 37n, 27n, 28n, 13n, 28n, 30n, 36n, 31n, 22n, 35n, 13n, 7n, 28n, 18n, 41n, 18n, 9n, 27n, 29n, 13n, 19n, 15n, 9n]
  ,finProdUnrank(
  [9n, 33n, 31n, 8n, 8n, 29n, 31n, 22n, 33n, 37n, 27n, 28n, 13n, 28n, 30n, 36n, 31n, 22n, 35n, 13n, 7n, 28n, 18n, 41n, 18n, 9n, 27n, 29n, 13n, 19n, 15n, 9n]
  ,46720536196512868133476074571082822106975n)).toString()
  ).toBe(46720536196512868133476074571082822106975n.toString())

  expect(finProdRank(
  [21n, 14n, 22n, 29n, 24n, 3n, 3n, 21n, 14n, 26n, 1n, 20n, 2n, 29n, 14n, 13n, 23n, 2n, 7n, 5n, 25n, 28n, 23n, 19n, 22n, 16n, 4n, 3n, 30n, 19n, 12n, 28n, 12n, 21n, 14n, 8n, 21n, 2n, 18n, 23n, 17n, 19n, 1n, 23n, 1n, 19n, 24n, 26n, 3n]
  ,finProdUnrank(
  [21n, 14n, 22n, 29n, 24n, 3n, 3n, 21n, 14n, 26n, 1n, 20n, 2n, 29n, 14n, 13n, 23n, 2n, 7n, 5n, 25n, 28n, 23n, 19n, 22n, 16n, 4n, 3n, 30n, 19n, 12n, 28n, 12n, 21n, 14n, 8n, 21n, 2n, 18n, 23n, 17n, 19n, 1n, 23n, 1n, 19n, 24n, 26n, 3n]
  ,944070650584441739976292297909497260221551165101937n)).toString()
  ).toBe(944070650584441739976292297909497260221551165101937n.toString())

  expect(finProdRank(
  [25n, 29n, 5n, 27n, 17n, 12n, 17n, 6n, 34n, 16n, 18n, 31n, 14n, 26n, 21n, 41n, 11n, 6n, 14n, 22n, 25n, 25n, 12n, 22n, 12n, 2n, 40n, 36n, 14n, 20n, 33n, 20n, 25n, 11n, 6n, 11n, 33n, 38n, 37n, 40n, 4n, 4n]
  ,finProdUnrank(
  [25n, 29n, 5n, 27n, 17n, 12n, 17n, 6n, 34n, 16n, 18n, 31n, 14n, 26n, 21n, 41n, 11n, 6n, 14n, 22n, 25n, 25n, 12n, 22n, 12n, 2n, 40n, 36n, 14n, 20n, 33n, 20n, 25n, 11n, 6n, 11n, 33n, 38n, 37n, 40n, 4n, 4n]
  ,2032051254193896601019902829607548163047330414947551n)).toString()
  ).toBe(2032051254193896601019902829607548163047330414947551n.toString())

  expect(finProdRank(
  [9n, 18n, 13n, 6n, 7n, 16n, 16n, 8n, 7n, 18n, 20n, 1n, 7n, 1n, 9n, 7n, 12n, 6n, 1n, 12n, 13n, 11n, 20n, 12n, 20n, 4n, 16n, 10n, 19n, 12n, 2n, 18n, 6n, 10n, 11n, 1n, 4n, 14n, 8n, 14n, 11n, 20n, 14n, 1n, 17n, 8n, 13n, 5n, 10n, 18n, 16n, 4n, 4n, 20n, 14n, 12n, 20n, 3n, 4n, 12n, 9n, 7n, 1n, 17n, 11n, 14n, 2n, 9n, 12n, 10n, 17n, 2n, 12n, 20n, 6n, 17n]
  ,finProdUnrank(
  [9n, 18n, 13n, 6n, 7n, 16n, 16n, 8n, 7n, 18n, 20n, 1n, 7n, 1n, 9n, 7n, 12n, 6n, 1n, 12n, 13n, 11n, 20n, 12n, 20n, 4n, 16n, 10n, 19n, 12n, 2n, 18n, 6n, 10n, 11n, 1n, 4n, 14n, 8n, 14n, 11n, 20n, 14n, 1n, 17n, 8n, 13n, 5n, 10n, 18n, 16n, 4n, 4n, 20n, 14n, 12n, 20n, 3n, 4n, 12n, 9n, 7n, 1n, 17n, 11n, 14n, 2n, 9n, 12n, 10n, 17n, 2n, 12n, 20n, 6n, 17n]
  ,6363466163173183762414349365385585417358146728082870269019433111323049n)).toString()
  ).toBe(6363466163173183762414349365385585417358146728082870269019433111323049n.toString())

  expect(finProdRank(
  [24n, 9n, 27n, 19n, 8n, 17n, 23n, 8n, 19n, 6n, 25n, 3n, 34n, 6n, 10n, 12n, 29n, 31n, 19n, 17n, 16n, 10n, 10n, 1n, 8n, 19n, 5n, 11n, 7n, 14n, 15n, 16n, 6n, 32n, 14n, 15n, 8n, 18n, 13n, 24n, 21n, 22n, 5n, 31n, 10n, 18n, 18n, 33n, 2n, 9n, 11n, 3n, 10n, 17n, 21n, 5n, 3n, 28n, 29n, 28n, 2n]
  ,finProdUnrank(
  [24n, 9n, 27n, 19n, 8n, 17n, 23n, 8n, 19n, 6n, 25n, 3n, 34n, 6n, 10n, 12n, 29n, 31n, 19n, 17n, 16n, 10n, 10n, 1n, 8n, 19n, 5n, 11n, 7n, 14n, 15n, 16n, 6n, 32n, 14n, 15n, 8n, 18n, 13n, 24n, 21n, 22n, 5n, 31n, 10n, 18n, 18n, 33n, 2n, 9n, 11n, 3n, 10n, 17n, 21n, 5n, 3n, 28n, 29n, 28n, 2n]
  ,652115910431809966710713106628804142153386210077670659244463568610n)).toString()
  ).toBe(652115910431809966710713106628804142153386210077670659244463568610n.toString())

  expect(finProdRank(
  [13n, 4n, 28n, 32n, 34n, 24n, 11n, 3n, 25n, 25n, 24n, 15n, 9n, 9n, 17n, 11n, 21n, 5n, 30n, 20n, 15n, 10n, 18n, 3n, 32n, 2n, 31n, 24n, 37n, 9n, 18n, 33n, 12n, 21n, 21n, 23n, 27n, 1n, 6n, 14n, 1n, 1n, 24n, 16n, 7n, 28n, 12n, 23n, 21n, 37n, 15n, 3n, 7n, 37n, 38n, 9n, 4n, 6n, 16n, 9n, 10n]
  ,finProdUnrank(
  [13n, 4n, 28n, 32n, 34n, 24n, 11n, 3n, 25n, 25n, 24n, 15n, 9n, 9n, 17n, 11n, 21n, 5n, 30n, 20n, 15n, 10n, 18n, 3n, 32n, 2n, 31n, 24n, 37n, 9n, 18n, 33n, 12n, 21n, 21n, 23n, 27n, 1n, 6n, 14n, 1n, 1n, 24n, 16n, 7n, 28n, 12n, 23n, 21n, 37n, 15n, 3n, 7n, 37n, 38n, 9n, 4n, 6n, 16n, 9n, 10n]
  ,6934738502106719360785618784921648594142429526515772174575325132024n)).toString()
  ).toBe(6934738502106719360785618784921648594142429526515772174575325132024n.toString())

  expect(finProdRank(
  [11n, 2n, 10n, 7n, 4n, 4n, 6n, 9n, 11n, 4n, 5n, 9n, 3n, 11n, 7n, 4n, 7n, 3n, 1n, 4n, 2n, 5n, 7n, 9n, 9n, 7n, 3n, 6n, 9n, 7n, 2n, 3n, 10n, 6n, 7n, 1n, 3n, 2n, 8n, 1n, 2n, 1n, 6n, 7n, 4n, 10n, 11n, 2n, 11n, 5n, 7n, 9n, 7n, 5n, 10n, 6n, 10n, 2n, 1n, 8n, 8n, 9n, 9n, 11n, 7n, 9n, 6n, 6n, 11n, 10n, 6n, 6n, 7n, 10n, 2n, 4n, 4n, 1n, 8n, 9n, 10n, 2n, 7n, 8n, 11n, 10n, 6n, 2n, 1n, 11n, 8n, 4n, 2n, 3n, 4n, 10n, 2n]
  ,finProdUnrank(
  [11n, 2n, 10n, 7n, 4n, 4n, 6n, 9n, 11n, 4n, 5n, 9n, 3n, 11n, 7n, 4n, 7n, 3n, 1n, 4n, 2n, 5n, 7n, 9n, 9n, 7n, 3n, 6n, 9n, 7n, 2n, 3n, 10n, 6n, 7n, 1n, 3n, 2n, 8n, 1n, 2n, 1n, 6n, 7n, 4n, 10n, 11n, 2n, 11n, 5n, 7n, 9n, 7n, 5n, 10n, 6n, 10n, 2n, 1n, 8n, 8n, 9n, 9n, 11n, 7n, 9n, 6n, 6n, 11n, 10n, 6n, 6n, 7n, 10n, 2n, 4n, 4n, 1n, 8n, 9n, 10n, 2n, 7n, 8n, 11n, 10n, 6n, 2n, 1n, 11n, 8n, 4n, 2n, 3n, 4n, 10n, 2n]
  ,153530522811410825307691951468804882966556671613982362113400775214381n)).toString()
  ).toBe(153530522811410825307691951468804882966556671613982362113400775214381n.toString())

  expect(finProdRank(
  [29n, 20n, 25n, 31n, 25n, 28n, 30n, 23n, 18n, 3n]
  ,finProdUnrank(
  [29n, 20n, 25n, 31n, 25n, 28n, 30n, 23n, 18n, 3n]
  ,4563134809417n)).toString()
  ).toBe(4563134809417n.toString())

  expect(finProdRank(
  [33n, 14n, 2n, 10n, 16n, 12n, 15n, 32n, 31n, 5n, 39n, 18n, 12n, 29n, 24n, 31n, 8n, 29n, 12n, 1n, 33n, 6n, 11n, 22n, 6n]
  ,finProdUnrank(
  [33n, 14n, 2n, 10n, 16n, 12n, 15n, 32n, 31n, 5n, 39n, 18n, 12n, 29n, 24n, 31n, 8n, 29n, 12n, 1n, 33n, 6n, 11n, 22n, 6n]
  ,9746314527700935266847610679n)).toString()
  ).toBe(9746314527700935266847610679n.toString())

  expect(finProdRank(
  [26n, 12n, 21n, 12n, 14n, 8n, 29n, 21n, 5n, 13n, 24n, 23n, 22n, 19n, 4n, 23n, 17n, 15n, 19n, 25n, 17n, 12n, 28n, 27n, 1n, 5n, 9n, 12n, 11n, 16n, 4n, 22n, 9n, 26n, 6n, 11n, 28n, 18n, 12n, 9n, 11n, 2n, 2n, 16n, 27n, 15n, 25n, 1n, 10n, 8n, 19n, 5n, 1n, 12n, 9n]
  ,finProdUnrank(
  [26n, 12n, 21n, 12n, 14n, 8n, 29n, 21n, 5n, 13n, 24n, 23n, 22n, 19n, 4n, 23n, 17n, 15n, 19n, 25n, 17n, 12n, 28n, 27n, 1n, 5n, 9n, 12n, 11n, 16n, 4n, 22n, 9n, 26n, 6n, 11n, 28n, 18n, 12n, 9n, 11n, 2n, 2n, 16n, 27n, 15n, 25n, 1n, 10n, 8n, 19n, 5n, 1n, 12n, 9n]
  ,2033101101291787526147241881867036344066130179466183793701n)).toString()
  ).toBe(2033101101291787526147241881867036344066130179466183793701n.toString())

  expect(finProdRank(
  [7n, 2n, 14n, 11n, 10n, 9n, 4n, 2n, 6n, 2n, 6n, 8n, 8n, 7n, 9n, 11n, 4n, 13n, 11n, 3n, 3n, 12n, 6n, 14n, 9n, 12n, 8n, 12n, 3n, 9n, 12n, 9n, 14n, 13n, 15n, 7n, 11n, 5n, 13n, 14n, 4n, 11n, 14n, 13n, 14n, 5n, 14n, 13n, 3n, 11n, 15n, 11n, 3n, 4n, 15n, 12n, 7n, 13n, 3n, 4n, 1n, 11n, 3n, 5n, 8n, 5n, 11n, 8n, 3n, 1n, 2n, 5n, 13n, 9n, 15n, 10n, 12n, 14n, 12n, 13n, 8n, 10n, 7n]
  ,finProdUnrank(
  [7n, 2n, 14n, 11n, 10n, 9n, 4n, 2n, 6n, 2n, 6n, 8n, 8n, 7n, 9n, 11n, 4n, 13n, 11n, 3n, 3n, 12n, 6n, 14n, 9n, 12n, 8n, 12n, 3n, 9n, 12n, 9n, 14n, 13n, 15n, 7n, 11n, 5n, 13n, 14n, 4n, 11n, 14n, 13n, 14n, 5n, 14n, 13n, 3n, 11n, 15n, 11n, 3n, 4n, 15n, 12n, 7n, 13n, 3n, 4n, 1n, 11n, 3n, 5n, 8n, 5n, 11n, 8n, 3n, 1n, 2n, 5n, 13n, 9n, 15n, 10n, 12n, 14n, 12n, 13n, 8n, 10n, 7n]
  ,334017136091009538696125394021879876465837425257235385936850739847485096n)).toString()
  ).toBe(334017136091009538696125394021879876465837425257235385936850739847485096n.toString())

  expect(finProdRank(
  [7n, 2n]
  ,finProdUnrank(
  [7n, 2n]
  ,3n)).toString()
  ).toBe(3n.toString())

  expect(finProdRank(
  [6n, 2n, 6n, 3n, 14n, 13n, 8n, 9n, 15n, 9n, 8n, 10n, 4n, 11n, 8n, 6n, 4n, 18n, 8n, 15n, 3n, 13n, 14n, 11n, 5n, 4n]
  ,finProdUnrank(
  [6n, 2n, 6n, 3n, 14n, 13n, 8n, 9n, 15n, 9n, 8n, 10n, 4n, 11n, 8n, 6n, 4n, 18n, 8n, 15n, 3n, 13n, 14n, 11n, 5n, 4n]
  ,34507732735053562582671n)).toString()
  ).toBe(34507732735053562582671n.toString())

  expect(finProdRank(
  [38n, 2n, 2n, 25n, 44n, 39n, 36n, 12n, 28n, 39n, 9n]
  ,finProdUnrank(
  [38n, 2n, 2n, 25n, 44n, 39n, 36n, 12n, 28n, 39n, 9n]
  ,7531773237100n)).toString()
  ).toBe(7531773237100n.toString())

  expect(finProdRank(
  [1n, 2n, 7n, 2n, 3n, 7n, 5n, 2n, 3n, 2n, 6n, 3n, 3n, 4n, 4n, 5n, 7n, 1n, 1n, 5n, 6n, 1n, 3n, 2n, 8n, 5n, 3n, 7n, 4n, 1n, 3n, 1n, 6n, 3n, 1n, 5n, 6n, 1n, 5n, 4n, 2n, 1n, 1n, 8n, 5n, 4n, 2n]
  ,finProdUnrank(
  [1n, 2n, 7n, 2n, 3n, 7n, 5n, 2n, 3n, 2n, 6n, 3n, 3n, 4n, 4n, 5n, 7n, 1n, 1n, 5n, 6n, 1n, 3n, 2n, 8n, 5n, 3n, 7n, 4n, 1n, 3n, 1n, 6n, 3n, 1n, 5n, 6n, 1n, 5n, 4n, 2n, 1n, 1n, 8n, 5n, 4n, 2n]
  ,13291266024097395000858n)).toString()
  ).toBe(13291266024097395000858n.toString())

  expect(finProdRank(
  [16n, 26n, 30n, 29n, 25n, 24n, 22n, 15n]
  ,finProdUnrank(
  [16n, 26n, 30n, 29n, 25n, 24n, 22n, 15n]
  ,41936607318n)).toString()
  ).toBe(41936607318n.toString())

  expect(finProdRank(
  [7n, 29n, 46n, 64n, 4n, 55n, 15n, 6n, 45n, 3n, 37n, 51n, 31n, 2n]
  ,finProdUnrank(
  [7n, 29n, 46n, 64n, 4n, 55n, 15n, 6n, 45n, 3n, 37n, 51n, 31n, 2n]
  ,166197310262830490n)).toString()
  ).toBe(166197310262830490n.toString())

  expect(finProdRank(
  [50n, 8n, 6n, 2n, 45n, 38n, 1n, 23n, 47n, 17n, 42n, 27n, 36n, 45n, 16n, 22n, 6n, 17n, 36n, 35n, 34n, 43n, 19n, 23n, 7n, 32n, 56n, 51n, 9n, 18n, 15n, 34n, 46n, 5n, 52n, 38n, 38n, 53n, 58n, 22n]
  ,finProdUnrank(
  [50n, 8n, 6n, 2n, 45n, 38n, 1n, 23n, 47n, 17n, 42n, 27n, 36n, 45n, 16n, 22n, 6n, 17n, 36n, 35n, 34n, 43n, 19n, 23n, 7n, 32n, 56n, 51n, 9n, 18n, 15n, 34n, 46n, 5n, 52n, 38n, 38n, 53n, 58n, 22n]
  ,151315636199919251905495075721878590998479834054677048n)).toString()
  ).toBe(151315636199919251905495075721878590998479834054677048n.toString())

  expect(finProdRank(
  [7n, 2n, 4n, 4n, 2n, 5n, 7n, 7n, 6n, 1n, 1n, 2n, 2n, 7n, 2n, 2n, 6n, 3n, 2n, 7n, 5n, 1n, 6n, 7n, 4n, 5n, 2n, 3n, 4n, 3n, 5n, 1n, 2n, 1n, 7n, 2n, 7n, 3n, 2n]
  ,finProdUnrank(
  [7n, 2n, 4n, 4n, 2n, 5n, 7n, 7n, 6n, 1n, 1n, 2n, 2n, 7n, 2n, 2n, 6n, 3n, 2n, 7n, 5n, 1n, 6n, 7n, 4n, 5n, 2n, 3n, 4n, 3n, 5n, 1n, 2n, 1n, 7n, 2n, 7n, 3n, 2n]
  ,4753924888321571011n)).toString()
  ).toBe(4753924888321571011n.toString())

  expect(finProdRank(
  [46n, 41n, 36n, 28n]
  ,finProdUnrank(
  [46n, 41n, 36n, 28n]
  ,984487n)).toString()
  ).toBe(984487n.toString())

  expect(finProdRank(
  [1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 2n]
  ,finProdUnrank(
  [1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 2n]
  ,5067203967843528808766102109580282n)).toString()
  ).toBe(5067203967843528808766102109580282n.toString())

  expect(finProdRank(
  [45n, 28n, 7n, 1n, 29n, 37n, 12n, 38n, 15n, 15n, 44n, 17n, 12n, 39n, 40n, 48n, 7n, 28n, 22n, 31n, 26n, 29n, 19n, 6n, 36n, 25n, 27n, 14n, 9n, 36n, 33n, 22n, 40n, 13n, 33n, 3n, 6n, 41n, 23n, 7n, 14n, 11n, 22n, 48n, 39n, 17n, 34n, 48n, 45n, 12n]
  ,finProdUnrank(
  [45n, 28n, 7n, 1n, 29n, 37n, 12n, 38n, 15n, 15n, 44n, 17n, 12n, 39n, 40n, 48n, 7n, 28n, 22n, 31n, 26n, 29n, 19n, 6n, 36n, 25n, 27n, 14n, 9n, 36n, 33n, 22n, 40n, 13n, 33n, 3n, 6n, 41n, 23n, 7n, 14n, 11n, 22n, 48n, 39n, 17n, 34n, 48n, 45n, 12n]
  ,65316837464507439729528896616986357677963035886045531685980451696n)).toString()
  ).toBe(65316837464507439729528896616986357677963035886045531685980451696n.toString())

  expect(finProdRank(
  [8n, 3n, 6n, 2n, 4n, 1n, 3n, 3n, 8n, 7n, 1n, 4n, 5n, 6n, 7n, 1n, 4n, 4n, 6n, 1n, 1n, 5n, 5n, 6n, 8n, 5n, 1n, 2n, 1n, 3n, 4n, 6n, 2n, 2n, 7n, 7n, 7n, 5n, 6n, 6n, 4n, 3n, 4n, 5n, 6n, 2n, 1n, 2n, 6n, 5n, 5n, 8n, 2n, 5n, 7n, 2n, 1n, 7n, 3n, 3n, 8n, 2n, 5n, 6n, 8n, 2n, 3n]
  ,finProdUnrank(
  [8n, 3n, 6n, 2n, 4n, 1n, 3n, 3n, 8n, 7n, 1n, 4n, 5n, 6n, 7n, 1n, 4n, 4n, 6n, 1n, 1n, 5n, 5n, 6n, 8n, 5n, 1n, 2n, 1n, 3n, 4n, 6n, 2n, 2n, 7n, 7n, 7n, 5n, 6n, 6n, 4n, 3n, 4n, 5n, 6n, 2n, 1n, 2n, 6n, 5n, 5n, 8n, 2n, 5n, 7n, 2n, 1n, 7n, 3n, 3n, 8n, 2n, 5n, 6n, 8n, 2n, 3n]
  ,10900336057779618035711550036548314935n)).toString()
  ).toBe(10900336057779618035711550036548314935n.toString())

  expect(finProdRank(
  [1n, 6n, 2n, 12n, 3n, 13n, 4n, 12n, 1n, 3n, 4n, 1n, 1n, 1n, 3n, 5n, 10n, 12n, 5n, 1n, 10n, 6n, 3n, 2n, 12n, 10n, 6n, 6n, 6n, 6n, 4n, 13n, 4n, 9n, 9n, 5n, 8n, 13n, 8n, 5n, 10n, 13n, 4n, 2n, 5n, 5n, 10n, 3n, 4n, 10n, 7n, 7n, 13n, 5n, 13n, 9n, 6n, 2n, 7n, 1n, 2n, 7n, 6n, 3n, 4n, 11n, 2n, 5n, 1n, 3n, 11n, 2n, 1n, 5n, 12n, 11n, 2n, 5n, 4n, 13n, 4n, 12n, 11n, 8n, 2n]
  ,finProdUnrank(
  [1n, 6n, 2n, 12n, 3n, 13n, 4n, 12n, 1n, 3n, 4n, 1n, 1n, 1n, 3n, 5n, 10n, 12n, 5n, 1n, 10n, 6n, 3n, 2n, 12n, 10n, 6n, 6n, 6n, 6n, 4n, 13n, 4n, 9n, 9n, 5n, 8n, 13n, 8n, 5n, 10n, 13n, 4n, 2n, 5n, 5n, 10n, 3n, 4n, 10n, 7n, 7n, 13n, 5n, 13n, 9n, 6n, 2n, 7n, 1n, 2n, 7n, 6n, 3n, 4n, 11n, 2n, 5n, 1n, 3n, 11n, 2n, 1n, 5n, 12n, 11n, 2n, 5n, 4n, 13n, 4n, 12n, 11n, 8n, 2n]
  ,5914517883879269008748961554985984640760924598800579327559n)).toString()
  ).toBe(5914517883879269008748961554985984640760924598800579327559n.toString())

  expect(finProdRank(
  [1n, 4n, 9n, 3n, 10n, 8n, 10n, 8n, 3n, 3n, 5n, 5n, 3n, 3n, 5n, 3n, 10n, 1n, 6n, 1n, 8n, 4n, 10n, 7n, 6n, 1n, 10n, 10n, 6n, 2n, 9n, 3n, 3n, 2n, 1n, 10n, 1n, 4n, 10n, 9n, 7n, 6n, 8n, 3n, 10n, 6n, 10n, 4n, 5n, 5n, 9n, 4n, 4n, 1n, 4n, 10n, 1n, 7n, 5n, 10n, 7n, 1n, 8n, 10n, 5n, 5n, 5n, 1n, 4n, 5n, 1n, 10n, 6n, 10n, 1n, 4n, 4n, 10n, 1n, 7n, 6n, 5n, 9n, 9n, 7n, 5n, 10n, 9n, 10n, 5n, 5n, 6n, 10n, 10n]
  ,finProdUnrank(
  [1n, 4n, 9n, 3n, 10n, 8n, 10n, 8n, 3n, 3n, 5n, 5n, 3n, 3n, 5n, 3n, 10n, 1n, 6n, 1n, 8n, 4n, 10n, 7n, 6n, 1n, 10n, 10n, 6n, 2n, 9n, 3n, 3n, 2n, 1n, 10n, 1n, 4n, 10n, 9n, 7n, 6n, 8n, 3n, 10n, 6n, 10n, 4n, 5n, 5n, 9n, 4n, 4n, 1n, 4n, 10n, 1n, 7n, 5n, 10n, 7n, 1n, 8n, 10n, 5n, 5n, 5n, 1n, 4n, 5n, 1n, 10n, 6n, 10n, 1n, 4n, 4n, 10n, 1n, 7n, 6n, 5n, 9n, 9n, 7n, 5n, 10n, 9n, 10n, 5n, 5n, 6n, 10n, 10n]
  ,308230804348416548490524453366456339124360020660661653626061002n)).toString()
  ).toBe(308230804348416548490524453366456339124360020660661653626061002n.toString())

  expect(finProdRank(
  [14n, 4n, 14n, 15n, 5n, 11n, 12n, 12n, 6n, 9n, 11n, 3n, 3n, 6n, 11n, 11n, 7n, 6n, 9n, 7n, 8n, 7n, 2n, 9n, 9n, 9n, 9n, 14n, 13n, 15n, 2n, 13n, 12n, 6n, 15n, 14n, 12n, 15n, 10n, 4n, 1n, 10n, 15n, 12n, 10n, 6n, 10n, 4n, 13n, 7n, 5n, 13n, 12n, 6n, 9n, 3n, 13n, 1n, 14n, 11n, 10n, 14n, 3n, 5n, 4n, 10n, 5n, 1n, 7n, 14n, 8n, 10n, 1n, 2n, 13n, 9n, 3n, 13n, 15n, 3n, 8n, 13n, 4n, 11n, 3n]
  ,finProdUnrank(
  [14n, 4n, 14n, 15n, 5n, 11n, 12n, 12n, 6n, 9n, 11n, 3n, 3n, 6n, 11n, 11n, 7n, 6n, 9n, 7n, 8n, 7n, 2n, 9n, 9n, 9n, 9n, 14n, 13n, 15n, 2n, 13n, 12n, 6n, 15n, 14n, 12n, 15n, 10n, 4n, 1n, 10n, 15n, 12n, 10n, 6n, 10n, 4n, 13n, 7n, 5n, 13n, 12n, 6n, 9n, 3n, 13n, 1n, 14n, 11n, 10n, 14n, 3n, 5n, 4n, 10n, 5n, 1n, 7n, 14n, 8n, 10n, 1n, 2n, 13n, 9n, 3n, 13n, 15n, 3n, 8n, 13n, 4n, 11n, 3n]
  ,7497987123442292814877660816785581324777425661091550756630834960938842783n)).toString()
  ).toBe(7497987123442292814877660816785581324777425661091550756630834960938842783n.toString())

  expect(finProdRank(
  [10n, 18n, 32n, 24n, 14n, 13n, 15n, 37n, 16n, 39n, 24n, 30n, 12n, 24n, 27n, 34n, 28n, 40n, 31n, 9n, 9n, 37n, 24n, 4n, 19n, 12n, 12n, 38n, 19n, 16n, 24n, 37n, 33n, 17n, 39n, 2n, 31n, 7n, 39n, 14n, 38n, 2n, 32n, 14n, 33n, 30n, 6n, 19n, 16n, 7n, 14n, 33n]
  ,finProdUnrank(
  [10n, 18n, 32n, 24n, 14n, 13n, 15n, 37n, 16n, 39n, 24n, 30n, 12n, 24n, 27n, 34n, 28n, 40n, 31n, 9n, 9n, 37n, 24n, 4n, 19n, 12n, 12n, 38n, 19n, 16n, 24n, 37n, 33n, 17n, 39n, 2n, 31n, 7n, 39n, 14n, 38n, 2n, 32n, 14n, 33n, 30n, 6n, 19n, 16n, 7n, 14n, 33n]
  ,171993932924914290005316546004093107603739319615652512006168116135n)).toString()
  ).toBe(171993932924914290005316546004093107603739319615652512006168116135n.toString())

  expect(finProdRank(
  [18n, 1n, 2n, 10n, 16n, 1n, 3n, 7n, 11n, 13n, 2n, 13n, 7n, 8n, 7n, 4n, 16n, 10n, 9n, 8n, 15n, 11n, 4n, 10n, 17n, 11n, 16n, 16n, 17n, 11n, 1n, 7n, 11n, 17n, 11n, 8n, 15n, 14n, 13n, 8n, 5n, 14n, 1n, 8n, 4n, 6n, 5n, 3n, 9n, 10n, 7n, 12n, 8n, 12n, 8n, 14n, 1n, 7n, 16n, 15n, 10n, 12n, 13n, 1n, 5n, 14n, 10n, 6n, 14n, 5n, 2n]
  ,finProdUnrank(
  [18n, 1n, 2n, 10n, 16n, 1n, 3n, 7n, 11n, 13n, 2n, 13n, 7n, 8n, 7n, 4n, 16n, 10n, 9n, 8n, 15n, 11n, 4n, 10n, 17n, 11n, 16n, 16n, 17n, 11n, 1n, 7n, 11n, 17n, 11n, 8n, 15n, 14n, 13n, 8n, 5n, 14n, 1n, 8n, 4n, 6n, 5n, 3n, 9n, 10n, 7n, 12n, 8n, 12n, 8n, 14n, 1n, 7n, 16n, 15n, 10n, 12n, 13n, 1n, 5n, 14n, 10n, 6n, 14n, 5n, 2n]
  ,11079250993057837121152473131837804927957554800150542798904003n)).toString()
  ).toBe(11079250993057837121152473131837804927957554800150542798904003n.toString())

  expect(finProdRank(
  [4n, 20n, 2n, 19n, 27n, 28n, 24n, 32n, 41n, 20n, 36n, 5n, 47n, 36n, 38n, 27n, 2n, 6n, 30n, 38n, 32n, 3n, 6n, 10n, 17n, 28n, 3n, 14n, 22n, 30n, 14n, 31n, 37n, 7n, 4n, 25n, 7n, 14n, 47n, 46n, 30n, 28n, 27n, 17n, 32n, 43n, 19n, 19n, 4n, 12n, 1n, 43n, 44n, 22n, 41n, 40n, 45n, 46n, 5n]
  ,finProdUnrank(
  [4n, 20n, 2n, 19n, 27n, 28n, 24n, 32n, 41n, 20n, 36n, 5n, 47n, 36n, 38n, 27n, 2n, 6n, 30n, 38n, 32n, 3n, 6n, 10n, 17n, 28n, 3n, 14n, 22n, 30n, 14n, 31n, 37n, 7n, 4n, 25n, 7n, 14n, 47n, 46n, 30n, 28n, 27n, 17n, 32n, 43n, 19n, 19n, 4n, 12n, 1n, 43n, 44n, 22n, 41n, 40n, 45n, 46n, 5n]
  ,4085560024405619205459288812384698342156078387580013740430499254668277075n)).toString()
  ).toBe(4085560024405619205459288812384698342156078387580013740430499254668277075n.toString())

  expect(finProdRank(
  [14n, 3n, 10n, 22n, 5n, 12n, 11n, 21n, 14n, 6n, 5n, 10n, 16n, 7n, 8n, 2n, 2n]
  ,finProdUnrank(
  [14n, 3n, 10n, 22n, 5n, 12n, 11n, 21n, 14n, 6n, 5n, 10n, 16n, 7n, 8n, 2n, 2n]
  ,94833189634737n)).toString()
  ).toBe(94833189634737n.toString())

  expect(finProdRank(
  [18n, 14n, 23n, 23n, 21n, 14n, 13n, 19n, 20n, 24n, 12n, 2n, 18n, 11n, 9n, 5n, 2n, 19n, 22n, 13n, 2n, 11n, 10n, 5n, 12n, 13n, 18n, 9n, 22n, 25n, 25n, 24n, 14n, 20n, 2n, 22n, 24n, 4n, 19n, 23n, 23n, 11n, 17n, 21n, 22n, 16n]
  ,finProdUnrank(
  [18n, 14n, 23n, 23n, 21n, 14n, 13n, 19n, 20n, 24n, 12n, 2n, 18n, 11n, 9n, 5n, 2n, 19n, 22n, 13n, 2n, 11n, 10n, 5n, 12n, 13n, 18n, 9n, 22n, 25n, 25n, 24n, 14n, 20n, 2n, 22n, 24n, 4n, 19n, 23n, 23n, 11n, 17n, 21n, 22n, 16n]
  ,1344782490336088396512834222808826450226227521563128n)).toString()
  ).toBe(1344782490336088396512834222808826450226227521563128n.toString())

  expect(finProdRank(
  [19n, 28n, 15n, 18n, 23n, 20n, 18n, 10n, 7n, 23n, 19n, 30n, 13n, 24n, 9n, 5n, 31n, 15n, 34n, 24n, 32n, 17n, 11n, 23n, 18n, 21n, 5n, 35n, 36n, 20n, 4n, 19n, 19n, 21n, 26n, 36n, 24n, 6n]
  ,finProdUnrank(
  [19n, 28n, 15n, 18n, 23n, 20n, 18n, 10n, 7n, 23n, 19n, 30n, 13n, 24n, 9n, 5n, 31n, 15n, 34n, 24n, 32n, 17n, 11n, 23n, 18n, 21n, 5n, 35n, 36n, 20n, 4n, 19n, 19n, 21n, 26n, 36n, 24n, 6n]
  ,39213983581494726958528622837147933071319506478n)).toString()
  ).toBe(39213983581494726958528622837147933071319506478n.toString())

  expect(finProdRank(
  [22n, 14n, 13n, 34n, 40n, 40n, 35n, 26n, 15n, 20n, 22n, 26n, 11n, 41n, 4n, 13n, 30n, 26n, 12n, 10n, 37n, 33n, 9n, 18n, 42n, 8n, 8n, 30n, 7n, 17n, 18n]
  ,finProdUnrank(
  [22n, 14n, 13n, 34n, 40n, 40n, 35n, 26n, 15n, 20n, 22n, 26n, 11n, 41n, 4n, 13n, 30n, 26n, 12n, 10n, 37n, 33n, 9n, 18n, 42n, 8n, 8n, 30n, 7n, 17n, 18n]
  ,1046374796386056029607644856942648646233n)).toString()
  ).toBe(1046374796386056029607644856942648646233n.toString())

  expect(finProdRank(
  [3n, 1n, 4n, 1n, 4n, 2n, 2n, 2n, 2n, 2n, 1n, 4n, 3n, 4n, 2n, 3n, 4n, 3n, 2n, 4n, 2n, 1n, 3n, 1n, 4n, 2n, 1n, 4n, 2n, 2n, 4n, 1n, 4n, 2n, 3n, 3n, 2n, 2n, 2n, 3n, 1n, 4n, 1n, 3n, 4n, 2n, 1n, 3n, 4n, 1n, 1n, 2n, 2n, 3n, 4n, 3n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 3n, 1n, 4n, 3n, 4n, 2n, 1n, 4n, 4n, 3n, 1n, 1n, 4n, 1n, 1n, 4n, 3n, 4n, 2n, 2n, 4n, 2n, 1n, 3n, 2n, 3n, 3n, 4n, 2n, 2n, 3n, 2n, 4n, 3n, 4n, 3n, 1n, 2n, 2n, 1n, 2n, 1n, 3n, 1n, 4n, 3n, 4n, 1n, 4n, 1n, 1n, 1n, 2n, 2n, 3n, 3n, 2n, 2n, 4n, 1n, 2n, 4n, 4n, 1n, 4n, 1n, 4n, 4n, 2n, 2n, 1n, 1n, 3n, 1n, 2n]
  ,finProdUnrank(
  [3n, 1n, 4n, 1n, 4n, 2n, 2n, 2n, 2n, 2n, 1n, 4n, 3n, 4n, 2n, 3n, 4n, 3n, 2n, 4n, 2n, 1n, 3n, 1n, 4n, 2n, 1n, 4n, 2n, 2n, 4n, 1n, 4n, 2n, 3n, 3n, 2n, 2n, 2n, 3n, 1n, 4n, 1n, 3n, 4n, 2n, 1n, 3n, 4n, 1n, 1n, 2n, 2n, 3n, 4n, 3n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 3n, 1n, 4n, 3n, 4n, 2n, 1n, 4n, 4n, 3n, 1n, 1n, 4n, 1n, 1n, 4n, 3n, 4n, 2n, 2n, 4n, 2n, 1n, 3n, 2n, 3n, 3n, 4n, 2n, 2n, 3n, 2n, 4n, 3n, 4n, 3n, 1n, 2n, 2n, 1n, 2n, 1n, 3n, 1n, 4n, 3n, 4n, 1n, 4n, 1n, 1n, 1n, 2n, 2n, 3n, 3n, 2n, 2n, 4n, 1n, 2n, 4n, 4n, 1n, 4n, 1n, 4n, 4n, 2n, 2n, 1n, 1n, 3n, 1n, 2n]
  ,232219147322374099944744711011731247399772876n)).toString()
  ).toBe(232219147322374099944744711011731247399772876n.toString())

  expect(finProdRank(
  [7n, 5n, 3n, 4n, 7n, 8n, 11n, 6n, 2n, 8n, 5n, 9n, 2n, 9n, 2n, 11n, 11n, 8n, 2n, 10n, 11n, 7n, 3n, 3n, 7n, 7n, 1n, 10n, 2n, 8n, 11n, 2n, 2n, 6n, 8n, 10n, 10n, 6n, 3n, 2n, 1n, 3n, 10n, 6n, 11n, 10n, 3n, 8n, 4n, 9n, 10n, 4n, 2n, 3n, 4n, 6n, 3n, 1n, 3n, 11n, 2n, 3n, 5n, 6n, 3n, 11n, 2n, 5n, 8n, 9n, 5n, 11n, 6n, 10n, 5n, 2n, 3n, 7n, 3n]
  ,finProdUnrank(
  [7n, 5n, 3n, 4n, 7n, 8n, 11n, 6n, 2n, 8n, 5n, 9n, 2n, 9n, 2n, 11n, 11n, 8n, 2n, 10n, 11n, 7n, 3n, 3n, 7n, 7n, 1n, 10n, 2n, 8n, 11n, 2n, 2n, 6n, 8n, 10n, 10n, 6n, 3n, 2n, 1n, 3n, 10n, 6n, 11n, 10n, 3n, 8n, 4n, 9n, 10n, 4n, 2n, 3n, 4n, 6n, 3n, 1n, 3n, 11n, 2n, 3n, 5n, 6n, 3n, 11n, 2n, 5n, 8n, 9n, 5n, 11n, 6n, 10n, 5n, 2n, 3n, 7n, 3n]
  ,2341925982590708218500752262741991916712695985975621376n)).toString()
  ).toBe(2341925982590708218500752262741991916712695985975621376n.toString())

  expect(finProdRank(
  [10n, 19n, 24n, 34n, 21n, 41n, 29n, 33n, 6n, 19n, 18n, 5n, 38n, 6n, 4n, 18n, 20n, 13n, 35n, 3n, 22n, 19n, 20n, 23n, 10n, 21n, 41n, 25n, 33n, 26n, 31n, 11n, 15n, 18n, 28n, 8n, 8n, 16n, 20n, 37n, 41n, 21n, 27n, 6n, 9n, 9n, 40n, 8n, 15n, 28n, 26n, 2n]
  ,finProdUnrank(
  [10n, 19n, 24n, 34n, 21n, 41n, 29n, 33n, 6n, 19n, 18n, 5n, 38n, 6n, 4n, 18n, 20n, 13n, 35n, 3n, 22n, 19n, 20n, 23n, 10n, 21n, 41n, 25n, 33n, 26n, 31n, 11n, 15n, 18n, 28n, 8n, 8n, 16n, 20n, 37n, 41n, 21n, 27n, 6n, 9n, 9n, 40n, 8n, 15n, 28n, 26n, 2n]
  ,2579619536204774121948460258594241705012773586253757785295420478n)).toString()
  ).toBe(2579619536204774121948460258594241705012773586253757785295420478n.toString())

  expect(finProdRank(
  [41n, 2n, 16n, 1n, 17n, 39n, 41n, 4n, 20n, 25n, 16n, 15n, 12n, 14n, 3n, 25n, 36n, 1n, 3n, 9n, 2n, 40n, 17n, 26n, 32n, 2n, 2n, 23n, 18n, 42n, 24n, 8n, 35n, 18n, 3n, 20n, 32n, 22n, 31n, 21n, 38n, 35n, 7n]
  ,finProdUnrank(
  [41n, 2n, 16n, 1n, 17n, 39n, 41n, 4n, 20n, 25n, 16n, 15n, 12n, 14n, 3n, 25n, 36n, 1n, 3n, 9n, 2n, 40n, 17n, 26n, 32n, 2n, 2n, 23n, 18n, 42n, 24n, 8n, 35n, 18n, 3n, 20n, 32n, 22n, 31n, 21n, 38n, 35n, 7n]
  ,279489118129716203616291786524942645830387101794n)).toString()
  ).toBe(279489118129716203616291786524942645830387101794n.toString())

  expect(finProdRank(
  [9n, 11n, 2n, 3n, 4n, 7n, 9n, 5n, 1n, 8n, 4n, 5n, 8n, 3n, 10n, 6n, 2n, 1n, 4n, 5n, 2n, 6n, 11n, 4n, 5n, 1n, 4n, 7n, 2n, 3n, 7n, 6n, 6n, 10n, 10n, 9n, 11n, 9n, 11n, 7n, 2n, 9n, 11n, 2n, 9n, 3n, 10n, 4n, 8n, 11n, 3n, 6n]
  ,finProdUnrank(
  [9n, 11n, 2n, 3n, 4n, 7n, 9n, 5n, 1n, 8n, 4n, 5n, 8n, 3n, 10n, 6n, 2n, 1n, 4n, 5n, 2n, 6n, 11n, 4n, 5n, 1n, 4n, 7n, 2n, 3n, 7n, 6n, 6n, 10n, 10n, 9n, 11n, 9n, 11n, 7n, 2n, 9n, 11n, 2n, 9n, 3n, 10n, 4n, 8n, 11n, 3n, 6n]
  ,576850959676004314911256705596518717n)).toString()
  ).toBe(576850959676004314911256705596518717n.toString())

  expect(finProdRank(
  [52n, 11n, 6n, 39n, 54n, 27n, 51n, 1n, 29n, 44n, 3n, 24n, 47n, 11n]
  ,finProdUnrank(
  [52n, 11n, 6n, 39n, 54n, 27n, 51n, 1n, 29n, 44n, 3n, 24n, 47n, 11n]
  ,425499490221420509n)).toString()
  ).toBe(425499490221420509n.toString())

  expect(finProdRank(
  [6n, 26n, 9n, 12n, 30n, 20n, 46n, 18n, 49n, 45n, 53n, 51n, 5n, 31n, 10n, 4n, 40n, 16n, 16n, 52n, 43n, 33n, 29n, 19n, 30n, 17n, 44n, 20n, 8n, 16n]
  ,finProdUnrank(
  [6n, 26n, 9n, 12n, 30n, 20n, 46n, 18n, 49n, 45n, 53n, 51n, 5n, 31n, 10n, 4n, 40n, 16n, 16n, 52n, 43n, 33n, 29n, 19n, 30n, 17n, 44n, 20n, 8n, 16n]
  ,1174975909719953708209921385417814369132n)).toString()
  ).toBe(1174975909719953708209921385417814369132n.toString())

  expect(finProdRank(
  [4n, 6n, 2n, 6n, 3n, 4n, 3n, 1n, 6n, 4n, 5n, 2n, 2n, 2n, 3n, 6n, 4n, 3n, 2n, 2n, 5n, 4n, 3n]
  ,finProdUnrank(
  [4n, 6n, 2n, 6n, 3n, 4n, 3n, 1n, 6n, 4n, 5n, 2n, 2n, 2n, 3n, 6n, 4n, 3n, 2n, 2n, 5n, 4n, 3n]
  ,360951475364n)).toString()
  ).toBe(360951475364n.toString())

  expect(finProdRank(
  [46n, 25n, 45n, 13n, 27n, 39n, 32n, 28n, 34n, 4n, 19n, 22n, 20n, 46n, 10n, 26n, 5n, 46n, 34n, 19n, 20n, 22n, 15n, 35n, 15n, 25n, 36n, 42n, 21n, 12n, 32n, 36n]
  ,finProdUnrank(
  [46n, 25n, 45n, 13n, 27n, 39n, 32n, 28n, 34n, 4n, 19n, 22n, 20n, 46n, 10n, 26n, 5n, 46n, 34n, 19n, 20n, 22n, 15n, 35n, 15n, 25n, 36n, 42n, 21n, 12n, 32n, 36n]
  ,15918935297598850964230312734104394159606031n)).toString()
  ).toBe(15918935297598850964230312734104394159606031n.toString())

  expect(finProdRank(
  [26n, 6n, 4n, 3n, 6n, 5n, 28n, 10n, 17n, 27n, 12n, 14n, 15n, 7n, 11n, 9n, 12n, 9n]
  ,finProdUnrank(
  [26n, 6n, 4n, 3n, 6n, 5n, 28n, 10n, 17n, 27n, 12n, 14n, 15n, 7n, 11n, 9n, 12n, 9n]
  ,1029418981811316377n)).toString()
  ).toBe(1029418981811316377n.toString())

  expect(finProdRank(
  [57n, 45n, 20n, 51n, 44n, 16n, 63n, 52n, 6n, 5n, 61n, 54n, 60n, 54n, 12n, 42n, 13n, 2n, 11n, 37n, 14n, 7n, 40n, 19n, 1n, 25n, 48n, 34n, 11n, 8n, 2n, 59n, 24n, 62n, 61n, 62n, 43n, 9n, 40n, 46n]
  ,finProdUnrank(
  [57n, 45n, 20n, 51n, 44n, 16n, 63n, 52n, 6n, 5n, 61n, 54n, 60n, 54n, 12n, 42n, 13n, 2n, 11n, 37n, 14n, 7n, 40n, 19n, 1n, 25n, 48n, 34n, 11n, 8n, 2n, 59n, 24n, 62n, 61n, 62n, 43n, 9n, 40n, 46n]
  ,934163935430898423706746452433245157485969239806434961n)).toString()
  ).toBe(934163935430898423706746452433245157485969239806434961n.toString())

  expect(finProdRank(
  [7n, 11n, 10n, 8n, 6n, 3n, 3n, 11n, 11n, 2n, 9n, 6n, 10n, 8n, 6n, 2n, 10n, 9n, 1n, 5n, 5n, 11n, 9n, 10n, 1n, 9n, 8n, 6n, 7n, 6n, 9n, 6n, 10n, 8n, 9n, 9n, 10n, 10n, 1n, 6n, 4n, 3n, 5n, 9n, 10n, 11n, 8n, 11n, 2n, 1n, 9n, 7n, 10n, 4n, 9n, 6n, 2n, 5n, 1n, 6n, 9n, 2n, 5n, 11n, 11n, 7n, 10n, 10n, 11n, 6n, 8n, 4n, 4n, 2n, 4n, 3n, 1n, 11n, 7n, 2n, 4n, 11n, 4n, 2n, 2n, 10n, 9n, 8n, 4n, 3n]
  ,finProdUnrank(
  [7n, 11n, 10n, 8n, 6n, 3n, 3n, 11n, 11n, 2n, 9n, 6n, 10n, 8n, 6n, 2n, 10n, 9n, 1n, 5n, 5n, 11n, 9n, 10n, 1n, 9n, 8n, 6n, 7n, 6n, 9n, 6n, 10n, 8n, 9n, 9n, 10n, 10n, 1n, 6n, 4n, 3n, 5n, 9n, 10n, 11n, 8n, 11n, 2n, 1n, 9n, 7n, 10n, 4n, 9n, 6n, 2n, 5n, 1n, 6n, 9n, 2n, 5n, 11n, 11n, 7n, 10n, 10n, 11n, 6n, 8n, 4n, 4n, 2n, 4n, 3n, 1n, 11n, 7n, 2n, 4n, 11n, 4n, 2n, 2n, 10n, 9n, 8n, 4n, 3n]
  ,712651040102775935310967322494579487256781502296292642699449764964n)).toString()
  ).toBe(712651040102775935310967322494579487256781502296292642699449764964n.toString())

  expect(finProdRank(
  [2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 2n]
  ,finProdUnrank(
  [2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 2n]
  ,153071747731801727567685889n)).toString()
  ).toBe(153071747731801727567685889n.toString())

  expect(finProdRank(
  [4n, 12n, 4n, 10n, 2n, 5n, 13n, 2n, 6n, 2n, 8n, 11n, 13n, 9n, 13n, 11n, 8n, 1n, 5n, 11n, 3n, 10n, 13n, 5n, 6n, 12n, 1n, 1n, 7n, 11n, 10n, 4n, 10n, 1n, 11n, 9n, 5n]
  ,finProdUnrank(
  [4n, 12n, 4n, 10n, 2n, 5n, 13n, 2n, 6n, 2n, 8n, 11n, 13n, 9n, 13n, 11n, 8n, 1n, 5n, 11n, 3n, 10n, 13n, 5n, 6n, 12n, 1n, 1n, 7n, 11n, 10n, 4n, 10n, 1n, 11n, 9n, 5n]
  ,6763296935055330314943549972n)).toString()
  ).toBe(6763296935055330314943549972n.toString())

  expect(finProdRank(
  [2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 2n]
  ,finProdUnrank(
  [2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 2n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 2n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 2n, 2n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 2n, 2n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 1n, 1n, 2n, 2n, 2n]
  ,19758260382727418359399955187587n)).toString()
  ).toBe(19758260382727418359399955187587n.toString())

  expect(finProdRank(
  [3n, 5n, 3n, 6n, 1n, 2n, 1n, 3n, 7n, 3n, 5n, 5n, 4n, 5n, 8n, 8n, 2n, 4n, 1n, 7n, 7n, 1n, 6n, 5n, 4n, 7n, 1n, 7n, 7n, 2n, 6n, 1n, 4n, 1n, 1n, 4n, 6n, 3n, 8n, 2n, 1n, 7n, 6n, 1n, 4n, 8n, 5n, 5n, 8n, 3n, 4n, 1n, 3n, 4n, 6n, 8n, 5n, 8n, 3n, 4n, 2n, 1n, 1n, 2n, 7n, 8n, 2n, 7n, 7n, 4n, 2n, 7n, 2n, 2n, 6n, 3n, 4n, 3n, 2n, 2n]
  ,finProdUnrank(
  [3n, 5n, 3n, 6n, 1n, 2n, 1n, 3n, 7n, 3n, 5n, 5n, 4n, 5n, 8n, 8n, 2n, 4n, 1n, 7n, 7n, 1n, 6n, 5n, 4n, 7n, 1n, 7n, 7n, 2n, 6n, 1n, 4n, 1n, 1n, 4n, 6n, 3n, 8n, 2n, 1n, 7n, 6n, 1n, 4n, 8n, 5n, 5n, 8n, 3n, 4n, 1n, 3n, 4n, 6n, 8n, 5n, 8n, 3n, 4n, 2n, 1n, 1n, 2n, 7n, 8n, 2n, 7n, 7n, 4n, 2n, 7n, 2n, 2n, 6n, 3n, 4n, 3n, 2n, 2n]
  ,3648291611921514922976791889860685655733225n)).toString()
  ).toBe(3648291611921514922976791889860685655733225n.toString())

  expect(finProdRank(
  [2n, 3n, 12n, 3n, 4n, 20n, 16n, 19n, 7n, 6n, 9n, 8n, 20n, 18n, 11n, 14n, 13n, 9n, 13n, 3n, 8n, 9n, 20n, 14n, 15n, 17n, 1n, 14n, 11n, 17n, 4n, 10n, 17n, 2n]
  ,finProdUnrank(
  [2n, 3n, 12n, 3n, 4n, 20n, 16n, 19n, 7n, 6n, 9n, 8n, 20n, 18n, 11n, 14n, 13n, 9n, 13n, 3n, 8n, 9n, 20n, 14n, 15n, 17n, 1n, 14n, 11n, 17n, 4n, 10n, 17n, 2n]
  ,42185331095872924115054007870241n)).toString()
  ).toBe(42185331095872924115054007870241n.toString())

  expect(finProdRank(
  [17n, 11n, 20n, 5n, 23n, 22n, 19n, 3n, 11n, 19n, 1n, 15n, 22n, 9n, 24n, 22n, 2n, 5n, 13n, 9n, 17n, 12n, 15n, 1n, 9n, 18n, 23n, 14n, 18n, 19n, 1n, 11n, 24n, 1n, 21n, 13n, 23n, 2n, 15n, 6n, 5n, 12n, 1n, 6n, 18n, 13n, 22n, 16n, 4n, 2n]
  ,finProdUnrank(
  [17n, 11n, 20n, 5n, 23n, 22n, 19n, 3n, 11n, 19n, 1n, 15n, 22n, 9n, 24n, 22n, 2n, 5n, 13n, 9n, 17n, 12n, 15n, 1n, 9n, 18n, 23n, 14n, 18n, 19n, 1n, 11n, 24n, 1n, 21n, 13n, 23n, 2n, 15n, 6n, 5n, 12n, 1n, 6n, 18n, 13n, 22n, 16n, 4n, 2n]
  ,654121910999113603218619011095068022872444323487n)).toString()
  ).toBe(654121910999113603218619011095068022872444323487n.toString())

  expect(finProdRank(
  [27n, 9n, 36n, 39n, 1n, 3n, 14n, 7n, 11n, 33n, 16n, 31n, 1n, 25n, 33n, 23n, 34n, 27n, 11n, 27n, 15n, 15n, 22n, 29n, 5n, 31n]
  ,finProdUnrank(
  [27n, 9n, 36n, 39n, 1n, 3n, 14n, 7n, 11n, 33n, 16n, 31n, 1n, 25n, 33n, 23n, 34n, 27n, 11n, 27n, 15n, 15n, 22n, 29n, 5n, 31n]
  ,1701213224027894315767865201875n)).toString()
  ).toBe(1701213224027894315767865201875n.toString())

  expect(finProdRank(
  [6n, 8n, 23n, 38n, 25n, 9n, 12n, 1n, 5n, 10n, 26n, 2n, 19n, 28n, 16n, 28n, 28n, 28n, 27n, 1n, 40n, 23n, 20n, 4n]
  ,finProdUnrank(
  [6n, 8n, 23n, 38n, 25n, 9n, 12n, 1n, 5n, 10n, 26n, 2n, 19n, 28n, 16n, 28n, 28n, 28n, 27n, 1n, 40n, 23n, 20n, 4n]
  ,84181308502267611999263604n)).toString()
  ).toBe(84181308502267611999263604n.toString())

  expect(finProdRank(
  [6n, 2n]
  ,finProdUnrank(
  [6n, 2n]
  ,9n)).toString()
  ).toBe(9n.toString())
})