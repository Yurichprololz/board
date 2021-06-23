const board = document.querySelector("#board");
const numberOfSquares = 500;

for (let i = 0; i < numberOfSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => addColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function addColor(element) {
  element.style.transitionDuration = "0s";

  element.style.background = "red";
}

function removeColor(element) {
  element.style.transitionDuration = "2s";
  element.style.background = "#4b3c3c";
}
