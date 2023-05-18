let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Crash Guard',
        image: '1.jpg',
        price: 3000
    },
    {
        id: 2,
        name: 'Loud Horn',
        image: '2.jpg',
        price: 500
    },
    {
        id: 3,
        name: 'Pulley',
        image: '3.jpg',
        price: 1299
    },
    {
        id: 4,
        name: 'Flat Seat',
        image: '4.jpg',
        price: 1999
    },
    {
        id: 5,
        name: 'Motor Part 5',
        image: '5.jpg',
        price: 199
    },
    {
        id: 6,
        name: 'Motor Part 6',
        image: '6.jpg',
        price: 199
    },

    {
        id: 7,
        name: 'Helmet',
        image: '7.jpg',
        price: 1999
    },
    {
        id: 8,
        name: 'Pirelli Tires',
        image: '8.jpg',
        price: 3000
    },

    {
        id: 6,
        name: 'Light',
        image: '9.jpg',
        price: 1999
    },
    {
        id: 6,
        name: 'Sari-sari',
        image: '10.jpg',
        price: 199
    }



];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})"><span class="css-cart-icon">
            <i class="fa fa-shopping-cart"></i>
        </span>
        <span class="css-cart-text">
            <span>Add</span></button>`          
            ;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}