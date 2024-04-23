const DISCRIPTION = [
    'Ваше мнение по этому поводу ?',
    'Просто классные моменты :)',
    'Такое не каждый день увидишь!',
    'Этот год запомнится надолго...',
    'Немного неудачный кадр, но какой редкий !!!',
];


const MESSAGE = [
    'Всё отлично!',

    'В целом всё неплохо. Но не всё.',

    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',

    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',

    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',

    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME_USER = [
    'Иван',
    'Артем',
    'Глеб',
    'Светлана',
    'Мирослав',
    'Наталья',
    'Татьяна',
    'Вероника',
];


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

const idPhotoNumber = uniqueValue(1, 25);
const urlNumber = uniqueValue(1, 25);
const idComments = uniqueValue(1, 25);

// Скелет комментария 
const functionComments = () => ({
    id: idComments.pop(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: randomElementFromArray(MESSAGE),
    name: randomElementFromArray(NAME_USER),
    });

// Скелет описания фотографии пользователя
let photoInformation = () => ({
    id: idPhotoNumber.pop(),
    url: `photos/${urlNumber.pop()}.jpg`,
    description: DISCRIPTION[getRandomNumber(0, DISCRIPTION.length - 1)],
    likes: getRandomNumber(15, 200),
    coments: randomElementFromArray(Array.from({ length: 1 }, functionComments)),
});

// Создаем массив из скелета описания фотографий 
let x = Array.from({ length: 10 }, photoInformation)
console.log(x)


