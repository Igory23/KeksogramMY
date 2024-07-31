// Генератор случайных целых чисел.

function getRandomNumber(a = 0, b = 50) {
    if (a < 0 || b < 0) {
        return NaN;
    }

    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result)
}


// Мониторинг длины строки. 

// function checksLenghString(str, maxLengthStr) {
//     return str.length <= maxLengthStr;
// }

// Случайный элемент массива

let randomElementFromArray = array => array[getRandomNumber(0, array.length - 1)];

// Массив из уникальных значений (перемешан)

function uniqueValue(min = 1, max = 20) {
    let arrayNumber = [];
    for (let i = min; i <= max; i++) {
        arrayNumber.push(i);
    }
    arrayNumber.sort(() => Math.random() - 0.5);

    return arrayNumber;
}

// Находит нужный объект в массиве объектов по src значению
function getPhotoDataFromArr(arr, src) {
    let obj = 0;

    for (let index = 0; index <= arr.length - 1; index++) {
        for (let key in arr[index]) {

            if (arr[index][key] === src) {
                obj = arr[index];
                break;
            }
        }

        if (obj !== 0) break;

    };

    return obj;
}

// проверка нажатия клавиши 
const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

// проверка фокусирования в полях ввода при нажатии на ESC. Если фокус - отменить закрытие формы
const isEnterKeyAndFocused = (evt) => {
    return (evt.key === 'Escape' && 
    !(document.activeElement.className === 'text__hashtags' ||
    document.activeElement.className === 'text__description'))
};

const checkingLengthValue = (tags) => tags.length <= 5;

const checkingTagsForUniqueness = (tags) => {
    const lowerTags = tags.map((tag) => tag.toLowerCase());
    return tags.length === new Set(lowerTags).size
}

const isVal = (tag) => {
    const HASHTAG_RULE = /^#[a-za-яё0-9]{1,19}$/i;
    return HASHTAG_RULE.test(tag)
};

//Проверяет валидность тегов 
const isValAllTegs = (tags) => {

    const finalArrTegs = tags.trim().split(' ').filter(tag => tag.trim());
    
    return checkingLengthValue(finalArrTegs) && 
    checkingTagsForUniqueness(finalArrTegs) && 
    finalArrTegs.every(isVal);
};

const showAlertOnSuccess = (template) => {

    const templateOnSuccess = template.cloneNode(true);
    templateOnSuccess.querySelector('.success').classList.add('alert');
    const windowSuccess = templateOnSuccess.querySelector('.alert');
    const successButton = templateOnSuccess.querySelector('.success__button');

    document.body.appendChild(templateOnSuccess);

    const removeAllEvt = () => {
        document.removeEventListener('keydown', closeAlertSuccessOnEscKey);
        successButton.removeEventListener('click', closeAlertSuccessBtn);
        document.removeEventListener('click', clickedOutsideWindow);
    };

    const closeAlertSuccessBtn = () => {
        windowSuccess.remove();
        removeAllEvt();
    };

    const closeAlertSuccessOnEscKey = (evt) => {
        if (isEscapeKey(evt) && windowSuccess) {
            windowSuccess.remove();
            removeAllEvt();
        }
    };

    const clickedOutsideWindow = (evt) => {
        if (evt.target.classList.contains('success') && windowSuccess) {
            windowSuccess.remove();
            removeAllEvt();
        }
    };

    successButton.addEventListener('click', closeAlertSuccessBtn);
    document.addEventListener('keydown', closeAlertSuccessOnEscKey);
    document.addEventListener('click', clickedOutsideWindow);

    setTimeout(() => {
        if (windowSuccess) {
            windowSuccess.remove();
        }
   
    }, 3000);
};

const showAlertOnReject = (template) => {

    const templateOnReject = template.cloneNode(true);
    templateOnReject.querySelector('.error').classList.add('rejected');
    const windowRejected = templateOnReject.querySelector('.rejected');
    const btnCloseWindowRejected = templateOnReject.querySelector('.error__button');

    document.body.appendChild(templateOnReject);

    const removeAllEvt = () => {
        btnCloseWindowRejected.removeEventListener('click', closeAlertRejectedBtn);
        document.removeEventListener('keydown', closeAlertRejectedOnEscKey);
        document.removeEventListener('click', clickedOutsideWindow);
    };

    const closeAlertRejectedBtn = () => {
        windowRejected.remove();
        removeAllEvt();
    };

    const closeAlertRejectedOnEscKey = (evt) => {
        if (isEscapeKey(evt) && windowRejected) {
            windowRejected.remove();
            removeAllEvt();
        }
    };

    const clickedOutsideWindow = (evt) => {
        if (evt.target.classList.contains('rejected') && windowRejected) {
            windowRejected.remove();
            removeAllEvt();
        }
    };

    btnCloseWindowRejected.addEventListener('click', closeAlertRejectedBtn);
    document.addEventListener('keydown', closeAlertRejectedOnEscKey);
    document.addEventListener('click', clickedOutsideWindow);

    setTimeout(() => {
        if (windowRejected) {
            windowRejected.remove();
        }
    }, 3000);

};

function debounce (callback, timeoutDelay = 300) {

    let timeoutId;

    return (...rest) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
  
}

export {
    getRandomNumber, randomElementFromArray,
    uniqueValue, getPhotoDataFromArr, isEscapeKey, isEnterKey,
    isEnterKeyAndFocused, isValAllTegs, showAlertOnSuccess,
    showAlertOnReject, debounce
}
