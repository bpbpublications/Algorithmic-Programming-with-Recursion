function isDiagonal(r, c, r2, c2) {
  let dr = r2 - r;
  let dc = c2 - c;
  return dr == dc || dr == -dc;
}

isDiagonal(1, 1, 3, 3);

isDiagonal(3, 0, 0, 3);

isDiagonal(0, 0, 1, 2);

function queens(n) {
  let ways = [];

  function place(positions) {
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
  return ways;
}

queens(2);
queens(3);
queens(4);
queens(5);
queens(6);
queens(7);
queens(8);

function plot(positions) {
  const n = positions.length;
  const empty = new Array(n).fill("·");
  let res = [];

  for (let i = 0; i < n; i++) {
    let line = empty.slice();
    line[positions[i]] = "Q";
    res.push(line.join(""));
  }

  return res.join("\n");
}

plot([1, 3, 0, 2]);
plot([2, 0, 3, 1]);
plot([0, 4, 7, 5, 2, 6, 1, 3]);
