// IMPORT MODULES under test here:
import { createItem, findById } from '../test/utilties.js';

const test = QUnit.test;

test('Takes in an item object and returns a li element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = createItem({
        name: 'Deku Shield',
        image: '../assets/deku shield.jpg',
        description: 'Protect yourself from Octoroks!',
        category: 'Weapon',
        price: 40,
        color: 'beige',
    });
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = `<li class="item-shop" style="background: beige;"><p class="name">Deku Shield</p><img class="image" src="../assets/deku shield.jpg"><p class="description">Protect yourself from Octoroks!</p><p class="category">Weapon</p><p class="price">40 rupees</p><button class="item">Add to Inventory</button></li>`;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('Takes an array and returns an item by matching ID', (expect) => {

    const expected = '1';

    const actual = findById(cartList, id);

    


    expect.deepEqual(actual.outerHTML, expected);

});