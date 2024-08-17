function knapsackR(items, sizeLimit) {
  function solve(n, size) {
    if (n == 0) return 0;
    if (size == 0) return 0;

    const skipValue = solve(n - 1, size);
    const item = items[n - 1];
    let selectValue = skipValue;
    if (size >= item.size) {
      selectValue = item.value + solve(n - 1, size - item.size);
    }

    return Math.max(skipValue, selectValue);
  }

  return solve(items.length, sizeLimit);
}

knapsackR(ITEMS, 12);

knapsackR(ITEMS_15, 750);

knapsackR(ITEMS_24, 6404180);
