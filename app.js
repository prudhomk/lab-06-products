// import functions and grab DOM elements
import { createItem } from '../test/utilties.js';
import { itemShop } from '../product/products.js';

const ul = document.getElementById('item-shop');

for (let item of itemShop) {
    const li = createItem(item);

    ul.append(li);
}
