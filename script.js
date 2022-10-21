let gridHeight = 15; // like i
let gridWidth = 20; // like j
let arrOfIndexes = [];
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
      element.setAttribute("class", "grid-item");
      gridContainer.append(element);
      // console.log(`hi i am gr${i}-${j}`);
    }
  }
}
createGrid(gridHeight, gridWidth);

// function paintBoard(element, i, j) {
//   if (i > 10) {
//     return "soil grid-item";
//   } else if (i === 10) {
//     return "grass grid-item";
//   } else if (i>4 && i<10 && j< 5) {
//     for (let k = 0; k< j+1;k++)
//   }
// }

const gridItems = document.querySelectorAll(".grid-item");

for (let k = 0; k < gridItems.length; k++) {
  let [i, j] = gridItems[k].getAttribute("id").slice(4).split("-");
  console.log(`i${i} j${j} k${k}`);
  draw(Number(i), Number(j), Number(k));
}

function draw(i, j, k) {
  if (i === 10) {
    gridItems[k].classList.add("grass");
  } else if (i > 10) {
    gridItems[k].classList.add("soil");
  }
}
