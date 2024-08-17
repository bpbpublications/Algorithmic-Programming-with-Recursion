function numOfWaysP(maxSteps, totalStairs) {
  let m = [1];

  function climb(n) {
    if (n == 0) return 1;
    if (n in m) return m[n];

    let res = 0;
    for (let i = 1; i <= maxSteps; i++) {
      if (n - i < 0) continue;
      res = res + climb(n - i);
    }

    m[n] = res;
    return res;
  }

  climb(totalStairs);
  return m;
}

numOfWaysP(2, 40);
numOfWays(3, 70);
numOfWays(4, 60);
