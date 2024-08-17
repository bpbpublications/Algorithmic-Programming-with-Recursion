tree = (function () {
  return {
    a: {
      b: {
        e: {},
        f: {
          j: {
            o: {},
            p: {},
          },
          k: {
            q: {
              w: {},
            },
          },
        },
        g: {},
      },
      c: {},
      d: {
        h: {
          l: {
            r: {},
            s: {},
            t: {
              x: {},
              y: {},
            },
          },
          m: {},
        },
        i: {
          n: {
            u: {},
            v: {
              z: {},
            },
          },
        },
      },
    },
  };
})();

function traversePre() {
  const visited = [];

  function visit(name, obj) {
    visited.push(name);
    for (let key in obj) {
      visit(key, obj[key]);
    }
  }

  visit("a", tree.a);
  return visited.join("");
}

traversePre();

traversePre().length;

function traversePost() {
  const visited = [];

  function visit(name, obj) {
    for (let key in obj) {
      visit(key, obj[key]);
    }
    visited.push(name);
  }

  visit("a", tree.a);
  return visited.join("");
}

traversePost();

traversePost().length;

function traversePreReverse() {
  const visited = [];

  function visit(name, object) {
    visited.push(name);

    const children = Object.keys(object).reverse();
    for (let key of children) {
      visit(key, object[key]);
    }
  }

  visit("a", tree.a);
  return visited.join("");
}

traversePreReverse();

function traversePostReverse() {
  const visited = [];

  function visit(name, object) {
    const children = Object.keys(object).reverse();
    for (let key of children) {
      visit(key, object[key]);
    }

    visited.push(name);
  }

  visit("a", tree.a);
  return visited.join("");
}

traversePostReverse();
