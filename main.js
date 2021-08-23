let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let Alerta =document.getElementById('Alerta');

    let hasError = false;
     

    let { inputCard, inputCVC, inputAmount, inputName, inputLastname, inputCity, select, inputZip, textArea } = form;

    if (inputCard.value === '' ){
        Alerta.classList.add('d-block')
        inputCard.classList.add('alert-danger');
        hasError = true;
    } else {
        inputCard.classList.remove('alert-danger');
        inputCard.classList.add('is-valid');
    }

    if (inputCVC.value === '') {
        Alerta.classList.add('d-block')
        inputCVC.classList.add('alert-danger');
        hasError = true;
    } else {
        inputCVC.classList.remove('alert-danger');
        inputCVC.classList.add('is-valid');
    }

    if (inputAmount.value === '') {
        Alerta.classList.add('d-block')
        inputAmount.classList.add('alert-danger');
        hasError = true;
    } else {
        inputAmount.classList.remove('alert-danger');
        inputAmount.classList.add('is-valid');
    }

    if (inputName.value === '') {
        Alerta.classList.add('d-block')
        inputName.classList.add('alert-danger');
        hasError = true;
    } else {
        inputName.classList.remove('alert-danger');
        inputName.classList.add('is-valid');
    }

    if (inputLastname.value === '') {
        Alerta.classList.add('d-block')
        inputLastname.classList.add('alert-danger');
        hasError = true;
    } else {
        inputLastname.classList.remove('alert-danger');
        inputLastname.classList.add('is-valid');
    }

    if (inputCity.value === '') {
        Alerta.classList.add('d-block')
        inputCity.classList.add('alert-danger');
        hasError = true;
    } else {
        inputCity.classList.remove('alert-danger');
        inputCity.classList.add('is-valid');
    }

    if (select.value === "Pick a State") {
        Alerta.classList.add('d-block')
        select.classList.add('alert-danger');
        hasError = true;
    } else {
        select.classList.remove('alert-danger');
        select.classList.add('is-valid');
    }

    if (inputZip.value === '') {
        Alerta.classList.add('d-block')
        inputZip.classList.add('alert-danger');
        hasError = true;
    } else {
        inputZip.classList.remove('alert-danger');
        inputZip.classList.add('is-valid');
    }


    if (textArea.value === '') {
        Alerta.classList.add('d-block')
        textArea.classList.add('alert-danger');
        hasError = true;
    } else {
        textArea.classList.remove('alert-danger');
        textArea.classList.add('is-valid');
    }

    if (!hasError) {
        form.submit();
    }

})

function onSubmit(e) {
    form.addEventListener('submit', onSubmit);
}

form.addEventListener('reset', function(evento){

    let { inputCard, inputCVC, inputAmount, inputName, inputLastname, inputCity, select, inputZip, textArea } = form;

    inputCard.classList.remove('alert-danger', 'is-valid');
    inputCVC.classList.remove('alert-danger', 'is-valid');
    inputAmount.classList.remove('alert-danger', 'is-valid');
    inputName.classList.remove('alert-danger', 'is-valid');
    inputLastname.classList.remove('alert-danger', 'is-valid');
    inputCity.classList.remove('alert-danger', 'is-valid');
    select.classList.remove('alert-danger', 'is-valid');
    inputZip.classList.remove('alert-danger', 'is-valid');
    textArea.classList.remove('alert-danger', 'is-valid');
    let Alerta =document.getElementById('Alerta');
    Alerta.classList.remove('d-block');
})

