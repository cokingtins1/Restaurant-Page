
// I changed the repo


const content = document.querySelector('.content')
const header = document.getElementById('header')
const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const contactButton = document.getElementById('contact')



const MenuArray = [
    ["Skillet Hash", "Two eggs made-to-order atop a bed of oven roasted potatoes with your choice of smoked salmon, bacon, or avacodo ", "620"],
    ["Eggs Benedict", "Two poached cage-free eggs atop toasted ciabatta piled high with smoked ham and vine-ripened tomato and covered with hollandaise. Served with lemon-dressed organic mixed greens. ", "600"],
    ["Original Farmers Choice", "Our signature breakfast includes your choice of premium breakfast meat, two fresh-cracked eggs cooked-to-order, and hash browns or home fries. Served with three hotcakes or two slices of Brioche French toast", "1070"],
    ["Belgian Waffle", "Our light and airy waffle with a side of warm mixed berry compote and powdered cinnamon sugar.", "590"],
    ["Sausage Biscuits & Gravy", " Sausage gravy served with freshly-baked biscuits", "1600"],
    ["Steel-Cut Oatmeal", "Made to order with berries, fresh sliced banana, pecans, low-fat milk, brown sugar and a freshly baked muffin of the day.", "990"]

]

// Global variables
const items = []
var menuItems = {}
var itemArray = []
var descArray = []
var calArray = []


const headerButtons = document.querySelectorAll('.headerButton')

headerButtons.forEach(button => {

    button.addEventListener('click', () => {
        if (button.id === "home") {
            loadHome()
        } else if (button.id === "menu") {
            loadMenu()
        } else if (button.id === "contact") {
            loadContact()
        }
    })

})

function loadHome() {

}

function loadMenu() {

    popConstructors()
    createMenuItems()
    populateMenu()

}

function loadContact() {

}


function popConstructors() {

    for (let i = 0; i < MenuArray.length; i++) {
        var counter = 0
        itemArray[i] = MenuArray[i][counter]
        counter += 1
        descArray[i] = MenuArray[i][counter]
        counter += 1
        calArray[i] = MenuArray[i][counter]
        counter += 1
    }

}


function createMenuItems() {
    for (i = 0; i < itemArray.length; i++) {
        const menuItems = {
            item: itemArray[i],
            desc: descArray[i],
            calories: calArray[i]
        }
        items.push(menuItems) //creates array of menu item obiect

    }
}

var imgMap = []

function populateMenu() {

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContent')

    for (let i = 0; i < items.length; i++) {

        imgMap[i] = "/img/"+items[i].item.replaceAll(" ", "_")+".png"

    }
debugger
    var htmlElements = ""

    console.log(htmlElements)
    for (let i = 0; i < items.length; i++) {

        htmlElements += `<div class = "menuItem" id="${i}"> \n
                            <div class = "item">${items[i].item}</div> \n
                            <img src = "${imgMap[i]}" class = "itemImg"></img> \n
                            <div class = "desc">${items[i].desc}</div>
                        </div>`;

    }

    menuContainer.innerHTML = htmlElements
    content.append(menuContainer)
    console.log(imgMap)


    // console.log(items[1].item)
}