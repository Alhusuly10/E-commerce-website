var MenuItems = document.getElementById("MenuItems")

MenuItems.style.maxHeight = "0px"

 function  menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    } else {
        MenuItems.style.maxHeight = "0px"
    }
}

var i = 0;
var numbers = '';

while (i < 10) {
    console.log("it is increment at:", + i);
    i++;
}

console.log(numbers)