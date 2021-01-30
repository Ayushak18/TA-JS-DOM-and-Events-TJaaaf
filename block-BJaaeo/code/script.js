// let keys = document.querySelector(".keys");

// let oper = "";

// keys.addEventListener("click", function (event) {
//   oper = oper + event.target.dataset.att;

//   console.log(oper.split('='));
// //   console.log(event);

//   console.log(eval(oper));

//   if (event.target.innerText === "=") {
//     console.log(eval(oper[0]));
//   }else if(event.target.dataset.att ==="C"){
//       oper = "";
//   }
// });

let display = document.querySelector(".editor");

let initialValue = "";

display.innerText = initialValue;

let keys = document.querySelector(".keys");

keys.addEventListener("click", function (event) {
  display.innerText = display.innerText + event.target.innerText;
  if (event.target.classList.contains("equal-key")) {
    display.innerText = eval(display.innerText);
  }
});
