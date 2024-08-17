STORAGES3 = [
  [["1.pic"], "2.pic"],
  ["1.mov", ["2.mov", "3.mov"]],
];

function listFiles3() {
  let files = [];
  let folders1 = STORAGES3;
  for (let i = 0; i < folders1.length; i++) {
    let foldersOrFiles2 = folders1[i];
    for (let j = 0; j < foldersOrFiles2.length; j++) {
      if (typeof foldersOrFiles2[j] == "string") {
        files.push(foldersOrFiles2[j]);
      } else {
        let files3 = foldersOrFiles2[j];
        for (let k = 0; k < files3.length; k++) {
          files.push(files3[k]);
        }
      }
    }
  }
  return files;
}

listFiles3();
