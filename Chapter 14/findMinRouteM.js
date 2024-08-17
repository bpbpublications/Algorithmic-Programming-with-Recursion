function key(str) {
  return str.slice(0, -1).split("").sort().join("") + str[str.length - 1];
}

function findMinRouteM(map, start) {
  const m = {};

  function minDistance(collected, current) {
    const items = findItemsM(map, current, collected);
    if (items.length == 0) return 0;

    const k = key(collected);
    if (k in m) return m[k];

    let distances = [];
    for (let [item, itemPos, itemDist] of items) {
      distances.push(itemDist + minDistance(collected + item, itemPos));
    }

    m[k] = Math.min(...distances);
    return m[k];
  }

  return minDistance("", start);
}

findMinRouteM(MAP, [1, 5]);

findMinRouteM(MAP2, [1, 5]);

findMinRouteM(MAP3, [1, 5]);

MAP4 = `
#################
#i. ..c...e.. .p#
########.########
#j. ..b...f.. .o#
########@########
#k. ..a...g.. .n#
########.########
#l. ..d...h.. .m#
#################
`
  .split("\n")
  .slice(1, -1);

findMinRouteM(MAP4, [4, 8]);
