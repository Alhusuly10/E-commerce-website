var MenuItems = document.getElementById("MenuItems")

MenuItems.style.maxHeight = "0px"

const menutoggle = function () {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.accentColor.maxHeight = "200px"
    } else {
        MenuItems.style.maxHeight = "0px"
    }
}