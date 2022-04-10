//? events

let paragraphElement = document.querySelector('p');

function changeParagraphText(){
    if(paragraphElement.textContent != 'Clicked!'){
        paragraphElement.textContent = 'Clicked!';
    }else{
        paragraphElement.textContent = 'Click Me!';
    }
}

paragraphElement.addEventListener('click', changeParagraphText);


let inputElement = document.querySelector('input');

function retrieveUserInput(event){
    //let enteredText = inputElement.value; //!full word
    let enteredText = event.target.value; //!full word
    //let enteredText = event.data; //!only clicked character
}

inputElement.addEventListener('input', retrieveUserInput);