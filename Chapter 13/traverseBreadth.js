function traverseBreadth() {
  const visited = [];
  const queue = [["a", tree.a]];
  let current;

  while ((current = queue.shift())) {
    const [name, obj] = current;
    visited.push(name);

    for (let key in obj) {
      queue.push([key, obj[key]]);
    }
  }

  return visited.join("");
}

traverseBreadth(tree);
