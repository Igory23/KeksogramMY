// import { createPhotoDiscription } from './setup.js';

const photoTemplateContent = document.getElementById('picture').content;
const pictures = document.querySelector('.pictures');

// подставление моковых данных в шаблон и дальнейшая отрисовка на странице
const photoRendering = (photoData) => {

    const documentFragment = document.createDocumentFragment();

    photoData.forEach(({ url, likes, comments }) => {

        const photoElement = photoTemplateContent.cloneNode(true);

        photoElement.querySelector('.picture__img').src = url;
        photoElement.querySelector('.picture__comments').textContent = comments.length;
        photoElement.querySelector('.picture__likes').textContent = likes;


        documentFragment.appendChild(photoElement);
    });

    pictures.appendChild(documentFragment);

};

// photoRendering(createPhotos);


export  { photoRendering };
