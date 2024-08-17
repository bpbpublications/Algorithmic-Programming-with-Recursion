function fibP(n) {
  let adds = [0, 1];
  for (let i = 2; i <= n; i++) {
    const res = adds[i - 1] + adds[i - 2];
    adds.push(res);
  }
  return adds;
}

fibP(102);
