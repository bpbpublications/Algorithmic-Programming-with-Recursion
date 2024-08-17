function knapsackD(items, size) {
  const n = items.length;
  const m = new Array(n + 1).fill(0).map((v) => new Array(size + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const item = items[i - 1];
    for (let j = 1; j <= size; j++) {
      const skipValue = m[i - 1][j];
      const k = j - item.size;
      if (k < 0) {
        m[i][j] = skipValue;
      } else {
        const selectValue = m[i - 1][k] + item.value;
        m[i][j] = Math.max(skipValue, selectValue);
      }
    }
  }

  return m[n][size];
}

knapsackD(ITEMS_15, 750);

knapsackD(ITEMS_24, 6404180);
