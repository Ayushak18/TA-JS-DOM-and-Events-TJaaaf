let firstBoxes = document.querySelectorAll(".first .box");

firstBoxes.forEach((box, index) => {
  box.addEventListener("click", function (event) {
    box.innerText = index + 1;
    setInterval(() => (box.innerText = ""), 2000);
  });
});

let secondBoxesData = document.querySelectorAll(".second .box");

secondBoxesData.forEach((box, index) => {
  box.addEventListener("click", function (event) {
    box.setAttribute("data-text", index + 1);
  });
});

let secondBoxes = document.querySelector(".second");

secondBoxes.addEventListener("click", function (event) {
  event.target.innerText = event.target.dataset.text;
  setInterval(() => (event.target.innerText = ""), 2000);
});
