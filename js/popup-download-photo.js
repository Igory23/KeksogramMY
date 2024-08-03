import { isEnterKeyAndFocused } from './util.js'

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const effects = document.querySelector('.img-upload__effects');
const slider = document.querySelector('.effect-level__slider');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const pristineError = document.querySelector('.pristine-error');
const imgUploadSubmit = document.querySelector('.img-upload__submit');
const fileChooser = document.querySelector('.img-upload__input')
const preview = document.querySelector('.img-upload__preview img')

imgUploadPreview.src = '';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const loadingImg = () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();
    const determinePhotoFormat = FILE_TYPES.some( it => fileName.endsWith(it) )

    if (determinePhotoFormat) {
        preview.src = URL.createObjectURL(file)
    }
}

// функция загрузки фото
const uploadPhotoFile = (evt) => {
    evt.preventDefault();

    loadingImg()

    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    scaleControlValue.value = '100%';
    scaleControlSmaller.disabled = false;
    imgUploadPreview.style.transform = 'scale(1.0)';
    slider.classList.add('hidden');
    imgUploadCancel.addEventListener('click', closeForm);
    document.addEventListener('keydown', closeFormEsc);
    scaleControlBigger.addEventListener('click', zoomUp);
    scaleControlSmaller.addEventListener('click', zoomOut);
}

// функция закрытие формы редактирования фото на клавишу ESC
const closeFormEsc = (evt) => {
    if (isEnterKeyAndFocused(evt) && document.body.querySelector('.rejected') == null) {
        evt.preventDefault();
        closeForm();
    }
};

// логика закрытия на крестик
const closeForm = () => {
    imgUploadOverlay.classList.add('hidden');
    pristineError.textContent = '';
    imgUploadSubmit.disabled = false;
    textHashtags.value = '';
    textDescription.value = '';
    imgUploadPreview.src = '';
    imgUploadInput.value = null;
    body.classList.remove('modal-open');
    imgUploadPreview.className = '';
    document.getElementById('effect-none').checked = true;
    imgUploadPreview.style.filter = 'none';
    imgUploadCancel.removeEventListener('click', closeForm);
    document.removeEventListener('keydown', closeFormEsc);
    scaleControlBigger.removeEventListener('click', zoomUp);
    scaleControlSmaller.removeEventListener('click', zoomOut);
};

// обработчик изменения значения формы редактирования фото
imgUploadInput.addEventListener('change', (evt) => {

    uploadPhotoFile(evt)

});

const zoomUp = () => {
    let numberZoomUp = parseInt(scaleControlValue.value, 10);

    if (numberZoomUp < 100) {
        scaleControlSmaller.disabled = false;
        scaleControlValue.value = `${numberZoomUp + 25}%`;
        imgUploadPreview.style.transform = `scale(${(numberZoomUp + 25) / 100})`;
    } else {
        scaleControlBigger.disabled = true;
    }
};

const zoomOut = () => {
    let numberZoomOut = parseInt(scaleControlValue.value, 10);

    if (numberZoomOut > 25) {
        scaleControlBigger.disabled = false;
        scaleControlValue.value = `${numberZoomOut - 25}%`;
        imgUploadPreview.style.transform = `scale(${(numberZoomOut - 25) / 100})`;
    } else {
        scaleControlSmaller.disabled = true;
    }
};

const setingsEffects = [
    {
        name: 'none',
        min: 0,
        max: 100,
        step: 1,
    },
    {
        name: 'chrome',
        style: 'grayscale',
        min: 0,
        max: 1,
        step: 0.1,
        unit: '',
    },
    {
        name: 'sepia',
        style: 'sepia',
        min: 0,
        max: 100,
        step: 0.1,
        unit: '%',
    },
    {
        name: 'marvin',
        style: 'invert',
        min: 0,
        max: 100,
        step: 1,
        unit: '%',
    },
    {
        name: 'phobos',
        style: 'blur',
        min: 0,
        max: 3,
        step: 0.1,
        unit: 'px',
    },
    {
        name: 'heat',
        style: 'brightness',
        min: 1,
        max: 3,
        step: 0.1,
        unit: '',
    },
];

effects.addEventListener('change', () => {

    const checkedRadio = effects.querySelector('.effects__radio:checked');
    const selectedEffect = setingsEffects.find(seting => checkedRadio.value === seting.name);

    if (checkedRadio.id !== 'effect-none') {
        slider.classList.remove('hidden');
    } else slider.classList.add('hidden');

    slider.noUiSlider.updateOptions({
        range: {
            min: selectedEffect.min,
            max: selectedEffect.max,
        },
        step: selectedEffect.step,
        start: selectedEffect.max,
    });

    const onSliderUpdate = () => {
        slider.value = '';
        imgUploadPreview.className = '';
        imgUploadPreview.style.filter = 'none';

        if (checkedRadio.id == 'effect-none') {
            return;
        }

        const sliderValue = slider.noUiSlider.get();
        imgUploadPreview.style.filter = `${selectedEffect.style}(${sliderValue}${selectedEffect.unit})`;
        imgUploadPreview.classList.add(`effects__preview--${selectedEffect.name}`);
        slider.value = sliderValue;
    }

    slider.noUiSlider.on('update', onSliderUpdate);

})

noUiSlider.create(slider, {
    range: {
        min: 0,
        max: 100,
    },
    start: 80,
    step: 1,
    connect: 'lower',
});

export { closeForm };