let cards = [
    {
        name:'One',
        img: '../assets/One.jpeg'
    },
    {
        name:'Two',
        img: '../assets/Two.jpeg'
    },
    {
        name:'Three',
        img: '../assets/Three.jpeg'
    },
    {
        name:'Four',
        img: '../assets/Four.jpeg'
    },
    {
        name:'Five',
        img: '../assets/Five.jpeg'
    },
    {
        name:'Six',
        img: '../assets/Six.jpeg'
    },
    {
        name:'Seven',
        img: '../assets/Seven.jpeg'
    },
    {
        name:'Eight',
        img: '../assets/Eight.jpeg'
    },
    {
        name:'Nine',
        img: '../assets/Nine.jpeg'
    },
    {
        name:'Ten',
        img: '../assets/Ten.jpeg'
    },
    {
        name:'Eleven',
        img: '../assets/Eleven.jpeg'
    },
    {
        name:'Twelve',
        img: '../assets/Twelve.jpeg'
    },

];

let gameGrid = cards.concat(cards);

let previousTarget = null;


let firstGuess = "";
let secondGuess = "";

let count = 0;

gameGrid.sort(() => 0.5 - Math.random());


let game = document.querySelector('#game');

let grid = document.createElement('section');
grid.setAttribute('class','grid');

game.append(grid);

gameGrid.forEach((item)=>{
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`
    grid.appendChild(card);
});

grid.addEventListener('click',function(event){
    let clicked = event.target;
    console.log(clicked);
    if(clicked.nodeName === "SECTION" || clicked === previousTarget){
        return;
    }
    if(count < 2){
        count++;
        if(count === 1){
            firstGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }else{
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }
        if(firstGuess !== "" && secondGuess !== ""){
            if(firstGuess === secondGuess){
                match();
            }
        }
        previousTarget = clicked;
    }
});

let match = () =>{
    let selected = document.querySelectorAll('.selected');
    selected.forEach((card) =>{
        card.classList.add('match');
    })
}