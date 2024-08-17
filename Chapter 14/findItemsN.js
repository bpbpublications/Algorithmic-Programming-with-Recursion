function findItemsN(origin, collected) {
  let visited = {};
  let queue = [[origin, null]];
  let items = [];
  const isOrigin = (p) => on(p, origin);
  const char = ([i, j]) => MAP[i][j];
  const isWall = (p) => char(p) == "#";
  const isItem = (p) => {
    const c = char(p);
    return c >= "a" && c <= "z" && !collected.includes(c);
  };

  function assemblePath(dest) {
    let p = dest;
    const res = [p];

    while ((p = visited[p])) {
      if (isOrigin(p)) break;
      res.push(p);
    }

    return res.reverse();
  }

  while (queue.length) {
    let [current, parent] = queue.shift();
    visited[current] = parent;

    if (isItem(current)) {
      let path = assemblePath(current);
      items.push([char(current), current, path.length]);
      continue;
    }

    for (let dir of DIRS) {
      let next = move(current, dir);
      if (isWall(next)) continue;
      if (visited[next]) continue;

      queue.push([next, current]);
    }
  }

  return items;
}

findItemsN([1, 4], "b");

findItemsN([1, 2], "ba");

findItemsN([1, 7], "bac");
