function numOfWaysM(maxSteps, totalStairs) {
  let mem = {};

  function climb(n) {
    if (n == 0) return 1;
    if (n in mem) return mem[n];

    let res = 0;
    for (let i = 1; i <= maxSteps; i++) {
      if (n - i < 0) continue;
      res = res + climb(n - i);
    }

    mem[n] = res;
    return res;
  }

  return climb(totalStairs);
}

numOfWaysM(2, 40);
numOfWaysM(2, 50);
numOfWaysM(3, 40);
numOfWaysM(10, 50);
