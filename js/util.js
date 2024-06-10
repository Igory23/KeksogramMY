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


// функция обрезки строки 

function getSliceLink(str = evt.target.querySelector('img'), src = 'http://localhost:3000/') {
    let index = 0;
    let finalStr = '';

    while (true) {
        index++;
        if (src.charAt(index) !== str.charAt(index)) {
            break;
        } else {
            continue;
        }
    }

    finalStr = str.slice(index)
    return finalStr;
}

// Находит нужный объект в массиве объектов по src значению

function getPhotoData(arr, src) {
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

export {
    getRandomNumber, randomElementFromArray,
    uniqueValue, getSliceLink, getPhotoData, isEscapeKey, isEnterKey,
    isEnterKeyAndFocused, isValAllTegs
};

// // проверят валидность строки
// function hashtagValidator(text) {

//     let returnResultFn = true;
//     let uniquenessTag = null;
//     const hashtagRule = /^#[a-za-яё0-9]{1,19}$/i;
//     const readyArray = text.toLowerCase().split(' ');

//     while (readyArray[readyArray.length - 1] === '') {
//         readyArray.pop()
//     }
//     //прочитать как убрать все пробелы вконце строки и заменить фрагмент сверху 

//     if (text == '') {
//         console.log('валидно');
//     } else if (readyArray.length <= 5) {
//         returnResultFn = true;
//         console.log('все хорошо')
//         readyArray.forEach((value, index) => {
            
//             if (returnResultFn == true) {

//                 for (let i = index + 1; i <= readyArray.length - 1; i++) {
//                     if (value !== readyArray[i]) {
//                         continue;
//                     } else {
//                         console.log('Повторяющийся тэг');
//                         // pristine.addError(input, 'Повторяющийся тэг')
//                         uniquenessTag = -1;
//                         break;
//                     }
//                 }

//                 const isValidHashtag = hashtagRule.test(value);

//                 if (isValidHashtag && uniquenessTag !== -1) {
//                     console.log('хэш валиден');
//                 } else {
//                     console.log('не валидно');
//                     returnResultFn = false;
//                 }
//             }

//         });

//     } else returnResultFn = false;

//     return returnResultFn;
// }
