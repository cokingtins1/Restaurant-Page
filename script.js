
// I changed the repo

const header = document.getElementById('header')
const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const contactButton = document.getElementById('contact')

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
    createMenuItems()
}

function loadMenu() {
    createMenuItems()
    menuButton.classList.toggle('menu')
    // populateMenu()
}

function loadContact() {

    console.log('contact')
    const fish = new MenuItem(itemArray[0], descArray[0], priceArray[0])
    console.log(`On the menu tonight is ${fish.item} which is ${fish.desc} and reasonably priced at ${fish.price}`)
}

const items = []

const itemArray = []
itemArray[0] = "fish"
itemArray[1] = "pasta"
itemArray[2] = "steak"

const descArray = []
descArray[0] = "really good fish"
descArray[1] = "the best pasta you ever had BETCH"
descArray[2] = "cooked to perfection at medium rare"



const calArray = []
calArray[0] = "69"
calArray[1] = "420"
calArray[2] = "9,000"


function createMenuItems() {
    for (i = 0; i < itemArray.length; i++) {
        const menuItems = {
            item: itemArray[i],
            desc: descArray[i],
            calories: calArray[i]
        }
        items.push(menuItems) //creates array of menu item object
        populateMenu()
    }
}