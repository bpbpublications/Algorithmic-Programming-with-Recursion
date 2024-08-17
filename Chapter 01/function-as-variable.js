function hello4() {
  return 3;
}

world2 = hello4;

world2();

function world3(cb) {
  return cb();
}

world3(hello);
world3(() => {
  return "hello!";
});
