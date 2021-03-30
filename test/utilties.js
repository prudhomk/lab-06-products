export function createItem(){

}




const ul = document.getElementById('part-list');

for(let part of bodyParts) {
    const li = createPartLi(part);

    ul.append(li);
}

const li = document.createElement('li');
li.classListAdd('bodyPart');
li.style.background = 'purple';

const p = document.createElement('p');
p.classList.add('name');

const image = document.createElement('image');
image.src = ;
