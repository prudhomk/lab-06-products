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
    localStorage.setItem('CART', storedCart);

}

export function addItemToCart(itemId, quantity) {
    const cart = getCart();
    const itemMatch = findById(cart, itemId);
    if (itemMatch) {
        itemMatch.quantity += Number(quantity);
    } else {
        const newItem = {
            id: itemId,
            quantity: Number(quantity)
        };
        cart.push(newItem);
    }
    setCart(cart);
}