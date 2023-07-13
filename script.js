
// I changed the repo

const header = document.getElementById('header')
const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const contactButton = document.getElementById('contact')

const headerButtons = document.querySelectorAll('.headerButton')

headerButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        if(button.id === "home"){
            loadHome()
        } else if(button.id === "menu"){
            loadMenu()
        } else if(button.id === "contact"){
            loadContact()
        }
    })
})

function loadHome(){
    console.log('home')
}

function loadMenu(){
    console.log('menu')
}

const itemArray = []
itemArray[0] = "fish"
itemArray[1] = "pasta"
itemArray[2] = "steak"

const descArray = []
descArray[0] = "really good fish"
descArray[1] = "the best pasta you ever had BETCH"
descArray[3] = "cooked to perfection at medium rare"

const priceArray = []
priceArray[0] = "$69"
priceArray[1] = "$420"
priceArray[2] = "$9,000"




function loadContact(){
    console.log('contact')
    const fish = new MenuItem('fish','really good fish','$69')
    console.log(`On the menu tonight is ${fish.item} which is ${fish.desc} and reasonably priced at ${fish.price}`)
}

class MenuItem{
    constructor(item, desc, price){
        this.item = item
        this.desc = desc
        this.price = price
    }
}