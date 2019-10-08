let h1 = document.getElementById("overskrift");
let button = document.getElementById("knap");

button.addEventListener("click", changeHeading);

function changeHeading() {
    if (h1.innerHTML == "Opgave 4: Skift tekst") {
        h1.innerHTML = "En ny overskrift";
    } else {
        h1.innerHTML = "Opgave 4: Skift tekst";
    }

}