let pText = document.getElementById("teksten");
let button = document.getElementById("knap");

button.addEventListener("click", styleP);

function styleP() {
    pText.style.cssText = "font-style: italic";
}