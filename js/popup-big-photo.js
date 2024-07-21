import { getPhotoDataFromArr, isEscapeKey } from './util.js';
import { photosDataArr } from './work-server.js';

const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const photoInformation = bigPicture.querySelector('.big-picture__social');
const socialCaption = photoInformation.querySelector('.social__caption');
const sociaLikes = photoInformation.querySelector('.social__likes'); 
const sociaLikesCount = photoInformation.querySelector('.social__likes .likes-count');
const socialCommentCount = photoInformation.querySelector('.social__comment-count .comments-count');
const socialComments = photoInformation.querySelector('.social__comments');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const commentsLoaderBtn = document.querySelector('.comments-loader');
const socialCommentsLoader = document.querySelector('.social__comments-loader');

// функция с логикой отрисовки большой фотографии
const openBigPicture = (evt) => {

    let documentFragmentForComments = document.createDocumentFragment();
    let finishedPhotoLink = evt.target.src.substring(22);
    let selectedImageData = getPhotoDataFromArr(photosDataArr, finishedPhotoLink);
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    bigPicture.querySelector('.big-picture__img img').src = finishedPhotoLink;
    socialCaption.textContent = selectedImageData.description;
    sociaLikesCount.textContent = selectedImageData.likes;

    selectedImageData.comments.forEach(({ avatar, name, message }, count) => {

        count++;
        const comment = document.createElement('li');
        (count >= 6) ? comment.classList.add('social__comment', 'hidden') :
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

    socialCommentCount.textContent = `${returnsLengthNumberShownComments()}` +
    ' из ' + `${selectedImageData.comments.length}`;

    if (selectedImageData.comments.length <= 5) {
        socialCommentsLoader.classList.add('hidden');
    } else {
        commentsLoaderBtn.addEventListener('click', loadingMoreCommets);
        socialCommentsLoader.classList.remove('hidden');
    }

    bigPictureClose.addEventListener('click', closeBigPicture);
    document.addEventListener('keydown', onPopupEscKeydown);
    sociaLikes.addEventListener('click', clickLike);
    pictures.removeEventListener('click', delegation)
}

const returnsLengthNumberShownComments = () => {
    const arrCommentsOne = [...socialComments.children];
    const indexFirstHiddenElementOne = arrCommentsOne.findIndex(value => value.classList.contains('hidden'));

    if (indexFirstHiddenElementOne === -1) {
        return arrCommentsOne.length;
    } else {
        const arrHiddenElementsOne = arrCommentsOne.slice(0, indexFirstHiddenElementOne);
        return arrHiddenElementsOne.length;
    }
};

const loadingMoreCommets = () => {
    
    const arrComments = [...socialComments.children];
    const indexFirstHiddenElement = arrComments.findIndex(value => value.classList.contains('hidden'));
    const arrHiddenElements = arrComments.slice(indexFirstHiddenElement);
    const numberCommentsShow = (arrHiddenElements.length < 5) ? arrHiddenElements.length : 5;

    for (let i = 0; i < numberCommentsShow; i++) {
        arrHiddenElements[i].classList.remove('hidden');
    }

    socialCommentCount.textContent = `${returnsLengthNumberShownComments()}` + ' из ' + `${arrComments.length}`;

    (arrComments[arrComments.length - 1].classList.contains('hidden')) ?
    socialCommentsLoader.classList.remove('hidden') :
    socialCommentsLoader.classList.add('hidden');
};

// логика закрытия большой фотографии на крестик 
const closeBigPicture = () => {
    socialComments.innerHTML = '';
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    bigPictureClose.removeEventListener('click', closeBigPicture);
    commentsLoaderBtn.removeEventListener('click', loadingMoreCommets);
    sociaLikes.addEventListener('click', clickLike);
    pictures.addEventListener('click', delegation);
    // document.addEventListener('keydown', onPopupEnterKeydown);
}

// проверка нажатия на ESC
const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeBigPicture();
    }
};

const clickLike = () => {
    let likes = +(sociaLikesCount.textContent);
    
    if (sociaLikes.classList.contains('liked')) {
      likes--;
      sociaLikes.classList.remove('liked');
    } else {
        likes++;
        sociaLikes.classList.add('liked');
    }
    sociaLikesCount.textContent = likes;
  };

  const delegation = (evt) => {
    if (evt.target.nodeName === 'IMG') {
        openBigPicture(evt);
    }
};

// делегиованный обработчик события на открытие большой фото
pictures.addEventListener('click', delegation)

