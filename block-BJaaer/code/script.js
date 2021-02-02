let form = document.querySelector("form");
let div = document.querySelector(".message");
let close = document.querySelector('.close-btn');

div.style.display = 'none';

// Object to store data of the form
let data = {};

// Function to handle submit
function handleSubmit(event) {
  event.preventDefault();
  data.name = form.elements.name.value;
  data.email = form.elements.email.value;
  data.movie = form.elements.gender.value;
  data.color = form.elements.color.value;
  data.range = form.elements.range.value;
  data.drone = form.elements.drone.value;
  data.terms = form.elements.terms.checked;

//   console.log(data);

  form.style.display = "none";
  div.style.display = "block";

  let heading = document.createElement("h1");
  heading.innerText = `Hello ${data.name}`;
  heading.style.fontSize = '48px';
  heading.style.fontWeight = '800';

  let emailSection = document.createElement('p');
  emailSection.innerText = `Email: ${data.email}`;

  let movieSection =  document.createElement('p');
  movieSection.innerText = `You Love :${data.movie}`;

  let colorSection = document.createElement('p');
  colorSection.innerText = `Color: ${data.color}`;

  let ratingSection = document.createElement('p');
  ratingSection.innerText = `Rating : ${data.range}`;

  let bookGenreSection = document.createElement('p');
  bookGenreSection.innerText = `Book Genre : ${data.drone}`;

  let termsSection = document.createElement('p');
  if(data.terms){
    termsSection.innerText = `You Agree to Terms and Conditions`;
  }
  
  
  div.append(heading,emailSection,movieSection,colorSection,ratingSection,bookGenreSection,termsSection);
}

// Adding event listner to the form
form.addEventListener("submit", handleSubmit);

// Adding event to the close btn
close.addEventListener('click',function(){
    div.style.display = 'none';
    form.style.display = "flex";
    div.innerText = "";
    // let closeBtn = document.createElement('div');
    // closeBtn.setAttribute('class','close-btn');
    div.append(close);
})
