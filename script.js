const board = document.querySelector("#board");
const numberOfSquares = 500;
const arrColor = [
  "#ca1d1d",
  "#da871b",
  "#dadd1a",
  "#27d817",
  "#1dcaad",
  "#1d45ca",
  "#6e1dca",
  "#c41dca",
  "#ca1d74",
  "#ca1d26",
  "31dcaa5",
  "#a5ca1d",
];

for (let i = 0; i < numberOfSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => addColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function addColor(element) {
  element.style.transitionDuration = "0s";
  let color = getColor(element);
  element.style.boxShadow = `0 0 2px ${arrColor[color]}, 0 0 10px ${arrColor[color]}`;
  element.style.background = arrColor[color];
}

function removeColor(element) {
  element.style.transitionDuration = "2s";
  element.style.background = "#4b3c3c";
  element.style.boxShadow = `0 0 2px #4b3c3c`;
}

function getColor(element) {
  return Math.floor(Math.random() * arrColor.length);
}
