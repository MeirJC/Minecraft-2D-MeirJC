let gridHeight = 15; // like i
let gridWidth = 20; // like j
//basic arr width(j)/heigt(i) with "" values
let baseAraay = []
for (let i = 0; i < gridHeight; i++) {
  baseAraay.push([])
  for (let j = 0; j < gridWidth; j++) {
    baseAraay[i].push("")
  }
}
console.table(baseAraay)

let world1 = [...baseAraay]
for (let i = 0; i < gridHeight; i++) {
  for (let j = 0; j < gridWidth; j++) {
    if (i > 10) {
      world1[i][j] = "soil"
    }
    if (i === 10) {
      world1[i][j] = "grass"
    }
    for (let k = 0; k < i - 4; k++) {
      if (i < 10 && i > 4 && j >= 0 && j < 5) {
        world1[i][0 + k] = "rock"
      }
    }
    if (i < 10 && i > 6 && j === 12) {
      world1[i][j] = "tree-buttom"
    }
    for (let k = 0; k < i-1; k++) {
      if (i < 7 && i > 1 && j ===12){
        world1[i][12] = "tree-top";
        world1[i][12+k] = "tree-top";
        world1[i][12-k] = "tree-top";
      }
    }
    for (let k = 0; k < i; k++) {
      if (i < 4 && i > 0 && j==4){
        world1[i][4+k] = "cloud";
        world1[i][5+(k%2)] = "cloud";
        world1[i][3-(k%2)] = "cloud";
      }
    }
  }
}

console.table(world1)


//world 2
let world2 = [...baseAraay]

for (let i = 0; i < gridHeight; i++) {
  for (let j = 0; j < gridWidth; j++) {
    if (i > 10) {
      world2[i][j] = "soil"
    }
    if (i === 10) {
      world2[i][j] = "grass"
    }
    for (let k = 0; k < i - 4; k++) {
      if (i < 10 && i > 4 && j >= 0 && j < 5) {
        world2[i][0 + k] = "rock"
      }
    }
    if (i < 10 && i > 6 && j === 12) {
      world2[i][j] = "tree-buttom"
    }
    for (let k = 0; k < i-1; k++) {
      if (i < 7 && i > 1 && j ===12){
        world2[i][12] = "tree-top";
        world2[i][12+k] = "tree-top";
        world2[i][12-k] = "tree-top";
      }
    }
    for (let k = 0; k < i; k++) {
      if (i < 4 && i > 0 && j==4){
        world2[i][4+k] = "cloud";
        world2[i][5+(k%2)] = "cloud";
        world2[i][3-(k%2)] = "cloud";
      }
    }
  }
}

console.table(world2)