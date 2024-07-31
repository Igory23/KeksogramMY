// import { createPhotoDiscription } from './setup.js';
const filters = document.querySelector('.img-filters');
const photoTemplateContent = document.getElementById('picture').content;
const pictures = document.querySelector('.pictures');

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
    filters.classList.remove('img-filters--inactive');
};

// photoRendering(createPhotos);

export  { photoRendering };
