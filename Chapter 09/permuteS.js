function permuteS(n, x) {
  const permutations = [];
  let current = new Array(n);
  const selection = (j) => current.slice(0, j);

  function pick(j) {
    if (j === x) {
      permutations.push(selection(x));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (selection(j).includes(i)) continue;
      current[j] = i;
      pick(j + 1);
    }
  }

  pick(0);
  return permutations;
}

permuteS(3, 2);

permuteS(3, 3);
