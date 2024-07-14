import { isValAllTegs } from './util.js';

const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const imgUploadSubmit = document.querySelector('.img-upload__submit');



// document.querySelector('.img-upload__overlay').classList.remove('hidden');

// const checkValidationFormEditPhoto = new Pristine(form, {
//     classTo: 'img-upload__field-wrapper',
//     errorTextParent: 'img-upload__field-wrapper',
//     errorTextClass: 'img-upload__field-wrapper__error',
// }, true);

//проверка валидности формы редактирования фото
// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     checkValidationFormEditPhoto.validate();
//     // console.log(checkValidationFormEditPhoto.validate())
//     onFormSubmit();
//     isValAllTegs(textHashtags.value)

// });

textHashtags.addEventListener('input', () => {
    (!isValAllTegs(textHashtags.value)) ?
        imgUploadSubmit.disabled = true :
        imgUploadSubmit.disabled = false;
})

// pristine.addValidator(
//     textHashtags.value,
//     isValAllTegs,
//     'tttttttt'
// );

// const onFormSubmit = (evt) => {
//     evt.preventDefault();
//     pristine.validate()
// };

