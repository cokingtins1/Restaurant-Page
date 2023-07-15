
import { MenuArray } from "./menu.js"

const content = document.querySelector('.content')
const header = document.getElementById('header')
const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const contactButton = document.getElementById('contact')


// Global variables
const items = []
var menuItems = {}
var itemArray = []
var descArray = []
var calArray = []
var imgMap = []
var htmlElements = ""


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
    for (let i = 0; i < itemArray.length; i++) {
        const menuItems = {
            item: itemArray[i],
            desc: descArray[i],
            calories: calArray[i]
        }
        items.push(menuItems) //creates array of menu item obiect

    }
}



function populateMenu() {

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContent')

    for (let i = 0; i < items.length; i++) {

        imgMap[i] = "/img/"+items[i].item.replaceAll(" ", "_")+".png"

    }

    console.log(htmlElements)
    for (let i = 0; i < items.length; i++) {

        htmlElements += `<div class = "menuItem" id="${i}"> \n
                            <div class = "item">${items[i].item}</div> \n
                            <img src = "${imgMap[i]}" class = "itemImg"></img> \n
                            <i class = "cal">${items[i].calories} cal.</i> \n
                            <div class = "desc">${items[i].desc}</div>
                        </div>`;

    }

    menuContainer.innerHTML = htmlElements
    content.append(menuContainer)
    console.log(imgMap)

}