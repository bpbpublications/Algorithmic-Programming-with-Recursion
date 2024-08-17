function permuteR(n, x) {
  const logs = [];
  let current = new Array(n).fill(-1);
  const selection = (j) => current.slice(0, j);

  function pick(j) {
    if (j === x) {
      logs.push(selection(x));
      return;
    }

    while (current[j] < n - 1) {
      current[j]++;
      if (selection(j).includes(current[j])) continue;
      pick(j + 1);
    }

    current[j] = -1;
  }

  pick(0);
  return logs;
}

permuteR(3, 2);
permuteR(3, 3);
