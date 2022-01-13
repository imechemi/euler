/* 

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. */

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}


let sum = 0
let i = 2

while (i < 2000000) {
  if (isPrime(i)) {
    console.log(i)
    sum += i
  }
  i++
}

console.log(sum)