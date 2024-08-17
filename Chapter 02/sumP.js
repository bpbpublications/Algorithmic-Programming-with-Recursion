M = [0];

function sumP(n) {
  if (n === 0) return 0;
  M[n] = n + sumP(n - 1);
  return M[n];
}

sumP(99);
M;
