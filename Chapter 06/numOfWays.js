function numOfWays(maxSteps, totalStairs) {
  function climb(n) {
    if (n == 0) return 1;

    let res = 0;
    for (let i = 1; i <= maxSteps; i++) {
      if (n - i < 0) continue;
      res = res + climb(n - i);
    }

    return res;
  }

  return climb(totalStairs);
}

numOfWays(2, 3);
numOfWays(3, 4);
