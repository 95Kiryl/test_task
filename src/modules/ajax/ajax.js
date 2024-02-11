import { textarea, inputError } from "../../index.js";

const postData = (form) => {
    const request = new XMLHttpRequest();

    request.open('POST', 'http://localhost:9090/api/registration');
    request.setRequestHeader('Content-type', 'aplication/json');
    const formData = new FormData(form);

    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });

    const json = JSON.stringify(object);

    request.send(json);

    request.addEventListener('load', () => {
        let answer = JSON.parse(request.response);

        if (answer.status === 'success') {
            inputError.forEach(error => error.value = '');
            textarea.innerHTML = 'Ваша заявка успешно отправлена';
        } else {
            textarea.innerHTML = 'Упс, что-то пошло не так... перезагрузите страницу и попробуйте снова';
        }
    });

}

export default postData;

