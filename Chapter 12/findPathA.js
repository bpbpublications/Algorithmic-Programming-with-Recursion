function findPathA(origin, dest) {
  let visited = {};
  const isDest = (p) => on(p, dest);
  const isOrigin = (p) => on(p, origin);
  const paths = [];

  function visit(current) {
    if (isDest(current)) {
      paths.push(assemblePath(visited));
      return;
    }

    for (let dir of DIRS) {
      let next = move(current, dir);
      if (isWall(next)) continue;
      if (visited[next]) continue;

      visited[next] = current;
      visit(next);
      visited[next] = null;
    }
  }

  function assemblePath(visited) {
    let p = dest;
    const res = [p];

    while ((p = visited[p])) {
      if (isOrigin(p)) break;
      res.push(p);
    }

    return res.reverse();
  }

  visited[origin] = true;
  visit(origin);
  return paths;
}

findPathA([7, 10], [7, 5]);

findPathA([7, 10], [1, 5]);

findPathA([7, 10], [3, 15]);
