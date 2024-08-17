function powS(base, count) {
  function multiply(n) {
    if (n == 1) return base;
    if (n % 2 == 0) {
      let p = multiply(n / 2);
      return p * p;
    }
    return base * multiply(n - 1);
  }

  return multiply(count);
}

powS(2, 10);
powS(2, 20);
powS(2, 30);
powS(2, 40);
powS(2, 50);
powS(2, 60);
powS(2, 70);
