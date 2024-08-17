MAP = `
#################
#    &          #
## ##############
#               #
# ##### ###  ####
#               #
######## ########
#         @     #
#################
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

char = ([i, j]) => MAP[i][j];

isWall = (p) => char(p) == "#";

function findPath(origin, dest) {
  let found = false;
  let visited = {};
  const isWall = (p) => char(p) == "#";
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

    return res.reverse();
  }

  visit(origin, null);

  return assemblePath(visited);
}

findPath([7, 10], [1, 5]);

findPath([7, 10], [3, 15]);
