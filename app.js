// import functions and grab DOM elements
import { createPart } from '../test/utilties.js';
import { bodyPart } from '../product/products.js';

const ul = document.getElementById('body-part');

for (let part of bodyPart) {
    const li = createPart(part);

    ul.append(li);
}
