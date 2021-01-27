let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

function clickFunction() {
  let randomNumbers = Math.floor(Math.random() * 10);
  let randomNumbersTwo = Math.floor(Math.random() * 10);
  let randomNumbersThree = Math.floor(Math.random() * 10);
  let randomNumbersFour = Math.floor(Math.random() * 10);
  let randomNumbersFive = Math.floor(Math.random() * 10);
  let randomNumbersSix = Math.floor(Math.random() * 10);

  let randomColor = `#${randomNumbers}${randomNumbersTwo}${randomNumbersThree}${randomNumbersFour}${randomNumbersFive}${randomNumbersSix}`;

  firstBox.style.backgroundColor = `${randomColor}`;
}

function mouseOver() {
  let randomNumbers = Math.floor(Math.random() * 10);
  let randomNumbersTwo = Math.floor(Math.random() * 10);
  let randomNumbersThree = Math.floor(Math.random() * 10);
  let randomNumbersFour = Math.floor(Math.random() * 10);
  let randomNumbersFive = Math.floor(Math.random() * 10);
  let randomNumbersSix = Math.floor(Math.random() * 10);

  let randomColor = `#${randomNumbers}${randomNumbersTwo}${randomNumbersThree}${randomNumbersFour}${randomNumbersFive}${randomNumbersSix}`;

  secondBox.style.backgroundColor = `${randomColor}`;
}

firstBox.addEventListener("click", clickFunction);

secondBox.addEventListener("mousemove", mouseOver);
