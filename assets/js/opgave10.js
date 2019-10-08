let pacImage = document.getElementById("pacman");
let left = document.getElementById("venstre");
let up = document.getElementById("op");
let down = document.getElementById("ned");
let right = document.getElementById("hoejre");




var leftRightPos = 40;
var upDownPos = 40;

// Billede flytter med Key tasterne
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.e;
    if (e.keyCode == 38) {
        upDownPos += -10;
        pacImage.style.top = upDownPos + "px";

    } else if (e.keyCode == 40) {
        upDownPos += 10;
        pacImage.style.top = upDownPos + "px";

    } else if (e.keyCode == 37) {
        leftRightPos += -10;
        pacImage.style.left = leftRightPos + "px";

    } else if (e.keyCode == 39) {
        leftRightPos += 10;
        pacImage.style.left = leftRightPos + "px";
    }

}

// Billede flytter med knapper

left.addEventListener("click", leftPac);
up.addEventListener("click", upPac);
down.addEventListener("click", downPac);
right.addEventListener("click", rightPac);

function leftPac() {
    leftRightPos += -10;
    pacImage.style.left = leftRightPos + "px";
}

function upPac() {
    upDownPos += -10;
    pacImage.style.top = upDownPos + "px";
}

function downPac() {
    upDownPos += 10;
    pacImage.style.top = upDownPos + "px";
}

function rightPac() {
    leftRightPos += 10;
    pacImage.style.left = leftRightPos + "px";
}


