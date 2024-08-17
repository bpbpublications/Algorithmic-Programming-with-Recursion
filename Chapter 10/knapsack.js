ITEMS = [
  { value: 1, size: 1 },
  { value: 6, size: 2 },
  { value: 10, size: 3 },
  { value: 16, size: 5 },
];

function knapsack(items, sizeLimit) {
  let max = { value: 0, selection: [] };

  function pick(selection, size, value) {
    if (value > max.value) {
      max = { value, selection };
    }
    const n = selection.length;
    if (n == items.length) return;

    pick([...selection, 0], size, value);
    const item = items[n];
    if (size + item.size <= sizeLimit) {
      pick([...selection, 1], size + item.size, value + item.value);
    }
  }

  pick([], 0, 0);
  return [max.value, max.selection];
}

knapsack(ITEMS, 1);
knapsack(ITEMS, 2);
knapsack(ITEMS, 3);
knapsack(ITEMS, 4);
knapsack(ITEMS, 5);
knapsack(ITEMS, 6);
knapsack(ITEMS, 7);
knapsack(ITEMS, 8);
knapsack(ITEMS, 9);
knapsack(ITEMS, 10);
knapsack(ITEMS, 11);
knapsack(ITEMS, 12);

ITEMS_15 = [
  { value: 135, size: 70 },
  { value: 139, size: 73 },
  { value: 149, size: 77 },
  { value: 150, size: 80 },
  { value: 156, size: 82 },
  { value: 163, size: 87 },
  { value: 173, size: 90 },
  { value: 184, size: 94 },
  { value: 192, size: 98 },
  { value: 201, size: 106 },
  { value: 210, size: 110 },
  { value: 214, size: 113 },
  { value: 221, size: 115 },
  { value: 229, size: 118 },
  { value: 240, size: 120 },
];

RESULT_15 = knapsack(ITEMS_15, 750);

count(RESULT_15[1]);

function selection(arr, items) {
  return arr.reduce((acc, v, i) => {
    if (v) acc.push(items[i]);
    return acc;
  }, []);
}

selection(RESULT_15[1], ITEMS_15);

ITEMS_24 = [
  { value: 825594, size: 382745 },
  { value: 1677009, size: 799601 },
  { value: 1676628, size: 909247 },
  { value: 1523970, size: 729069 },
  { value: 943972, size: 467902 },
  { value: 97426, size: 44328 },
  { value: 69666, size: 34610 },
  { value: 1296457, size: 698150 },
  { value: 1679693, size: 823460 },
  { value: 1902996, size: 903959 },
  { value: 1844992, size: 853665 },
  { value: 1049289, size: 551830 },
  { value: 1252836, size: 610856 },
  { value: 1319836, size: 670702 },
  { value: 953277, size: 488960 },
  { value: 2067538, size: 951111 },
  { value: 675367, size: 323046 },
  { value: 853655, size: 446298 },
  { value: 1826027, size: 931161 },
  { value: 65731, size: 31385 },
  { value: 901489, size: 496951 },
  { value: 577243, size: 264724 },
  { value: 466257, size: 224916 },
  { value: 369261, size: 169684 },
];

RESULT_24 = knapsack(ITEMS_24, 6404180);

count(RESULT_24[1]);

selection(RESULT_24[1], ITEMS_24);
