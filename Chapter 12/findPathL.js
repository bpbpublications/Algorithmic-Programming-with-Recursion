function findPathL(origin, dest) {
  let found = false;
  let visited = {};
  const isDest = (p) => on(p, dest);
  const isOrigin = (p) => on(p, origin);
  let stack = [[origin, null]];
  let current, prev;

  while (([current, prev] = stack.pop())) {
    visited[current] = prev;

    if (isDest(current)) break;

    for (let dir of [...DIRS].reverse()) {
      let next = move(current, dir);
      if (isWall(next)) continue;
      if (visited[next]) continue;

      stack.push([next, current]);
    }
  }

  function assemblePath(visited) {
    let p = dest;
    const res = [p];

    while ((p = visited[p])) {
      if (isOrigin(p)) break;
      res.push(p);
    }

    return res;
  }

  return assemblePath(visited).reverse();
}

findPathL([7, 10], [1, 5]);
