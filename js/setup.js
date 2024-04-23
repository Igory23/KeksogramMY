import { getRandomNumber, randomElementFromArray, uniqueValue } from './util.js';
import { DISCRIPTION, MESSAGE, NAME_USER } from './data.js';

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
let createPhotoDiscription = () => Array.from({ length: 10 }, photoInformation)

export { createPhotoDiscription };