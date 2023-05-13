const pageLoad = () => {

const content = document.querySelector('#content');
const newImg = document.createElement('img');
const newH1 = document.createElement('h1');
const newP = document.createElement('p');

newH1.innerText = "Chutamas";
newImg.src = 'https://lh3.googleusercontent.com/p/AF1QipMvTd2DhwN6WWudeo2RqLxrjfRmtX8s2SRvb3OV=s1360-w1360-h1020';
newP.innerText = "The best Thai food in town!";

content.appendChild(newH1);
content.appendChild(newImg);
content.appendChild(newP);

};
export { pageLoad };