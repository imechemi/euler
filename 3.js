/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

const isPrime = (n) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const nextPrime = (n) => {
  let found = false

  while (!found) {
    n += 1
    if (isPrime(n)) {
      found = true
    }
  }
  return n
}

const largestPrimeFactor = (num) => {
  let found = 0
  prime = 2
  while (!found) {
    if (isPrime(num)) {
      return num
    }
    if (num % prime == 0) {
      num = num / prime
      prime = 2
    }
    prime = nextPrime(prime)
  }
}

console.log(largestPrimeFactor(13) === 13)
console.log(largestPrimeFactor(26) === 13)
console.log(largestPrimeFactor(600851475143) === 6857)



