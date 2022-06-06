const cardList = document.querySelector('.cardList');
const score = document.querySelector('.score');
let points = 0
const btn = document.getElementById('btn');
buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + 1)
}, 2000);



cardList.addEventListener( 'click' , function(e){
    console.log(e.target);
    if (e.target.matches('.cardList')) {
        return
    }
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        points = points + 1;
        score.innerHTML = `${points} points`
        return
    }
    if (e.target.classList.contains('inactive')){
        points = points + 2
        score.innerHTML = `${points} points`
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
        console.log('Game completed')
    }
});

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter')
    }
}