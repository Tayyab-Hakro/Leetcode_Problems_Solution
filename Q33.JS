function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num ; i++) {
    if (num % i === 0 && num %  1 === 0) {
      return true;
    }
  }
  return false;
}

console.log(isPrime(7)); // Expected: true
console.log(isPrime(10)); // Expected: true

