const prodcutNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = prodcutNameInputElement.maxLength;

function updateRemainingCharacters(event){
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    
    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters; 

    if(remainingCharacters <= 10){
        remainingCharsElement.classList.add('warning');
        prodcutNameInputElement.classList.add('warning');
    }else{
        remainingCharsElement.classList.remove('warning');
        prodcutNameInputElement.classList.remove('warning');
    }

}

prodcutNameInputElement.addEventListener('input', updateRemainingCharacters);