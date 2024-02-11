import { divPopup, body, closeModal } from "../..";

const openModal = (e) => {
    divPopup.classList.add('open');
    body.classList.add('blockBody');
    let modalOpen = true;

    if (modalOpen) {
        closeModal.forEach(close => {
            close.addEventListener('click', (event) => {
                if (event.target === close) {
                    body.classList.remove('blockBody');
                    divPopup.classList.remove('open');
                    modalOpen = false;
                }
            })
        })
    }
}

export default openModal;