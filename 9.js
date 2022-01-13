/* 

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

const pythagoreanTriplet = (j, k, l) => {
  return ((j * j) + (k * k)) === (l * l)
}

const findPilot = _ => {
  let a = 1
  while (a < 1000) {
    b = 1
    while (b < (1000 - a)) {
      c = 1
      while (c < (1000 - a + b)) {
        if ((a + b + c) === 1000) {
          if (pythagoreanTriplet(a, b, c)) {
            return a * b * c
          }
        }
        c++
      }
      b++
    }
    a++
  }
}


console.log(findPilot())