// IMPORT MODULES under test here:
import { createItem, findById } from './utilities.js';
import { itemShop } from '../product/products.js';
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