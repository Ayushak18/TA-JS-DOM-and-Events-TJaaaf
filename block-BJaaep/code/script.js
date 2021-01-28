let firstBoxes = document.querySelectorAll(".first .box");

let count = 1;
firstBoxes.forEach((box) => {
  box.addEventListener("click", function (event) {
    box.innerText = count;
    count = count + 1;
    console.log(event);
  });
});
