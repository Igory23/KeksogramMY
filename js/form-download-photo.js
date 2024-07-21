import { isValAllTegs, showAlertOnSuccess, showAlertOnReject } from './util.js';
import { sendData } from './work-server.js';

const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const imgUploadSubmit = document.querySelector('.img-upload__submit');
const pristineError = document.querySelector('.pristine-error');
const successContentMessage = document.getElementById('success').content;
const errorContentMessage = document.getElementById('error').content;
let isVal = true;

// document.querySelector('.img-upload__overlay').classList.remove('hidden');

const checkValidationFormEditPhoto = new Pristine(form, {
    classTo: 'setup-form__element',
    errorTextParent: 'setup-form__element',
    errorTextClass: 'img-upload__field-wrapper__error',
});

checkValidationFormEditPhoto.addValidator(textHashtags, function (value) {
    if (isValAllTegs(value)) {
        console.log('true')
        isVal = true;
    } else {
        console.log('false')
        isVal = false;
    }
})

const blockSubmitButton = () => {
    imgUploadSubmit.disabled = true;
    imgUploadSubmit.textContent = 'Отправка...';
};

const unblockSubmitButton = () => {
    imgUploadSubmit.disabled = false;
    imgUploadSubmit.textContent = 'Опубликовать';
};

// проверка валидности формы редактирования фото
const setUserFormSubmit = (fnCloseForm) => {
    form.addEventListener('submit', (evt) => {

        if (isVal) {
            blockSubmitButton();
            evt.preventDefault();
            sendData(
                () => {
                    showAlertOnSuccess(successContentMessage)
                    unblockSubmitButton()
                    fnCloseForm()
                },
                () => {
                    showAlertOnReject(errorContentMessage)
                    unblockSubmitButton()
                },
                new FormData(evt.target),
                fnCloseForm
            )
        }
    });
};

textHashtags.addEventListener('input', () => {

    if (!isVal) {
        imgUploadSubmit.disabled = true;
        pristineError.textContent = 'В поле есть невалидный тэг';
    } else {
        imgUploadSubmit.disabled = false;
    }

});

export { setUserFormSubmit };