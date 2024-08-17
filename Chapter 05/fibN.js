function fibN(n) {
  let m = { 0: 0n, 1: 1n };

  function add(n) {
    if (n in m) return m[n];
    m[n] = add(n - 1) + add(n - 2);
    return m[n];
  }

  return add(n);
}

fibN(50);
fibN(100);
fibN(200);
fibN(2000);
fibN(3000);
fibN(4000);
fibN(5000);
fibN(6000);
