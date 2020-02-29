var countD = document.querySelector(".time");
var btn = document.querySelector("#btn");

var remaining = 10; 
    
function setTime() {
    var interval = setInterval(function() {
        remaining--;
        countD.textContent = "Timer: " + remaining + " secs";

        if(remaining === 0) {
            clearInterval(interval);
            alert("Done");
        }
    }, 1000);
}

btn.addEventListener("click", setTime);



