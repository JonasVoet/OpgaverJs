let wrapper = document.getElementById("wrapper");
let button = document.getElementById("knap");

button.addEventListener("click", changePageStyles);

function changePageStyles() {
    wrapper.style.cssText = "background-color: #c0e690";
    button.style.cssText = "background-color: lightblue; color: white;";
    button.disabled = true;
}