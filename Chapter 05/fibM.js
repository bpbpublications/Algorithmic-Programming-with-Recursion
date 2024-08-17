function fibM(n) {
  let m = { 0: 0, 1: 1 };

  function add(n) {
    if (n in m) return m[n];
    m[n] = add(n - 1) + add(n - 2);
    return m[n];
  }

  return add(n);
}

fibM(50);
fibM(100);
fibM(200);
