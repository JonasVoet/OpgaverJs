
let google = document.getElementById("google");
let bing = document.getElementById("bing");

google.addEventListener("click", alertGoogle);
bing.addEventListener("click", confirmBing);

function alertGoogle() {
    alert("Du bliver du sendt videre til Google");
}

function confirmBing(e) {
    let confirmBox = confirm("Er du sikker?");
    if (confirmBox == true) {

    } else if (confirmBox == false) {
        e.preventDefault();
    }

}