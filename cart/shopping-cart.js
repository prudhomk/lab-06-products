import { cartList } from './cart.js';
import { itemShop } from '../product/products.js';
import { findById, createTableRow, createTotalRow } from '../test/utilities.js';

const table = document.querySelector('table');

for (let cartItem of cartList) {
    const matchedItem = findById(itemShop, cartItem.id);
    console.log(matchedItem);
    const tr = createTableRow(cartItem, matchedItem);

    table.append(tr);
}

const totalRow = createTotalRow(cartList, itemShop);
table.append(totalRow);