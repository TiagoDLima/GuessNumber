
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptNumber: 0,
    numberDraw: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
};

let numberDraw = Guess.numberDraw();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e){
    e.preventDefault()

    let kick = document.getElementById('kick').value;

    if (!kick){
        alert('Digite algum valor!')
        return;
    };

    updateAttempt(attempt, ++Guess.attemptNumber);

    if (numberDraw == kick){

        playAgain();
        
        status.innerHTML = ' Parabéns, você acertou! ';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';

        clear();
        
    } else if (numberDraw > kick){

        status.innerHTML = 'O numero é maior!';
        status.style.color = '#de5251';

        clear();

    } else if (numberDraw < kick){

        status.innerHTML = 'O numero é menor!';
        status.style.color = '#de5251';

        clear();
    }

};

function playAgain(){
     document.getElementById('btnRestart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear(){
    document.getElementById('kick').value = '';
};