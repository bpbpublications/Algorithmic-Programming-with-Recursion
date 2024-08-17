function numOfWays2(n) {
  if (n < 0) return 0;
  if (n == 0) return 1;
  return numOfWays2(n - 1) + numOfWays2(n - 2);
}

numOfWays2(1);
numOfWays2(2);
numOfWays2(3);
numOfWays2(4);
numOfWays2(5);
