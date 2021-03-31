// IMPORT MODULES under test here:
import { createItem, findById, calcOrderTotal, calcItemTotal, createTableRow } from './utilities.js';
import { itemShop } from '../product/products.js';
import { cartList } from '../cart/cart.js';
const test = QUnit.test;

test('Takes in an item object and returns a li element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const actual = createItem({
        name: 'Deku Shield',
        image: '../assets/deku shield.jpg',
        description: 'Protect yourself from Octoroks!',
        category: 'Weapon',
        price: 40,
        color: 'beige',
        id: '1',
    });
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = `<li class="item-shop" style="background: beige;"><p class="name">Deku Shield</p><img class="image" src="../assets/deku shield.jpg"><p class="description">Protect yourself from Octoroks!</p><p class="category">Weapon</p><p class="price">40 rupees</p><button value="1">Add to Inventory</button></li>`;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Takes in a cart and returns a table row', (expect) => {
    const expected = `<tr><td>Bombs</td><td>2</td><td>50 Rupees</td></tr>`;

    const actual = createTableRow(cartList[2], itemShop[2]);

    expect.equal(actual.outerHTML, expected);

});

test('Takes an array and returns an item by matching ID', (expect) => {

    const expected = { 
        name: 'Deku Shield',
        image: '../assets/deku shield.jpg',
        description: 'Protect yourself from Octoroks!',
        category: 'Weapon',
        price: 40,
        color: 'beige',
        id: '1',
    };
    
    const actual = findById(itemShop, expected.id);

    expect.deepEqual(actual, expected);
});

test('Takes quantities of cart and price, returns total', (expect) => {
    const itemPrice = 40;
    const itemQuantity = 2;
    const expected = 80;
    const actual = calcItemTotal(itemPrice, itemQuantity);

    expect.equal(actual, expected);
});

test('Take quantity of item in cart by id, return total price for item', (expect) => {
    const expected = 310;
    const actual = calcOrderTotal(cartList);

    expect.equal(actual, expected);
});