let gridHeight = 15; // like i
let gridWidth = 20; // like j
let arrOfIndexes = [];
let worldArr = setWorldArr();
const gridContainer = document.querySelector("#grid-container");

function createGrid(height, width) {
  gridContainer.setAttribute(
    "style",
    `grid-template: repeat(${height}, 1fr) / repeat(${width}, 1fr);`
  );

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let element = document.createElement("div");
      element.innerText = "";
      element.setAttribute("id", `grid${i}-${j}`);
      element.setAttribute("class", `grid-item ${worldArr[i][j]}`);
      gridContainer.append(element);
      // console.log(`hi i am gr${i}-${j}`);
    }
  }
}
createGrid(gridHeight, gridWidth);

// const gridItems = document.querySelectorAll(".grid-item");

// for (let k = 0; k < gridItems.length; k++) {
//   let [i, j] = gridItems[k].getAttribute("id").slice(4).split("-");
//   console.log(`i${i} j${j} k${k}`);
//   draw(Number(i), Number(j), Number(k));
// }

// function draw(i, j, k) {
//   if (i === 10) {
//     gridItems[k].classList.add("grass");
//   } else if (i > 10) {
//     gridItems[k].classList.add("soil");
//   }
// }

// -------------------------------------------------------------------------------
// ============================= PAINT WORLDS ====================================
// -------------------------------------------------------------------------------
function paintWorld1(worldArr) {
  let world1 = [...worldArr];
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      if (i > 10) {
        world1[i][j] = "soil";
      }
      if (i === 10) {
        world1[i][j] = "grass";
      }
      for (let k = 0; k < i - 4; k++) {
        if (i < 10 && i > 4 && j >= 0 && j < 5) {
          world1[i][0 + k] = "rock";
        }
      }
      if (i < 10 && i > 6 && j === 12) {
        world1[i][j] = "tree-buttom";
      }
      for (let k = 0; k < i - 1; k++) {
        if (i < 7 && i > 1 && j === 12) {
          world1[i][12] = "tree-top";
          world1[i][12 + k] = "tree-top";
          world1[i][12 - k] = "tree-top";
        }
      }
      for (let k = 0; k < i; k++) {
        if (i < 4 * 1 && i > 0 && j === 4 * 1) {
          world1[i][4 * 1] = "cloud";
          world1[i][6 - k] = "cloud";
          world1[i][3 - k] = "cloud";
        }
      }
    }
  }
  return world1;
}
function paintWorld2(worldArr) {
  let world2 = [...worldArr];
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      if (i > 11) {
        world2[i][j] = "soil";
      }
      if (i === 11) {
        world2[i][j] = "grass";
      }
      for (let k = 0; k < i - 5; k++) {
        if (i < 11 && i > 5 && j === 7) {
          world2[i][7] = "rock";
          world2[i][7 + k] = "rock";
          world2[i][7 - k] = "rock";
        }
      }
      if (i < 11 && i > 6 && j > 14 && j < 17) {
        world2[i][j] = "tree-buttom";
      }
      if (i < 7 && i > 1 && j > 12 && j < 19) {
        world2[i][j] = "tree-top";
      }
      if (
        (i < 4 && i > 0 && j > 0 && j < 4) ||
        (i < 3 && i > 0 && j > 3 && j < 6) ||
        (i === 1 && j === 6)
      ) {
        world2[i][j] = "cloud";
      }
    }
  }

  return world2;
}
function paintWorld3(worldArr) {
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

  return world3;
}
function paintWorld4(worldArr) {
  let world4 = [...worldArr];
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      for (let k = 0; k < i - 5; k++) {
        if (i < 15 && i > 6 && j === 9) {
          world4[i][9] = "grass";
          world4[i][9 + k] = "grass";
          world4[i][9 - k] = "grass";
        }
      }

      for (let k = 0; k < i - 6; k++) {
        if (i < 15 && i > 7 && j === 9) {
          world4[i][9] = "soil";
          world4[i][9 + k] = "soil";
          world4[i][9 - k] = "soil";
        }
      }

      if (
        (i > 12 && (j === 0 || j > 17)) ||
        (i === 13 && (j === 1 || j === 17))
      ) {
        world4[i][j] = "rock";
      }

      if (i < 7 && i > 4 && j === 9) {
        world4[i][j] = "tree-buttom";
      }
      if (i < 5 && i > 1 && j > 7 && j < 11) {
        world4[i][j] = "tree-top";
      }
      if (
        (i < 4 && i > 0 && j > 1 && j < 5) ||
        (i === 2 && j === 5) ||
        (i === 2 && j === 1)
      ) {
        world4[i][j] = "cloud";
      }
      if (
        (i < 4 && i > 0 && j > 13 && j < 18) ||
        (i === 2 && j === 18) ||
        (i === 2 && j === 13)
      ) {
        world4[i][j] = "cloud";
      }
    }
  }

  return world4;
}
function setWorldArr() {
  let allWorldsArr = [paintWorld1, paintWorld2, paintWorld3, paintWorld4];
  let randomWorldArr = [];
  for (let i = 0; i < gridHeight; i++) {
    randomWorldArr.push([]);
    for (let j = 0; j < gridWidth; j++) {
      randomWorldArr[i].push("");
    }
  }
  return allWorldsArr[Math.floor(Math.random() * allWorldsArr.length)](
    randomWorldArr
  );
}
