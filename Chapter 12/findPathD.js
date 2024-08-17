DIRS2 = [
  [0, -1], // left
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
];

function findPathD(origin, dest, DIRS) {
  let found = false;
  let visited = {};
  const isDest = (p) => on(p, dest);
  const isOrigin = (p) => on(p, origin);

  function visit(current, prev) {
    if (found) return;

    visited[current] = prev;

    if (isDest(current)) {
      found = true;
      return;
    }

    for (let dir of DIRS) {
      let next = move(current, dir);
      if (isWall(next)) continue;
      if (visited[next]) continue;

      visit(next, current);
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

  visit(origin, null);

  return assemblePath(visited).reverse();
}

findPathD([7, 10], [1, 5], DIRS2);

findPathD([7, 10], [3, 15], DIRS2);
