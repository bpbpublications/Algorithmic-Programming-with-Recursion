function permuteB(n, x) {
  const logs = [];

  function pick(current) {
    if (current.length == x) {
      logs.push(current);
      return;
    }

    for (let i = 0; i < n; i++) {
      //      if (current.includes(i)) continue;
      pick([...current, i]);
    }
  }

  pick([]);
  return logs;
}

permuteB(3, 2);
