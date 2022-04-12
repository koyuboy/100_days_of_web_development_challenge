// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const removeButton = document.querySelector('body section button');
//    - Select the second button by using an "id"
const addButton = document.getElementById('add-button');
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
removeButton.addEventListener('click', removePElement);
addButton.addEventListener('click', changeBackgroundColorWithClass);
//    - Output the first button by using the variable in which it's stored
function printDirVariable(){
    console.dir(removeButton);
}
//    - Output the second button WITHOUT using the variable in which it's stored
function printDirEvent(event){
    console.dir(event.target);
}
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
let firstP = document.body.children[2].children[1];
// let thirdP = document.body.children[2].children[3];
let thirdP = firstP.nextElementSibling.nextElementSibling;
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
function removePElement(){
    thirdP.remove();
}
//    - The second button changes the background color of the first paragraph to blue
function changeBackgroundColor(){
    firstP.style.backgroundColor = 'blue';
}
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
function changeBackgroundColorWithClass(){
    if(firstP.classList.contains('changeColor')){
        firstP.classList.remove('changeColor');
    }else{
        firstP.classList.add('changeColor');
    }
}