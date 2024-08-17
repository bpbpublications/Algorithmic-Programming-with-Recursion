function factN(n) {
  if (n == 1) return 1n;
  return BigInt(n) * BigInt(fact(n - 1));
}

factN(21);
factN(22);
factN(30);
factN(100);
