const cardList = document.querySelector('.cardList');
const score = document.querySelector('.score');
let points = 0
const back = document.getElementById('btn');
const replay = document.createElement('button')
const btnRow = document.querySelector('.btnrow')
buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + 1)
}, 500);

back.addEventListener('click', function(){
    document.location.href = 'cardMainMenu.html';
})

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
        alert('Game completed')
        replay.innerHTML = "RESET"
        btnRow.appendChild(replay);
        replay.addEventListener('click', function(e) {
            location.reload();
        })
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