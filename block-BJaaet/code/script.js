let movie = document.querySelector('form');
let movieName = document.querySelector('.movie-input');

let movieList = [];

function addMovie(event){
    event.preventDefault();
    movieList.push(movieName.value);
    movieName.value = "";
    console.log(movieList);
}

movie.addEventListener('submit',addMovie);