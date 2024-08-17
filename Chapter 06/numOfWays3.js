function numOfWays3(n) {
  if (n == 0) return 1;

  let res = 0;
  for (let i = 1; i <= 3; i++) {
    if (n - i < 0) continue;
    res = res + numOfWays3(n - i);
  }

  return res;
}

numOfWays3(3);
numOfWays3(4);
numOfWays3(5);
