
import { itemShop } from '../product/products.js';
import { findById, createTableRow, createTotalRow } from '../test/utilities.js';
import { getCart } from '../local-storage/storage-utils.js';

const table = document.querySelector('table');
const button = document.getElementById('button');
const cart = getCart();

for (let cartItem of cart) {
    const matchedItem = findById(itemShop, cartItem.id);
    console.log(matchedItem);
    const tr = createTableRow(cartItem, matchedItem);

    table.append(tr);
}

const totalRow = createTotalRow(cart, itemShop);
table.append(totalRow);

button.addEventListener('click', () => {
    const cart = getCart();
    alert (JSON.stringify(cart, null, 2));
    localStorage.clear();
    window.location = '../index.html';
});