import {createPhotoDiscription} from './setup.js';

const photoTemplateContent = document.getElementById('picture').content;
const photoTemplate = document.getElementById('picture');

const createPhotos = createPhotoDiscription();
const documentFragment = document.createDocumentFragment();

createPhotos.forEach(({url, likes, comments}) => {

const photoElement = photoTemplateContent.cloneNode(true);

photoElement.querySelector('.picture__img').src = url;
photoElement.querySelector('.picture__comments').textContent = comments.length;
photoElement.querySelector('.picture__likes').textContent = likes;

documentFragment.appendChild(photoElement)
});

photoTemplate.appendChild(documentFragment);