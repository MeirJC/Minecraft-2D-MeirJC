let gridHeight = 15; // like i
let gridWidth = 20; // like j
//basic arr width(j)/heigt(i) with "" values
let worldArr = [];
for (let i = 0; i < gridHeight; i++) {
  worldArr.push([]);
  for (let j = 0; j < gridWidth; j++) {
    worldArr[i].push("");
  }
}
// console.table(worldArr);

// let world1 = [...worldArr];
// for (let i = 0; i < gridHeight; i++) {
//   for (let j = 0; j < gridWidth; j++) {
//     if (i > 10) {
//       world1[i][j] = "soil";
//     }
//     if (i === 10) {
//       world1[i][j] = "grass";
//     }
//     for (let k = 0; k < i - 4; k++) {
//       if (i < 10 && i > 4 && j >= 0 && j < 5) {
//         world1[i][0 + k] = "rock";
//       }
//     }
//     if (i < 10 && i > 6 && j === 12) {
//       world1[i][j] = "tree-buttom";
//     }
//     for (let k = 0; k < i - 1; k++) {
//       if (i < 7 && i > 1 && j === 12) {
//         world1[i][12] = "tree-top";
//         world1[i][12 + k] = "tree-top";
//         world1[i][12 - k] = "tree-top";
//       }
//     }
//     for (let k = 0; k < i; k++) {
//       if (i < 4 && i > 0 && j == 4) {
//         world1[i][4 + k] = "cloud";
//         world1[i][5 + (k % 2)] = "cloud";
//         world1[i][3 - (k % 2)] = "cloud";
//       }
//     }
//   }
// }

// console.table(world1);

//world 2
// let world2 = [...worldArr];

// for (let i = 0; i < gridHeight; i++) {
//   for (let j = 0; j < gridWidth; j++) {
//     if (i > 11) {
//       world2[i][j] = "soil";
//     }
//     if (i === 11) {
//       world2[i][j] = "grass";
//     }
//     for (let k = 0; k < i - 5; k++) {
//       if (i < 11 && i > 5 && j === 7) {
//         world2[i][7] = "rock";
//         world2[i][7 + k] = "rock";
//         world2[i][7 - k] = "rock";
//       }
//     }
//     if (i < 11 && i > 6 && j > 14 && j < 17) {
//       world2[i][j] = "tree-buttom";
//     }
//     if (i < 7 && i > 1 && j > 12 && j < 19) {
//       world2[i][j] = "tree-top";
//     }
//     if (
//       (i < 4 && i > 0 && j > 0 && j < 4) ||
//       (i < 3 && i > 0 && j > 3 && j < 6) ||
//       (i === 1 && j === 6)
//     ) {
//       world2[i][j] = "cloud";
//     }
//   }
// }

// console.table(world2);

let world3 = [...worldArr];

for (let i = 0; i < gridHeight; i++) {
  for (let j = 0; j < gridWidth; j++) {
    for (let k = 0; k < i - 2; k++) {
      if (i < 15 && i > 2 && j < 20) {
        world3[i][19 - k] = "grass";
      }
    }

    for (let k = 0; k < i - 3; k++) {
      if (i < 15 && i > 3 && j < 20) {
        world3[i][19 - k] = "soil";
      }
    }

    for (let k = 0; k < i - 2; k++) {
      if (i < 15 && i > 2 && j >= 0) {
        world3[i][0 + k] = "rock";
      }
    }

    if (i < 12 && i > 6 && j === 10) {
      world3[i][j] = "tree-buttom";
    }
    if (
      (i < 8 && i > 5 && j > 8 && j < 12) ||
      (i < 6 && i > 3 && j > 7 && j < 13)
    ) {
      world3[i][j] = "tree-top";
    }
    if (
      (i < 4 && i > 0 && j > 3 && j < 7) ||
      (i === 2 && j === 7) ||
      (i === 2 && j === 3)
    ) {
      world3[i][j] = "cloud";
    }
  }
}

console.table(world3);

// let world4 = [...worldArr];

// for (let i = 0; i < gridHeight; i++) {
//   for (let j = 0; j < gridWidth; j++) {
//     for (let k = 0; k < i - 5; k++) {
//       if (i < 15 && i > 6 && j === 9) {
//         world4[i][9] = "grass";
//         world4[i][9 + k] = "grass";
//         world4[i][9 - k] = "grass";
//       }
//     }

//     for (let k = 0; k < i - 6; k++) {
//       if (i < 15 && i > 7 && j === 9) {
//         world4[i][9] = "soil";
//         world4[i][9 + k] = "soil";
//         world4[i][9 - k] = "soil";
//       }
//     }

//     if (
//       (i > 12 && (j === 0 || j > 17)) ||
//       (i === 13 && (j === 1 || j === 17))
//     ) {
//       world4[i][j] = "rock";
//     }

//     if (i < 7 && i > 4 && j === 9) {
//       world4[i][j] = "tree-buttom";
//     }
//     if (i < 5 && i > 1 && j > 7 && j < 11) {
//       world4[i][j] = "tree-top";
//     }
//     if (
//       (i < 4 && i > 0 && j > 1 && j < 5) ||
//       (i === 2 && j === 5) ||
//       (i === 2 && j === 1)
//     ) {
//       world4[i][j] = "cloud";
//     }
//     if (
//       (i < 4 && i > 0 && j > 13 && j < 18) ||
//       (i === 2 && j === 18) ||
//       (i === 2 && j === 13)
//     ) {
//       world4[i][j] = "cloud";
//     }
//   }
// }

// console.table(world4);
