function powN(base, count) {
  const bb = BigInt(base);

  function multiply(n) {
    if (n == 1) return bb;
    if (n % 2 == 0) {
      let p = multiply(n / 2);
      return p * p;
    }
    return bb * multiply(n - 1);
  }

  return multiply(count);
}

powN(2, 60);
powN(2, 70);
powN(2, 100);
powN(2, 8000);
