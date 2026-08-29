// console.log('3' > 1) // true
// console.log('03' > 1) // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null === 0)  // false // this is strict equality
console.log(null >= 0)  // true
 // the reason is comparison works differently as they converts null to a number and treat as 0 thats why null >= 0 is true
