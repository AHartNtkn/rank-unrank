import {flLog, clLog} from './bigIntLog.js'

test('Verifying values for < 100 combinations for flLog.', () => {
  for (let i = 2; i < 100; i++) {
  for (let j = 1; j < 100; j++) {
    expect(
      flLog(BigInt(i), BigInt(j)) ).toBe(
      BigInt(Math.floor(Math.log(j)/Math.log(i)))
    )
  }}
})

test('Verifying several large values for flLog.', () => {
  expect(
    flLog(
      438256234875926478936278n,  
      43203401605963427906509734269706974320475908348573480970589347896734923425n)
  ).toBe( 3n )

  expect(
    flLog(
      999342895976892983429786897n,  
      555555555555555555555555555555555555555555555555555555555555n)
  ).toBe( 2n )

  expect(
    flLog(
      2n,  
      99999999999999999999999999999999999999999999999999999999n)
  ).toBe( 186n )
})

test('Verfying values for < 100 combinations for clLog.', () => {
// TODO: Expand beyond base 36
  for (let i = 2; i < 37; i++) {
  for (let j = 1; j < 100; j++) {
    expect(
      clLog(BigInt(i), BigInt(j)) ).toBe(
      BigInt(Math.ceil(Math.log(j)/Math.log(i)))
    )
  }}
})

test('Verifying several large values for clLog.', () => {
// TODO: Uncomment tests
/*
  expect(
    clLog(
      438256234875926478936278n,  
      43203401605963427906509734269706974320475908348573480970589347896734923425n)
  ).toBe( 4n )
*/

/*
  expect(
    clLog(
      999342895976892983429786897n,  
      555555555555555555555555555555555555555555555555555555555555n)
  ).toBe( 3n )
*/

  expect(
    clLog(
      2n,  
      99999999999999999999999999999999999999999999999999999999n)
  ).toBe( 187n )
})
