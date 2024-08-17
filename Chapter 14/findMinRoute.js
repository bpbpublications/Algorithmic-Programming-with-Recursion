function findItemsM(map, origin, collected) {
  let visited = {};
  let queue = [[origin, null]];
  let objects = [];
  const isOrigin = (p) => on(p, origin);
  const char = ([i, j]) => map[i][j];
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

function findMinRoute(map, origin) {
  let minCollected,
    minDist = Infinity;

  function visit(current, distance, collected) {
    const items = findItemsM(map, current, collected);
    if (items.length == 0) {
      if (distance < minDist) {
        minDist = distance;
        minCollected = collected;
      }
      return;
    }

    for (let [name, pos, steps] of items) {
      visit(pos, distance + steps, collected + name);
    }
  }

  visit(origin, 0, "");
  return [minDist, minCollected];
}

findMinRoute(MAP, [1, 5]);

MAP2 = `
##################
# a  @        d  #
### ##############
#   e     b    c #
##################
`
  .split("\n")
  .slice(1, -1);

findMinRoute(MAP2, [1, 5]);

MAP3 = `
########################
#    @a   b           d#
### # # ##  ### ########
#h# # # ##  ### ######e#
#   #g#f##   c#        #
########################
`
  .split("\n")
  .slice(1, -1);

findMinRoute(MAP3, [1, 5]);
