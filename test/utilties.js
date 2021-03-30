export function createPart(bodyPart){
    const li = document.createElement('li');
    li.classListAdd('body-part');
    
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


}




const ul = document.getElementById('part-list');

for(let part of bodyParts) {
    const li = createPart(part);

    ul.append(li);
}



const p = document.createElement('p');
p.classList.add('name');

const image = document.createElement('image');
image.src = ;
