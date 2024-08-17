MAP = `
##########
# a b@ c #
##########
`
  .split("\n")
  .slice(1, -1);

DIRS = [
  [0, 1], // right
  [1, 0], // down
  [-1, 0], // left
  [0, -1], // up
];

function move([i, j], [di, dj]) {
  return [i + di, j + dj];
}

on = ([i, j], [i2, j2]) => i == i2 && j == j2;

function findItems(origin) {
  let visited = {};
  let queue = [[origin, null]];
  let items = [];
  const isOrigin = (p) => on(p, origin);
  const char = ([i, j]) => MAP[i][j];
  const isWall = (p) => char(p) == "#";
  const isItem = (p) => char(p) >= "a" && char(p) <= "z";

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

findItems([1, 5]);
