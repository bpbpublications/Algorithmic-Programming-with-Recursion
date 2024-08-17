function factI(n) {
  let res = 1;

  for (let i = 1; i <= n; i++) {
    res = res * i;
  }

  return res;
}

factI(5);
