/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */


const isEvenlyDivisble = (num) => {
  let i = 1
  while (i <= 20) {
    if (num % i !== 0) {
      return false
    }
    i++
  }
  return true
}

let found = false
let num = 1

while (!found) {
  if (isEvenlyDivisble(num)) {
    console.log(num)
    found = true
  }
  num++
}