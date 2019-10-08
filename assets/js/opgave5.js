let span = document.getElementById("svar");
let button = document.getElementById("knap");

button.addEventListener("click", loopText);

function loopText() {

    for (let i = 0; i <= 4; i = i + 1) {
        span.innerHTML += "øller ";
    }
}