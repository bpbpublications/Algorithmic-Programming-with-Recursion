function findMinRouteR(map, origin) {
  function minDistance(collected, current) {
    const items = findItemsM(map, current, collected);
    if (items.length == 0) return 0;

    let distances = [];
    for (let [item, itemPos, itemSteps] of items) {
      distances.push(itemSteps + minDistance(collected + item, itemPos));
    }

    return Math.min(...distances);
  }

  return minDistance("", origin);
}

findMinRouteR(MAP, [1, 5]);

findMinRouteR(MAP2, [1, 5]);

findMinRouteR(MAP3, [1, 5]);
