const contact = () => {

    const content = document.querySelector('#content');
    const newH1 = document.createElement('h1');
    const newH1Two = document.createElement('h1');
    const newP = document.createElement('p');
    
    newH1.innerText = "Contact Us";
    newH1Two.innerHTML = '(818) 678-9326';
    newP.innerText = "The best Thai food in town!";
    
    content.appendChild(newH1);
    content.appendChild(newH1Two);
    content.appendChild(newP);
    
    };
    export { contact };