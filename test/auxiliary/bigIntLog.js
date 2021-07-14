import {flLog, clLog} from '../../auxiliary/bigIntLog.js'

var failure = false

console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*')
console.log('Testing \'/auxiliary/bigIntLog.js\'.')
console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*')




console.log('Verifying values for < 100 combinations for flLog.')

// TODO: Expand beyond base 36
failure = false
for (let i = 2; i < 37; i++) {
    for (let j = 1; j < 100; j++) {
      if(
        flLog(BigInt(i), BigInt(j)) !=
        BigInt(Math.floor(Math.log(j)/Math.log(i)))
      ) {
        failure = true
        console.log('Failed for base', i, 'and argument', j, '.')
        console.log('Should be', BigInt(Math.floor(Math.log(j)/Math.log(i))))
        console.log('Instead is', flLog(BigInt(i), BigInt(j)))
      }
}}

if (failure) {
  console.log('X')
} else {
  console.log('✓')
}
failure = false





console.log('Verifying several large values for flLog.')

// TODO: Uncomment tests
/*
if (
  flLog(
    438256234875926478936278n,  
    43203401605963427906509734269706974320475908348573480970589347896734923425n)
  != 3n
  ) {
    failure = true
    console.log('Failed on test #1.')
  } 

if (
  flLog(
    999342895976892983429786897n,  
    555555555555555555555555555555555555555555555555555555555555n)
  != 2n
  ) {
    failure = true
    console.log('Failed on test #2.')
  } 
*/

if (
  flLog(
    2n,  
    99999999999999999999999999999999999999999999999999999999n)
  != 186n
  ) {
    failure = true
    console.log('Failed on test #3.')
  } 


if (failure) {
  console.log('X')
} else {
  console.log('✓')
}
failure = false





console.log('Verfying values for < 100 combinations for clLog.')

// TODO: Expand beyond base 36
for (let i = 2; i < 37; i++) {
    for (let j = 1; j < 100; j++) {
      if(
        clLog(BigInt(i), BigInt(j)) !=
        BigInt(Math.ceil(Math.log(j)/Math.log(i)))
      ) {
        failure = true
        console.log('Failed for base', i, 'and argument', j, '.')
        console.log('Should be', BigInt(Math.ceil(Math.log(j)/Math.log(i))))
        console.log('Instead is', clLog(BigInt(i), BigInt(j)))
      }
}}

if (failure) {
  console.log('X')
} else {
  console.log('✓')
}
failure = false





console.log('Verifying several large values for clLog.')

// TODO: Uncomment tests
/*
if (
  clLog(
    438256234875926478936278n,  
    43203401605963427906509734269706974320475908348573480970589347896734923425n)
  != 4n
  ) {
    failure = true
    console.log('Failed on test #1.')
  } 

if (
  clLog(
    999342895976892983429786897n,  
    555555555555555555555555555555555555555555555555555555555555n)
  != 3n
  ) {
    failure = true
    console.log('Failed on test #2.')
  } 
*/

if (
  clLog(
    2n,  
    99999999999999999999999999999999999999999999999999999999n)
  != 187n
  ) {
    failure = true
    console.log('Failed on test #3.')
  } 


if (failure) {
  console.log('X')
} else {
  console.log('✓')
}
failure = false





