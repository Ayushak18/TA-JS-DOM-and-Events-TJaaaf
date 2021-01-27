let section = document.querySelector(".section-box");

function color() {
  let randomNmberOne = Math.floor(Math.random() * 256);
  let randomNmberTwo = Math.floor(Math.random() * 256);
  let randomNmberThree = Math.floor(Math.random() * 256);

  let randomColor = `rgb(${randomNmberOne},${randomNmberTwo},${randomNmberThree})`;
  return randomColor;
}

for (let loop = 0; loop < 494; loop++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.style.width = "4rem";
  box.style.height = "4rem";
  box.style.display = "inline-block";
  box.style.border = "solid 1px black";
  box.innerText = Math.floor(Math.random() * 500);
  box.style.backgroundColor = color();
  section.append(box);
}

let boxColor = document.querySelectorAll(".box");
function final(){
    boxColor.forEach((eachBox) => {
        eachBox.style.backgroundColor = color();
        eachBox.innerText = Math.floor(Math.random() * 500);
      });
}

section.addEventListener("mousemove",final);