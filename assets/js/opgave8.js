let seasonText = document.getElementById("seasontext");
let seasonImage = document.getElementById("seasonimage");

// images
let winter = "./assets/images/winter.jpg";
let spring  = "./assets/images/spring.jpg";
let summer  = "./assets/images/summer.jpg";
let autumn  = "./assets/images/autumn.jpg";

let d = new Date();
let month = d.getMonth() + 1;;

seasonImage.addEventListener("load", changeSeason);

function changeSeason() {
    if (month <=2 || month === 12 ) {
        seasonText.innerHTML = "Vinter";
        seasonImage.setAttribute("src", winter);
    } else if (month <=5) {
        seasonText.innerHTML = "Forår";
        seasonImage.setAttribute("src", spring);
    } else if (month <=8) {
        seasonText.innerHTML = "Sommer";
        seasonImage.setAttribute("src", summer);
    } else if (month <=11) {
        seasonText.innerHTML = "Efterår";
        seasonImage.setAttribute("src", autumn);
    }
}

