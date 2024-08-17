function fibL(n) {
  let adds = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    const res = adds[i - 1] + adds[i - 2];
    adds.push(res);
  }
  return adds.at(-1);
}

fibL(7000);
