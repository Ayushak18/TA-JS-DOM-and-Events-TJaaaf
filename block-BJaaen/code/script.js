function pcMove() {
  let randomMove = Math.floor(Math.random() * 3);
  let cards = document.querySelectorAll(".pc-cards i");
  let move = cards[randomMove];
  let moveClass = move.classList[1];
  return String(moveClass);
}

function userMove() {
    let userSelection = document.querySelector('.user-cards');
    userSelection.addEventListener('click',function(event){
        console.log(`User Move ${event.target.classList[1]}`);
        console.log(`PC move ${pcMove()}`);
        if(String(event.target.classList[1]) == pcMove()){
            console.log('tie');
        }else{
            console.log('Again');
        }   
    });
}

function main(){
    pcMove();
    userMove();
}

main();
