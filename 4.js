/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

const isPalindrome = (num) => {
  let str = num.toString()
  let n = str.length
  let i = 0
  let j = n - 1

  while (i < j) {
    if (str[i++] !== str[j--]) {
      return false
    }
  }
  return true
}

const largestPalindrome = _ => {
  let largest = 0
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      product = i * j
      if (isPalindrome(product) && (product > largest)) {
        largest = product
      }
    }
  }
  return largest
}

console.log(largestPalindrome())

