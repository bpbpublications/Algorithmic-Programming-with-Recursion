function queensT(n) {
  let ways = [];
  let c = 0;

  function place(positions) {
    c++;
    let m = positions.length;

    if (m == n) {
      ways.push(positions);
      return;
    }

    const hasDiagonal = (i) => {
      for (let j = 0; j < m; j++) {
        if (isDiagonal(m, i, j, positions[j])) return true;
      }
      return false;
    };

    for (let i = 0; i < n; i++) {
      if (positions.includes(i)) continue;
      if (hasDiagonal(i)) continue;
      place([...positions, i]);
    }
  }

  place([]);
  return c;
}

queensT(3);
queensT(4);
queensT(5);
queensT(6);
queensT(7);
queensT(8);
queensT(9);
queensT(10);
queensT(11);
queensT(12);
