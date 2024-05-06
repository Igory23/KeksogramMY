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

export { getRandomNumber, randomElementFromArray, uniqueValue, getSliceLink, getPhotoData, isEscapeKey, isEnterKey };