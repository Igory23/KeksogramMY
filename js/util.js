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

function checksLenghString(str, maxLengthStr) {
    return str.length <= maxLengthStr;
}

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

export { getRandomNumber, randomElementFromArray, uniqueValue };