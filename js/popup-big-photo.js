import { createPhotos } from './HTML_Template.js';
import { getSliceLink, getPhotoData, isEscapeKey } from './util.js';

const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const photoInformation = bigPicture.querySelector('.big-picture__social');
const socialCaption = photoInformation.querySelector('.social__caption');
const sociaLikes = photoInformation.querySelector('.social__likes .likes-count');
const socialCommentCount = photoInformation.querySelector('.social__comment-count .comments-count');
const socialComments = photoInformation.querySelector('.social__comments');
const commentsCount = photoInformation.querySelector('.social__comment-count');
const bigPictureClose = document.querySelector('.big-picture__cancel');
// const bigPictureImg = document.querySelector('.big-picture__img img');
// const LikesCount = photoInformation.querySelector('.likes-count');

// функция с логикой отрисовки большой фотографии
function openBigPicture(evt) {

    let documentFragmentForComments = document.createDocumentFragment();
    let finishedPhotoLink = getSliceLink(evt.target.src);
    let selectedImageData = getPhotoData(createPhotos, finishedPhotoLink)

    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    bigPicture.querySelector('.big-picture__img img').src = finishedPhotoLink;
    socialCaption.textContent = selectedImageData.description;
    sociaLikes.textContent = selectedImageData.likes;
    socialCommentCount.textContent = selectedImageData.comments.length;
    // commentsCount.taxtContent = (selectedImageData.comments.length < 5) ? 
    // selectedImageData.comments.length: '5';
    // console.log(commentsCount);

    selectedImageData.comments.forEach(({ avatar, name, message }) => {

        const comment = document.createElement('li');
        comment.classList.add('social__comment');

        comment.innerHTML = `<img class="social__picture" 
        src="{{аватар}}" alt="{{имя комментатора}}" 
        width="35" height="35"> <p class="social__text">{{текст комментария}}</p>`;

        comment.querySelector('.social__picture').src = avatar;
        comment.querySelector('.social__picture').alt = name;
        comment.querySelector('.social__text').textContent = message;

        documentFragmentForComments.appendChild(comment);

    });

    socialComments.appendChild(documentFragmentForComments);
    // document.removeEventListener('keydown', onPopupEnterKeydown);
    bigPictureClose.addEventListener('click', closeBigPicture);
    document.addEventListener('keydown', onPopupEscKeydown);
    pictures.removeEventListener('click', delegation)
}

// логика закрытия большой фотографии на крестик 
const closeBigPicture = () => {
    socialComments.innerHTML = '';
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    bigPictureClose.removeEventListener('click', closeBigPicture);
    pictures.addEventListener('click', delegation)
    // document.addEventListener('keydown', onPopupEnterKeydown);
}

// проверка нажатия на ESC
const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeBigPicture();
    }
};

const delegation = (evt) => {
    if (evt.target.nodeName === 'IMG') {
        openBigPicture(evt);
    }
};

// делегиованный обработчик события на открытие большой фото
pictures.addEventListener('click', delegation)
