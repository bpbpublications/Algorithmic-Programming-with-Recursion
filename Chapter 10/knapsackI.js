function knapsackI(items, sizeLimit) {
  let max = { value: 0, selection: [] };
  let selection = new Array(items.length).fill(0);

  function pick(j, value, size) {
    if (size > sizeLimit) return;
    if (value > max.value) {
      max = { value, selection: [...selection] };
    }
    if (j == items.length) return;

    selection[j] = 0;
    pick(j + 1, value, size);
    selection[j] = 1;
    const item = items[j];
    pick(j + 1, value + item.value, size + item.size);
    selection[j] = 0;
  }

  pick(0, 0, 0);
  return [max.value, max.selection];
}

knapsackI(ITEMS_15, 750);

knapsackI(ITEMS_24, 6404180);
