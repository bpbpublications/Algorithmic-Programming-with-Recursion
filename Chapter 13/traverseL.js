function traverseL() {
  const visited = [];
  const stack = [["a", tree.a]];
  let current;

  while ((current = stack.pop())) {
    const [name, obj] = current;
    visited.push(name);

    for (let key in obj) {
      stack.push([key, obj[key]]);
    }
  }

  return visited.join("");
}
