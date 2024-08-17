function editDistance(a, b) {
  const m = a.length,
    n = b.length;

  function minEdits(i, j) {
    if (i == m) return n - j;
    if (j == n) return m - i;

    if (a[i] == b[j]) {
      return minEdits(i + 1, j + 1);
    } else {
      return (
        Math.min(
          minEdits(i + 1, j),
          minEdits(i + 1, j + 1),
          minEdits(i, j + 1)
        ) + 1
      );
    }
  }

  return minEdits(0, 0);
}

editDistance("cat", "cat");
editDistance("horse", "ros");
editDistance("recursion", "iteration");
