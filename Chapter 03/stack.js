stack = [];
stack.push("a");
stack;
stack.push("b");
stack;
stack.push("c");
stack;
stack.pop();
stack.pop();
stack.pop();
stack.pop();

function sumOverflow(n) {
  return n + sumOverflow(n - 1);
}

sumOverflow(5);
