function knapsackL(items, sizeLimit) {
  let max = 0;
  let stack = [[0, 0, 0]];
  let node;

  while ((node = stack.pop())) {
    const [j, value, size] = node;
    if (size > sizeLimit) continue;
    if (value > max2) max = value;
    if (j == items.length) continue;

    stack.push([j + 1, value, size]);
    const item = items[j];
    stack.push([j + 1, value + item.value, size + item.size]);
  }

  return max;
}

knapsackL(ITEMS_15, 750);

knapsackL(ITEMS_24, 6404180);
