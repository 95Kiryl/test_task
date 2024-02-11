import { inputError, phoneInput, form, inputForEmail, inputForName } from "../..";
import postData from "../ajax/ajax";

const validForm = (event) => {
    let statusError = false,
        errorClass = false;
    inputError.forEach((i) => {
        if (i.value === '' && !i.classList.contains('error')) {
            statusError = true;
            let errorName = i.name;
            switch (errorName) {
                case 'name':
                    inputForName.className = 'error';
                    const divErrorName = document.querySelector('.error-name');
                    divErrorName.innerHTML = 'Поле "Имя" не заполнено';
                    break;
                case 'mail':
                    inputForEmail.className = 'error';
                    const divErrorEmail = document.querySelector('.error-email');
                    divErrorEmail.innerHTML = 'Поле "Е-майл" не заполнено';
                    break;
                case 'phone':
                    phoneInput.className = 'error';
                    const divErrorPhone = document.querySelector('.error-phone');
                    divErrorPhone.innerHTML = 'Поле "Телефон" не заполнено';
                    break;
            }
            event.preventDefault();
            return;
        }
    })

    inputError.forEach(errors => {
        if (errors.classList.contains('error')) {
            errorClass = true;
        }
    })

    if (!statusError && !errorClass) {
        postData(form);
    }
}

export default validForm;
