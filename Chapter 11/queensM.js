function queensM(n) {
  const ways = [];
  const col = {};
  const left = {};
  const right = {};

  function place(positions) {
    let m = positions.length;

    if (m == n) {
      ways.push(positions);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (col[i]) continue;
      if (left[m + i]) continue;
      if (right[m - i]) continue;

      col[i] = true;
      left[m + i] = true;
      right[m - i] = true;

      place([...positions, i]);

      col[i] = false;
      left[m + i] = false;
      right[m - i] = false;
    }
  }

  place([]);
  return ways;
}

queensM(8);
queensM(12);
