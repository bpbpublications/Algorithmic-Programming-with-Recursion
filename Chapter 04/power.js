function pow(base, count) {
  function multiply(n) {
    if (n == 1) return base;
    return base * multiply(n - 1);
  }

  return multiply(count);
}

pow(2, 3);
pow(3, 2);
