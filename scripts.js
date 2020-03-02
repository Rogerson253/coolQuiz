var countD = document.querySelector(".time");
var clearDiv = document.querySelector(".jumbotron");
var btn = document.querySelector("#btn");
var cardOne = document.querySelector(".cardOne");
var cardTwo = document.querySelector(".cardTwo");
var cardThree = document.querySelector(".cardThree");
var gameOver = document.querySelector(".gameOver");
var highscores = document.querySelector(".highscores");
var b = document.querySelector(".btn-1-2");
var d = document.querySelector(".btn-2-4");
var a = document.querySelector(".btn-3-1");
var scoreEl = document.querySelector("#score");
var startGame = btn;
var score = 0;

var remaining = 10; 


startGame.addEventListener("click", clear);
startGame.addEventListener("click", setTime);




function setTime() {
    var interval = setInterval(function() {
        remaining--;
        countD.textContent = "Timer: " + remaining + " secs";

        if(remaining === 0) {
            clearInterval(interval);
        }
    }, 1000);
};

function demoDisplay() { 
    var cards = [cardOne, cardTwo, cardThree, gameOver, highscores];
        for (i = 0; i < cards.length; i++) {
            cards[i].style.display = "none";
        }

  };
demoDisplay();

function addScore() {
    score += 5;
    alert(score);
};

function rightAnswer() {
    var rightA = [b, d, a];
    for (var i = 0; i < rightA.length; i++) {
        rightA[i].addEventListener("click", addScore);
    }
};
rightAnswer();



function clear() {
    clearDiv;
    cardOne;
    clearDiv.parentNode.replaceChild(cardOne, clearDiv);
    cardOne.style.display = "block";
};

function clear2() {
    cardOne;
    cardTwo;
    cardOne.parentNode.replaceChild(cardTwo, cardOne);
    cardTwo.style.display = "block";
};

function clear3() {
    cardTwo;
    cardThree;
    cardTwo.parentNode.replaceChild(cardThree, cardTwo);
    cardThree.style.display = "block";
};

function clear4() {
    cardThree;
    gameOver;
    cardThree.parentNode.replaceChild(gameOver, cardThree);
    gameOver.style.display = "block";
};

function clear5() {
    gameOver;
    highscores;
    gameOver.parentNode.replaceChild(highscores, gameOver);
    highscores.style.display = "block";
};

function clear6() {
    highscores;
    clearDiv;
    highscores.parentNode.replaceChild(clearDiv, highscores);
}; 










