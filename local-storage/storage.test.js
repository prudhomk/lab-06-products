// IMPORT MODULES under test here:
import { getCart, setCart, addItemToCart } from '../local-storage/storage-utils.js';

const CART = 'CART';
const test = QUnit.test;
const fakeCart = [{
    id: 3,
    quantity: 5,
},
{
    id: 10,
    quantity: 30
}
];

test('adds cart to local storage', (expect) => {
   
    setCart(fakeCart); 
    const localStorageCart = JSON.parse(localStorage.getItem(CART));

   
    expect.deepEqual(fakeCart, localStorageCart);
});


test('retrieves cart from local storage', (expect) => {

    const stringCart = JSON.stringify(fakeCart);
    localStorage.setItem('CART', stringCart);
    const cart = getCart();

    expect.deepEqual(fakeCart, cart);
});

test('Adds an Item to the cart, displaying it in a table', (expect) => {
    
    setCart(fakeCart);
    addItemToCart(100);
    const actual = getCart();
    const expected = [{ 
        'id': 3,
        'quantity': 5,
    },
    {
        'id': 10,
        'quantity': 30,
    },
    { 
        'id': 100, 
        'quantity': 1 
    }];
    expect.deepEqual(actual, expected);
});