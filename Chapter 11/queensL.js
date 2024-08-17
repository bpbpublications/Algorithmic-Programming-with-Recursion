function queensL(n) {
  const ways = [];
  const stack = [[[], {}, {}, {}]];
  let current;

  while ((current = stack.pop())) {
    const [positions, col, left, right] = current;
    let m = positions.length;

    if (m == n) {
      ways.push(positions);
      continue;
    }

    for (let i = 0; i < n; i++) {
      if (col[i]) continue;
      if (left[m + i]) continue;
      if (right[m - i]) continue;

      stack.push([
        [...positions, i],
        { ...col, [i]: true },
        { ...left, [m + i]: true },
        { ...right, [m - i]: true },
      ]);
    }
  }

  return ways;
}

queensL(5);
queensL(6);
queensL(7);
queensL(8);
