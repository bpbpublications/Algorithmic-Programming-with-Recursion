function findObjectsW(origin) {
  let visited = {};
  let queue = [[origin, null]];
  let objects = [];
  const isOrigin = (p) => on(p, origin);
  const char = ([i, j]) => MAP[i][j];
  const isWall = (p) => char(p) == "#";
  const isObject = (p) => char(p) >= "a" && char(p) <= "z";

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

    if (isObject(current)) {
      let path = assemblePath(current);
      objects.push([char(current), current, path.length]);
      continue;
    }

    for (let dir of DIRS) {
      let next = move(current, dir);
      if (isWall(next)) continue;
      if (visited[next]) continue;

      queue.push([next, current]);
    }
  }

  return objects;
}

findObjectsW([1, 5]);

findObjectsW([1, 4]);
