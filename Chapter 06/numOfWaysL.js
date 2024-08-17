function numOfWaysL(maxSteps, totalStairs) {
  let climbs = [1n];
  for (let n = 1; n <= totalStairs; n++) {
    let res = 0n;
    for (let i = 1; i <= maxSteps; i++) {
      if (n - i < 0) continue;
      res = res + climbs[n - i];
    }
    climbs.push(res);
  }

  return climbs.at(-1);
}

numOfWaysL(10, 10000);
