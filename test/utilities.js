
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
    button.value = itemShop.id;
    console.log(itemShop.id);
    button.textContent = 'Add to Inventory';
    
    //button.addEventListener('click', (e) => {
    //});
    console.log(pName, image, pDescription, pCategory, pPrice, button);
    li.append(pName, image, pDescription, pCategory, pPrice, button);
    return li;
}

export function createTableRow(cartList, itemShop) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = itemShop.name;

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartList.quantity;
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${itemShop.price * cartList.quantity}.00`;

    tr.append(tdName, tdQuantity, tdPrice);
    return tr;
}



export function findById(array, id) {
    for (let item of array) 
        if (item.id === id) {
            return item;
        }
    
}
