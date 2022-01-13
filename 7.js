/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */

const isPrime = (n) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}


let count = 1
let n = 1
while (count <= 10001) {
  n++
  if (isPrime(n)) {
    count += 1
  }

}

console.log(n)