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

function checksLengthString(str, maxLengthStr) {
    return str.length <= maxLengthStr;
}




