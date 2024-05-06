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
}

pictures.addEventListener('click', (evt) => {
    if (evt.target.nodeName === 'IMG') {
        openBigPicture(evt);
    }
});

function closeBigPicture() {
    socialComments.innerHTML = '';
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    bigPictureClose.removeEventListener('click', onPopupEscKeydown);
    // document.addEventListener('keydown', onPopupEnterKeydown);
}

const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeBigPicture();
    }
};

// const onPopupEnterKeydown = (evt) => {
//     console.log(evt.target.querySelector('img'))
//     if (isEnterKey(evt)) {
//       evt.preventDefault();
//       console.log(evt.target.querySelector('img').src)
//       openBigPicture(evt.target.querySelector('img').src);
//     }
// };

// bigPictureClose.addEventListener('click', () => {
//     closeBigPicture();
// });

// pictures.addEventListener('keydown', (evt) => {
//     // if (isEnterKey(evt)) { 
//         onPopupEnterKeydown(evt);
//     // }
// });

// bigPictureClose.addEventListener('keydown', (evt) => {
//     if (isEscapeKey(evt)) {
//         onPopupEscKeydown(evt);
//     }
// });

// const x1 = (photo) => {

//     console.log(photo.url);
//     bigPicture.querySelector('.big-picture__img img').src = photo.url;
//     bigPicture.querySelector('.likes-count').textContent = photo.likes;
//     bigPicture.querySelector('.comments-count').textContent = photo.comments.length;

//     // return bigPicture;
// };
// // console.log(x1({url lickes: 'zzzz', comments: [1,2,3,4]}));
// createPhotos.forEach((photo) => {

//     x1(photo);

// });

// const x2 = ({ avatar, name, message }) => {

//     const comment = document.createElement('li');
//     comment.classList.add('social__comment');
//     comment.innerHTML = `<img class="social__picture" 
//     src="{{аватар}}" alt="{{имя комментатора}}" 
//     width="35" height="35"> <p class="social__text">{{текст комментария}}</p>`;

//     comment.querySelector('.social__picture').src = avatar;
//     comment.querySelector('.social__picture').alt = name;
//     comment.querySelector('.social__text').textContent = message;

//     return comment;
// };
// console.log(x2())