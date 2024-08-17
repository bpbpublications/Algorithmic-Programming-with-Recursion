function traverseR() {
  const visited = [];
  const stack = [["a", tree.a]];
  let current;

  while ((current = stack.pop())) {
    const [name, obj] = current;
    visited.push(name);

    const children = Object.keys(obj).reverse();
    for (let key of children) {
      stack.push([key, obj[key]]);
    }
  }

  return visited.join("");
}
