
export function createPart(bodyPart){
    const li = document.createElement('li');
    li.classList.add('body-part');
    
    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = bodyPart.name;

    const image = document.createElement('image');
    image.classList.add('image');
    image.src = bodyPart.image;

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = bodyPart.description;

    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = bodyPart.category;

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${bodyPart.price}.00`;

    const button = document.createElement('button');
    button.textContent = 'Add to Body';
    li.append(pName, image, pDescription, pCategory, pPrice);
    return li;
}

