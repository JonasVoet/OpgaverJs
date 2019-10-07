// document.getElementById("list1").getElementsByTagName("li")[0].style.color = 'red';

let listItems = document.getElementById("list1").getElementsByTagName("li");
let listItemsAntal = listItems.length;  // 4
let myButton = document.getElementById('button');
let myButton2 = document.getElementById('button2');



// Listen to click and "do something" 
myButton.addEventListener("click", StyleListItems);
myButton2.addEventListener("click", RemoveStyleListItems);



function StyleListItems() {
    for(let i = 0; i <= listItemsAntal; i = i + 1) {
        listItems[i].style.cssText = 'color: red;';
        listItems[i].innerHTML = "Her er punkt " + i;
    }
}

function RemoveStyleListItems() {

    for (let i = 0; i < listItemsAntal; i = i + 1) {
        listItems[i].removeAttribute("style");

    }
    
  
}




