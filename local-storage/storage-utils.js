import { findById } from '../test/utilities.js';
import { createItem } from '../test/utilities.js';
import { itemShop } from '../product/products.js';

export function getCart() {
    const storedCart = localStorage.getItem('CART');
    const receivedCart = JSON.parse(storedCart);

    if (receivedCart) {
        return receivedCart;
    } else {
        return [];
    }
}

export function setCart(receivedCart) {
    const storedCart = JSON.stringify(receivedCart);
    localStorage.setItem('CART', storedCart);

}

const createItem(itemShop).select.e.target.value
export function addItemToCart(itemId) {
    const cart = getCart();
    const itemMatch = findById(cart, itemId);
    if (itemMatch) {
        const newItem = {
            id: itemId,
            quantity: `${e.target.value}`
        };
        cart.push(newItem);
    }
    setCart(cart);
}