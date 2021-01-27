let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

function clickFunction() {
  let randomNumberOne = Math.floor(Math.random() * 256);
  let randomNumberTwo = Math.floor(Math.random() * 256);
  let randomNumberThree = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${randomNumberOne}, ${randomNumberTwo}, ${randomNumberThree})`;

  firstBox.style.backgroundColor = `${randomColor}`;
}

function mouseOver() {
  let randomNumberOne = Math.floor(Math.random() * 256);
  let randomNumberTwo = Math.floor(Math.random() * 256);
  let randomNumberThree = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${randomNumberOne}, ${randomNumberTwo}, ${randomNumberThree})`;

  secondBox.style.backgroundColor = `${randomColor}`;
}

firstBox.addEventListener("click", clickFunction);

secondBox.addEventListener("mousemove", mouseOver);
