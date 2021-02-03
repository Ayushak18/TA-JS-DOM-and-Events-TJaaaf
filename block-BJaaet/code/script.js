let movie = document.querySelector("form");
let movieName = document.querySelector(".movie-input");
let section = document.querySelector(".list");

let movieList = {};

function addMovie(event) {
  event.preventDefault();
  movieList.movieName = movieName.value;
  movieName.value = "";
  console.log(movieList);

  let div = document.createElement("div");
  div.setAttribute("class", "movie-name");

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  let label = document.createElement("label");
  label.innerText = movieList.movieName;

  let icon = document.createElement("i");
  icon.setAttribute("class", "far fa-window-close");

  div.append(input, label, icon);
  section.append(div);

  icon.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
}

movie.addEventListener("submit", addMovie);
