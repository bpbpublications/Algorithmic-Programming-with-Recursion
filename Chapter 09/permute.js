function permute(n, x) {
  const permutations = [];

  function pick(current) {
    if (current.length == x) {
      permutations.push(current);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (current.includes(i)) continue;
      pick([...current, i]);
    }
  }

  pick([]);
  return permutations;
}

permute(1, 1);
permute(2, 2);
permute(3, 2);
permute(3, 3);
