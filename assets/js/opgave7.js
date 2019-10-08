let dato = document.getElementById("dato");
let slagsdag = document.getElementById("slagsdag");
let button = document.getElementById("knap");

let today = new Date();
let day = today.getDay();


button.addEventListener("click", getDate);
button.addEventListener("click", days);

function getDate() {
    dato.innerHTML = today.toDateString();
}

function days() {
    if (day <= 3) {
        slagsdag.innerHTML = "Øv det er hverdag";
    } else if (day == 4) {
        slagsdag.innerHTML = "Hverdag men NÆSTEN weekend";
    } else if (day <= 6) {
        slagsdag.innerHTML = "Hurra - det er weekend";
    } else {
        slagsdag.innerHTML = "Der er sket en fejl";
    }
}

