function numOfWaysN(maxSteps, totalStairs) {
  let mem = {};

  function climb(n) {
    if (n == 0) return 1n;
    if (n in mem) return mem[n];

    let sum = 0n;
    for (let i = 1; i <= maxSteps; i++) {
      if (n < i) continue;
      sum += climb(n - i);
    }

    mem[n] = sum;
    return sum;
  }

  return climb(totalStairs);
}

numOfWaysN(2, 100);
numOfWaysN(3, 100);
numOfWaysN(4, 100);
