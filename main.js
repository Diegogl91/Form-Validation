let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();


    let hasError = false;

    let { inputCard, inputCVC, inputAmount, inputName, inputLastname, inputCity, select, textArea } = form;

    if (inputCard.value === '') {
        inputCard.classList.add('alert-danger');
        hasError = true;
    } else {
        inputCard.classList.remove('alert-danger');
        inputCard.classList.add('is-valid');
    }

    if (inputCVC.value === '') {
        inputCVC.classList.add('alert-danger');
        hasError = true;
    } else {
        inputCVC.classList.remove('alert-danger');
        inputCVC.classList.add('is-valid');
    }

    if (inputAmount.value === '') {
        inputAmount.classList.add('alert-danger');
        hasError = true;
    } else {
        inputAmount.classList.remove('alert-danger');
        inputAmount.classList.add('is-valid');
    }

    if (inputName.value === '') {
        inputName.classList.add('alert-danger');
        hasError = true;
    } else {
        inputName.classList.remove('alert-danger');
        inputName.classList.add('is-valid');
    }

    if (inputLastname.value === '') {
        inputLastname.classList.add('alert-danger');
        hasError = true;
    } else {
        inputLastname.classList.remove('alert-danger');
        inputLastname.classList.add('is-valid');
    }

    if (inputCity.value === '') {
        inputCity.classList.add('alert-danger');
        hasError = true;
    } else {
        inputCity.classList.remove('alert-danger');
        inputCity.classList.add('is-valid');
    }

    if (select.value === '') {
        select.classList.add('alert-danger');
        hasError = true;
    } else {
        select.classList.remove('alert-danger');
        select.classList.add('is-valid');
    }

    if (textArea.value === '') {
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

