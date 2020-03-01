var countD = document.querySelector(".time");
var clearDiv = document.querySelector(".jumbotron");
var btn = document.querySelector("#btn");
var cardOne = document.querySelector(".cardOne");
var cardTwo = document.querySelector(".cardTwo");
var cardThree = document.querySelector(".cardThree");
var cardFour = document.querySelector(".cardFour");


var remaining = 10; 
    
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
    cardOne.style.display = "none";
    cardTwo.style.display = "none";
    cardThree.style.display = "none";
    cardFour.style.display = "none";
  }
demoDisplay();

function clear() {
    clearDiv;
    cardOne;
    clearDiv.parentNode.replaceChild(cardOne, clearDiv);
    cardOne.style.display = "block";
};

function start() {
    var startGame = btn;
    startGame.addEventListener("click", clear);
    startGame.addEventListener("click", setTime);
}
start();

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
    cardFour;
    cardThree.parentNode.replaceChild(cardFour, cardThree);
    cardFour.style.display = "block";
};










