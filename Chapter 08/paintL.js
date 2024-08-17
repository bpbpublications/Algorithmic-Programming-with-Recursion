function paintL(map, start) {
  let visited = {};
  const isWall = ([i, j]) => map[i][j] === "#";
  const stack = [start];
  let current;

  while ((current = stack.pop())) {
    visited[current] = true;

    for (let k = 0; k < 4; k++) {
      const next = move(current, DIRS[k]);
      if (isWall(next)) continue;
      if (visited[next]) continue;

      stack.push(next);
    }
  }

  return visited;
}

plot(map, paintL(map, [1, 1]));
