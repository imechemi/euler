

for (let n = 0; n < 100; n++) {

  let j = 2; 
  let isPrime = true;

  while (j < n) {
    if (n % j == 0) {
      isPrime = false;
    }
    j++
  }

  if (isPrime) {
    console.log(`${n}`)
  }
}