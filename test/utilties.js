
export function createItem(itemShop){
    const li = document.createElement('li');
    li.classList.add('item-shop');
    li.style.background = itemShop.color;
    
    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = itemShop.name;

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = itemShop.image;
    

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = itemShop.description;

    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = itemShop.category;

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `${itemShop.price} rupees`;

    const button = document.createElement('button');
    button.classList.add('item');
    button.textContent = 'Add to Inventory';
    
    
    li.append(pName, image, pDescription, pCategory, pPrice, button);
    return li;
}

