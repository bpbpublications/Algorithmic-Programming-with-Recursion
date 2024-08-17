function editDistanceL(a, b) {
  const m = a.length,
    n = b.length;
  let minEdits = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = m; i >= 0; i--) {
    minEdits[i][n] = m - i;
  }
  for (let j = n; j >= 0; j--) {
    minEdits[m][j] = n - j;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (a[i] == b[j]) {
        minEdits[i][j] = minEdits[i + 1][j + 1];
      } else {
        minEdits[i][j] =
          Math.min(
            minEdits[i + 1][j],
            minEdits[i + 1][j + 1],
            minEdits[i][j + 1]
          ) + 1;
      }
    }
  }

  return minEdits[0][0];
}

editDistanceL(
  "The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.",
  "I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful)."
);

editDistanceL(
  "The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.The size of each problem can vary. Be careful when you are using letter `n`, because it can be used already for other purpose.",
  "I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful).I personally like this problem because it looks very hard, yet the solution is surprisingly simple and beautiful. Though its a rare algorithm, its is very useful (yech, I recognize that many algorithm problems are not very useful)."
);
