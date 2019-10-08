
let heading = document.getElementById("heading");
let button = document.getElementById("knap");
button.addEventListener("click", styleHeading);

function styleHeading() {
    heading.style.cssText = "color: red; background-color: grey;";
}

