// const title = document.getElementById('title');
// console.log(title);
// const listItems = document.getElementsByClassName('list-item');
// console.log(listItems);


// const title = document.querySelector('#title');
// const listItems = document.querySelectorAll('.list-item');

// title.style.color = 'orange';
// title.style.backgroundColor = 'olive';
// title.style.padding = "50px";

// listItems.forEach(element => element.style.color = 'green');

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.innerHTML = '<span>Mexican</> fuud';
// li.setAttribute('id', 'title');
// li.classList.add('list-item');
// li.classList.add('new-class');
// if (li.classList.contains('list-tem')){
//     li.style.color = 'red';
// }

// ul.append(li);

// const firstListItem = document.querySelector('.list-item');

// console.dir(firstListItem)
// console.log(firstListItem.innerText);
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);

// const names = ['Gnom','Oroe','Jack','Jill','Mary','Bob'];

// names.forEach(name => {
//     const li = document.createElement('li');
//     li.innerHTML = `<b>${name}</b>`
//     ul.append(li);
// })

// const ul = document.querySelector('ul');

// console.log(ul.parentNode);
// console.log(ul.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);
//!Do not use!! these are nodes
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// console.log(ul.nextSibling);
// console.log(ul.previousSibling);

//? USE, THESE ARE ELEMENTS!!!
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.nextElementSibling);
// console.log(ul.previousElementSibling);

// function alertMe() {
//     alert('Still Stop!')
// }

// const background = document.querySelectorAll('div')[1];

// function changeBgColor() {
//     background.style.backgroundColor = 'blue';
// }

// function changeBgColorBack() {
//     background.style.backgroundColor = 'orange';
// }

// background.addEventListener('mouseover', changeBgColor);
// background.addEventListener('mouseout', changeBgColorBack);

// const first = document.querySelector('#first');
// function hideOrReveal() {
//     if (first.classList.contains('hidden')) {
//         first.classList.remove('hidden');
//     } else {
//         first.classList.add('hidden');
//     }
// }


// window.addEventListener('click', () => console.log('Window'), { once: true });
// document.addEventListener('click', console.log('Document'), true);
// document.querySelector('.container').addEventListener('click', () => console.log('Container'));
// document.querySelector('.level1').addEventListener('click', (e) => console.log('level1'));
// document.querySelector('.level2').addEventListener('click', () => console.log('level2'));
// document.querySelector('.level3').addEventListener('click', (e) => console.log('level3', e.target));
// document.querySelector('.level4').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.style.innerTEXT = 'clicked')
// }, false);

document.querySelector('#cars').addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.matches('li')) {
        console.log(target.getAttribute('id') + ' is clicked!');
        target.style.backgroundColor = 'pink';
    }
})

const cars = document.querySelector('#cars');
const newCars = document.createElement('li');
newCars.innerText = 'Fiat';
newCars.setAttribute('id', 'fiat');
newCars.classList.add('list-item');

cars.append(newCars);