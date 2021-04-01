import { findById } from '../test/utilities.js';


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
    localStorage.setITem('CART', storedCart);

}

export function addItemToCart(itemId) {
    const cart = getCart();
    const itemMatch = findById(cart, itemId);
    if (itemMatch) {
        itemMatch.quantity++;
    } else {
        const newItem = {
            id: itemId,
            quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}