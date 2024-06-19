import { isEnterKeyAndFocused } from './util.js'

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');

// функция загрузки фото
const uploadPhotoFile = (evt) => {
    evt.preventDefault();
    const reader = new FileReader();
    reader.onload = function () {
        imgUploadPreview.src = reader.result;
        imgUploadPreview.style.display = 'block';
    }
    reader.readAsDataURL(evt.target.files[0]);
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    imgUploadCancel.addEventListener('click', closeForm);
    document.addEventListener('keydown', clouseFormEsc);
}

// функция закрытие формы редактирования фото на клавишу ESC
const clouseFormEsc = (evt) => {
    if (isEnterKeyAndFocused(evt)) {
        evt.preventDefault();
        imgUploadOverlay.classList.add('hidden');
        imgUploadPreview.src = '';
        imgUploadInput.value = null;
        body.classList.remove('modal-open');
        imgUploadCancel.removeEventListener('click', closeForm);
        document.removeEventListener('keydown', clouseFormEsc);
    }
};

// логика закрытия на крестик
const closeForm = () => {
    imgUploadOverlay.classList.add('hidden');
    imgUploadPreview.src = '';
    imgUploadInput.value = null;
    body.classList.remove('modal-open');
    imgUploadCancel.removeEventListener('click', closeForm);
    document.removeEventListener('keydown', clouseFormEsc);
};

// обработчик изменения значения формы редактирования фото
imgUploadInput.addEventListener('input', (evt) => {
    evt.preventDefault();
    uploadPhotoFile(evt)
});
