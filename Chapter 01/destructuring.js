function hello5() {
  const [a, b] = [2, 3];
  return [a, b];
}

hello5();

function hello6([i, j]) {
  return [i, j];
}

hello6([2, 3]);

function hello7({ value }) {
  return value;
}

hello7({ value: 8 });
