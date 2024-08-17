function sum(n) {
  if (n == 0) return 0;
  return sum(n - 1) + n;
}

sum(1);
sum(2);
sum(3);
sum(4);
sum(5);
