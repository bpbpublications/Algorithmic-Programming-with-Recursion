DIRS = [
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
  [-1, 0], // up
];

function move([i, j], [di, dj]) {
  return [i + di, j + dj];
}

function paint(map, start) {
  let visited = {};
  const isWall = ([i, j]) => map[i][j] === "#";

  function visit(pos) {
    visited[pos] = true;

    for (let k = 0; k < 4; k++) {
      const next = move(pos, DIRS[k]);
      if (isWall(next)) continue;
      if (visited[next]) continue;

      visit(next);
    }
  }

  visit(start);
  return visited;
}

function plot(map, visited) {
  const m = map.length;
  const n = map[0].length;
  let res = [];

  for (let i = 0; i < m; i++) {
    let line = map[i].split("");
    for (let j = 0; j < n; j++) {
      if (visited[[i, j]]) line[j] = "@";
    }
    res.push(line.join(""));
  }

  return res;
}

data = `
############################
#·##····###······######·#··#
#·##·##·##·····#·#······#··#
#····##·##··#··#·#······#··#
#··#######··################
#·#########·##···###···##··#
#···········####··········##
############################
`;

map = data.split("\n").slice(1, -1);

visited = paint(map, [1, 1]);

painted = plot(map, visited);

plot(map, paint(map, [1, 23]));

plot(map, paint(map, [6, 25]));
