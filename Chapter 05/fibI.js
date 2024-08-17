function fibI(n) {
  let curr = 1n,
    prev = 0n,
    next;
  for (let i = 2; i <= n; i++) {
    next = curr + prev;
    prev = curr;
    curr = next;
  }
  return next;
}

fibI(7000);
