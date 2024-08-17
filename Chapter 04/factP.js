function factP(n) {
  let m = [1n, 1n];
  for (let i = 2; i <= n; i++) {
    const res = BigInt(i) * m[i - 1];
    m.push(res);
  }
  return m;
}

factP(20);
