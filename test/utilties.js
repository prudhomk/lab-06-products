export function createPart(bodyPart){
    const li = document.createElement('li');
    li.classListAdd('body-part');
    
}




const ul = document.getElementById('part-list');

for(let part of bodyParts) {
    const li = createPartLi(part);

    ul.append(li);
}



const p = document.createElement('p');
p.classList.add('name');

const image = document.createElement('image');
image.src = ;
