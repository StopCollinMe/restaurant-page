const menu = () => {

    const content = document.querySelector('#content');
    const newH1 = document.createElement('h1');
    const newP = document.createElement('p');
    const newImg = document.createElement('img');

    newH1.innerText = "Menu";
    newP.innerText = "The best Thai food in town!";
    newImg.src = 'https://www.menupix.com/menu_img/20180822b19176zy_01.jpg';
    content.appendChild(newH1);
    content.appendChild(newP);
    content.appendChild(newImg);
    };
    export { menu };