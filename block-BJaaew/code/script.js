let section = document.querySelector(".people");

let filterSection = document.querySelector(".filter");

got.houses.forEach((house) => {
  house.people.forEach((person) => {
    let div = document.createElement("div");
    div.setAttribute("class", "person padding");

    let divTwo = document.createElement("div");
    divTwo.setAttribute("class", "profile flex align-center");

    let img = document.createElement("img");
    img.setAttribute("class", "profile-image");
    img.src = person.image;

    let heading3 = document.createElement("h3");
    heading3.setAttribute("class", "profile-heading");
    heading3.innerText = person.name;

    let para = document.createElement("p");
    para.setAttribute("class", "person-description text-center");
    para.innerText = person.description;

    let anchor = document.createElement("a");
    anchor.setAttribute("class", "person-site text-center");
    anchor.href = person.wikiLink;
    anchor.innerText = "Learn More";

    divTwo.append(img, heading3);

    div.append(divTwo, para, anchor);

    section.append(div);
  });
  let filterBtn = document.createElement("button");
  filterBtn.innerText = house.name;
  filterSection.classList.add("text-center");
  filterSection.append(filterBtn);
});

let btn = document.querySelectorAll('button');

btn.forEach(element => {
    element.addEventListener('click',(event)=>{
        console.log(event.target.innerText);
    })
});
