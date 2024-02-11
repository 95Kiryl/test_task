'use strict'
import IMask from 'imask';
import validForm from './modules/validForm/valid';
import openModal from './modules/modal/modal';
import './styles.scss';

const phoneInput = document.querySelector('.phone'),
    form = document.querySelector('.form'),
    inputError = document.querySelectorAll('input'),
    div = document.querySelectorAll('div'),
    body = document.querySelector('body'),
    textarea = document.querySelector('#message'),
    inputForName = document.querySelector('.name'),
    inputForEmail = document.querySelector('.email'),
    btnModal = document.querySelector('.button'),
    divPopup = document.querySelector('.popup'),
    closeModal = document.querySelectorAll('#popup_close');

const mask = new IMask(phoneInput, {
    mask: '+{375}(00)000-00-00'
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    validForm(event);
});



form.addEventListener('input', (event) => {
    inputError.forEach(item => {
        if (event.target.name === item.name) {
            item.classList.remove('error');
            div.forEach(div => {
                if (div.id === item.name) {
                    div.innerHTML = '';
                }
            })
        }
    })
});

btnModal.addEventListener('click', (e) => {
    openModal(e);
})



export { phoneInput, inputError, form, textarea, inputForName, body, inputForEmail, btnModal, divPopup, closeModal };
