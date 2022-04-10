console.log(window)
console.dir(document)

//drill down, need changes this query when html structure changed 
//document.body.children[2].children[0].href = 'https://www.google.com/';
//get element by id
document.getElementById("external-link").href = 'https://www.youtube.com/';
//query with css selector
//selects the first element that match.
document.querySelector('p a').href = 'https://www.facebook.com/'; // p a {color:red}
//selects all elements that match.
document.querySelectorAll('p a').href = 'https://www.facebook.com/';


//!adding new html element
let newAnchorElement = document.createElement('a'); //created on the memory not visible on the page
newAnchorElement.href = 'https://www.google.com/';
newAnchorElement.textContent = '->    go to google';

let firstParagraph = document.querySelector('p'); //find parent element

firstParagraph.append(newAnchorElement); //insert to parent element

//!deleting html element
let fistH1Element = document.querySelector('h1');

fistH1Element.remove();
//fistH1Element.parentElement.removeChild(fistH1Element); same job for the old browsers


//!move existing element
let firstP = document.querySelector('p');
firstP.parentElement.append(firstParagraph);

//!inner HTML
firstP.textContent = 'Hi <strong> bold </strong>'; //  is just a string
firstP.innerHTML = 'Hi <strong> bold </strong>';// is have bold text