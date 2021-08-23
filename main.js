let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
})

let hasError = false;

let { inputCard, inputCVC, inputAmount, inputName, inputLastname, inputCity, select, textArea}