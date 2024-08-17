function findPathM(origin, dest, MAP) {
  let visited = {};
  const char = ([i, j]) => MAP[i][j];
  const isWall = (p) => char(p) == "#";
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
      visit(next, current);
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
  visit(origin, null);
  return paths;
}

MAP2 = `
#####
#&  #
#   #
#  @#
#####
`
  .split("\n")
  .slice(1, -1);

findPathM([3, 3], [1, 1], MAP2);

MAP3 = `
#################
#&              #
#              @#
#################
`
  .split("\n")
  .slice(1, -1);

findPathM([2, 15], [1, 1], MAP3);

MAP4 = `
#########
#&      #
#       #
#   @   #
#       #
#       #1
#########
`
  .split("\n")
  .slice(1, -1);

findPathM([3, 4], [1, 1], MAP4);
