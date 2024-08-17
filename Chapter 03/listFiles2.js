STORAGES2 = [
  ["1.pic", "2.pic"],
  ["1.mov", "2.mov", "3.mov"],
];

function listFiles2() {
  let files = [];
  let folders1 = STORAGES2;
  for (let i = 0; i < folders1.length; i++) {
    let files2 = folders1[i];
    for (let j = 0; j < files2.length; j++) {
      files.push(files2[j]);
    }
  }
  return files;
}

listFiles2();
