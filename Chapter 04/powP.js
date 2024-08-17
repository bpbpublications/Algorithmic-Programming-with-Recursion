function powP(base, n) {
  const bb = BigInt(base);
  let m = [1n, bb];
  for (let i = 2; i <= n; i++) {
    const res = bb * m[i - 1];
    m.push(res);
  }
  return m;
}

powP(2, 69);

powP(3, 44);

powP(4, 34);
