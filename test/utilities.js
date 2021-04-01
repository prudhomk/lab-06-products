import { itemShop } from '../product/products.js';
//import { cartList } from '../cart/cart.js';

const CART = 'CART';
const cart = getCart();

export function createItem(itemShop){
    const li = document.createElement('li');
    li.classList.add('item-shop');
    li.style.background = itemShop.color;
    
    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = itemShop.name;

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = itemShop.image;
    

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = itemShop.description;

    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = itemShop.category;

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `${itemShop.price} rupees`;

    const button = document.createElement('button');
    button.value = itemShop.id;
    button.textContent = 'Add to Inventory';
    
    //button.addEventListener('click', (e) => {
    //});
    li.append(pName, image, pDescription, pCategory, pPrice, button);
    return li;
}

export function createTableRow(cartList, itemShop) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = itemShop.name;

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartList.quantity;
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = `${calcItemTotal(cartList.quantity, itemShop.price)} Rupees`;

    tr.append(tdName, tdQuantity, tdPrice);
    return tr;
}

export function createTotalRow(cartList) {
    
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `${calcOrderTotal(cartList)} Rupees.`;

    tr.append(td1, td2, td3);
    return tr;
}


export function findById(array, id) {
    for (let item of array) 
        if (item.id === id) {
            return item;
        }
    
}



export function calcOrderTotal(cartList) {
    let total = 0;
    
    for (let i = 0; i < cartList.length; i++) {
        const cartItem = cartList[i];
        //console.log(cartItem);
        const cartObject = findById(itemShop, cartItem.id);
        //console.log(cartObject);
        const totalItem = cartItem.quantity * cartObject.price;
        console.log(totalItem);
        total += totalItem;
        //console.log(total);
    }
    
    return total;
    
}


export function calcItemTotal(quantity, price) {
    let total = quantity * price;
    return total;
}