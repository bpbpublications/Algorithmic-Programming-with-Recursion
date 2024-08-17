function editDistanceM(a, b) {
  const m = a.length,
    n = b.length;
  let mem = {};

  function minEdits(i, j) {
    if (i == m) return n - j;
    if (j == n) return m - i;
    if (i in mem && j in mem[i]) return mem[i][j];

    let temp;
    if (a[i] == b[j]) {
      temp = minEdits(i + 1, j + 1);
    } else {
      temp =
        Math.min(
          minEdits(i + 1, j),
          minEdits(i + 1, j + 1),
          minEdits(i, j + 1)
        ) + 1;
    }
    mem[i] = mem[i] || {};
    mem[i][j] = temp;
    return temp;
  }

  return minEdits(0, 0);
}

editDistanceM(
  "recursion",
  "I personally like this problem because it looks very hard"
);

editDistanceM(
  "The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.",
  "I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful)."
);
