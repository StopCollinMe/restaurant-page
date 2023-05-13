import './styles.css';
import { pageLoad } from './pageLoad';
import { menu } from './menu';
import { contact } from './contact';

//Add highlighted current tab. Currentlly broken

    const addNav = () =>{
    const contentTag = document.querySelector('#content');


    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    contentTag.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    li1.innerText = 'Home';
    li2.innerText = 'Menu';
    li3.innerText = 'Contact';

    li1.classList.add('home');
    li2.classList.add('menu');
    li3.classList.add('contact');

li1.addEventListener('click', ()=>{
    li2.classList.remove('active');
    li3.classList.remove('active');
    contentTag.innerHTML = '';
    addNav();
    pageLoad();
    li1.classList.add('active');
});

li2.addEventListener('click', ()=>{
    li1.classList.remove('active');
    li3.classList.remove('active');
    contentTag.innerHTML = '';
    addNav();
    menu();
    li2.classList.add('active');
});

li3.addEventListener('click', ()=>{
    li1.classList.remove('active');
    li2.classList.remove('active');
    contentTag.innerHTML = '';
    addNav();
    contact();
    li3.classList.add('active');
});
}
console.log('Good Morning!');
addNav();
pageLoad();