let imgOnMouseOver = "./assets/images/tt2.gif";
let imgOnMouseOut = "./assets/images/tt1.gif";
let imageT = document.getElementById("image");

imageT.addEventListener("mouseover", over);
imageT.addEventListener("mouseout", out);

function over() {
    imageT.setAttribute("src", imgOnMouseOver);
};

function out() {
    imageT.setAttribute("src", imgOnMouseOut);
}




