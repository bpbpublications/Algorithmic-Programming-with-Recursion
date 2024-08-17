function knapsackM(items, sizeLimit) {
  const m = {};

  function solve(n, size) {
    if (n == 0) return 0;
    if (size == 0) return 0;

    const key = [n, size].join("-");
    if (key in m) return m[key];

    const skipValue = solve(n - 1, size);
    const item = items[n - 1];
    let selectValue = skipValue;
    if (size >= item.size) {
      selectValue = item.value + solve(n - 1, size - item.size);
    }

    m[key] = Math.max(skipValue, selectValue);
    return m[key];
  }

  return solve(items.length, sizeLimit);
}

knapsackM(ITEMS, 12);

knapsackM(ITEMS_15, 750);
