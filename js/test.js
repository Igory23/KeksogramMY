// import { createPhotoDiscription } from './setup.js';
// const createPhotos = createPhotoDiscription();
// const arr = [
//     {
//         '1': 'photos/25.jpg',
//         '2': 'photos/24.jpg',
//     },
//     {
//         '3': 'photos/27.jpg',
//         '4': 'photos/5.jpg',
//     },
//     {
//         '5': 'photos/26.jpg',
//         '6': 'photos/20.jpg',
//     },
//     {
//         '7': 'photos/26.jpg',
//         '8': 'photos/21.jpg',
//         '88': [
//             { 'a': 'ez' },
//             { 'b': 'ez2' },
//             { 'c': 'ez3' },
//         ],
//     },
//     {
//         '9': 'photos/26.jpg',
//         '10': 'photos/20.jpg',
//     },
//     {
//         '11': 'photos/26.jpg',
//         '12': 'photos/20.jpg',
//     },
// ]


// function getSliceStr(str, link = 'http://localhost:3000/') {
//     let index = 0;
//     let finalStr = '';

//     while (true) {
//         index++;
//         if (link.charAt(index) !== str.charAt(index)) {
//             break;
//         } else {
//             continue;
//         }
//     }

//     finalStr = str.slice(index)
//     return finalStr;
// }


// let x = getSliceStr('http://localhost:3000/photos/21.jpg');

// // console.log(x)

// function getPhotoData(arr, link) {
//     let obj = 0;

//     for (let index = 0; index <= arr.length - 1; index++) {
//         for (let key in arr[index]) {

//             if (arr[index][key] === link) {
//                 obj = arr[index];
//                 break;
//             }
//         }

//         if (obj !== 0) break;

//     };

//     return obj;
// }

// let test = getPhotoData(createPhotos, getSliceStr('http://localhost:3000/photos/21.jpg'));
// // console.log(test.comments)



// test.comments.forEach((element, index) => {
//     console.log(element.name, index)
//     // //     const comment = document.createElement('li');
//     // //     comment.classList.add('social__comment');

//     // //     comment.innerHTML = `<img class="social__picture" 
//     // // src="{{аватар}}" alt="{{имя комментатора}}" 
//     // // width="35" height="35"> <p class="social__text">{{текст комментария}}</p>`;

//     // //     comment.querySelector('.social__picture').src = element.avatar;
//     // //     comment.querySelector('.social__picture').alt = element.name;
//     // //     comment.querySelector('.social__text').textContent = element.message;

//     // socialComments.appendChild(comment);
//     // console.log()
// });



// console.log(xxx(test))

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






// import { createPhotos } from './HTML_Template.js';
// import { getSliceLink, getPhotoData } from './util.js';

// const body = document.querySelector('body');
// const pictures = document.querySelector('.pictures');
// const bigPicture = document.querySelector('.big-picture');
// const photoInformation = bigPicture.querySelector('.big-picture__social');
// const socialCaption = photoInformation.querySelector('.social__caption');
// const sociaLikes = photoInformation.querySelector('.social__likes .likes-count');
// const socialCommentCount = photoInformation.querySelector('.social__comment-count .comments-count');
// const socialComments = photoInformation.querySelector('.social__comments');
// const commentsCount = photoInformation.querySelector('.social__comment-count');
// const bigPictureClose = document.querySelector('.big-picture__cancel');


// // const bigPictureImg = document.querySelector('.big-picture__img img');
// // const LikesCount = photoInformation.querySelector('.likes-count');

// // const x1 = (photo) => {


// //     console.log(photo.url);
// //     bigPicture.querySelector('.big-picture__img img').src = photo.url;
// //     bigPicture.querySelector('.likes-count').textContent = photo.likes;
// //     bigPicture.querySelector('.comments-count').textContent = photo.comments.length;

// //     // return bigPicture;
// // };
// // // console.log(x1({url lickes: 'zzzz', comments: [1,2,3,4]}));
// // createPhotos.forEach((photo) => {

// //     x1(photo);

// // });

// // const x2 = ({ avatar, name, message }) => {

// //     const comment = document.createElement('li');
// //     comment.classList.add('social__comment');
// //     comment.innerHTML = `<img class="social__picture" 
// //     src="{{аватар}}" alt="{{имя комментатора}}" 
// //     width="35" height="35"> <p class="social__text">{{текст комментария}}</p>`;

// //     comment.querySelector('.social__picture').src = avatar;
// //     comment.querySelector('.social__picture').alt = name;
// //     comment.querySelector('.social__text').textContent = message;

// //     return comment;
// // };
// // console.log(x2())
// function openBigPicture () {

// }

// function closeBigPicture () {

// }


// pictures.addEventListener('click', (evt) => {
//     if (evt.target.nodeName === 'IMG') {

//         let documentFragmentForComments = document.createDocumentFragment();
//         let finishedPhotoLink = getSliceLink(evt.target.src);
//         let selectedImageData = getPhotoData(createPhotos, finishedPhotoLink)

//         bigPicture.classList.remove('hidden');
//         body.classList.add('modal-open');
//         bigPicture.querySelector('.big-picture__img img').src = finishedPhotoLink;
//         socialCaption.textContent = selectedImageData.description;
//         sociaLikes.textContent = selectedImageData.likes;
//         socialCommentCount.textContent = selectedImageData.comments.length;
//         // commentsCount.taxtContent = (selectedImageData.comments.length < 5) ? selectedImageData.comments.length: '5';
//         console.log(commentsCount);

//         selectedImageData.comments.forEach(({ avatar, name, message }) => {

//             const comment = document.createElement('li');
//             comment.classList.add('social__comment');

//             comment.innerHTML = `<img class="social__picture" 
//             src="{{аватар}}" alt="{{имя комментатора}}" 
//             width="35" height="35"> <p class="social__text">{{текст комментария}}</p>`;

//             comment.querySelector('.social__picture').src = avatar;
//             comment.querySelector('.social__picture').alt = name;
//             comment.querySelector('.social__text').textContent = message;

//             documentFragmentForComments.appendChild(comment);

//         });

//         socialComments.appendChild(documentFragmentForComments);


//         // console.log(selectedImageData);
//         // console.log(evt.target);
//     }

// });


// bigPictureClose.addEventListener('click', (evt) => {
//     evt.preventDefault();

//     socialComments.innerHTML = '';
//     bigPicture.classList.add('hidden');
//     body.classList.remove('modal-open');

// });
// _________________________

// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const hashtag = /^#[a-za-яё0-9]{1,19}$/i;
//     const isValidHashtag = hashtag.test(textHashtags.value);
//     // const isValid = checkValidationFormEditPhoto.validate();

//     if (textHashtags.value == '') {
//         console.log('валидно')
//     } else if (isValidHashtag) {
//         console.log('хэш валиден')
//     } else {
//         console.log('не валидно')
//         console.log(textHashtags.value)
//     }

// });

// function hashtagValidator(text) {

//     let returnResultFn = true;
//     let uniquenessTag = null;
//     const hashtagRule = /^#[a-za-яё0-9]{1,19}$/i;
//     const readyArray = text.toLowerCase().split(' ');

//     while (readyArray[readyArray.length - 1] === '') {
//         readyArray.pop()
//     }

//     if (text == '') {
//         console.log('валидно');
//     } else if (readyArray.length <= 5) {
//         readyArray.forEach((value, index) => {

//             if (returnResultFn == true) {

//                 for (let i = index + 1; i <= readyArray.length - 1; i++) {
//                     if (value !== readyArray[i]) {
//                         continue;
//                     } else {
//                         console.log('Повторяющийся тэг');
//                         uniquenessTag = -1;
//                         break;
//                     }
//                 }

//                 const isValidHashtag = hashtagRule.test(value);

//                 if (isValidHashtag && uniquenessTag !== -1) {
//                     console.log('хэш валиден');
//                 } else {
//                     console.log('не валидно');
//                     returnResultFn = false;
//                 }
//             }

//         });

//     } else returnResultFn = false

//     return returnResultFn;
// }

// const checkingLengthValue = (tags) => tags.length <= 5;

// const checkingTagsForUniqueness = (tags) => {
//     const lowerTags = tags.map((tag) => tag.toLowerCase());
//     return tags.length === new Set(lowerTags).size
// }

// const isVal = (tag) => {
//     const HASHTAG_RULE = /^#[a-za-яё0-9]{1,19}$/i;
//     return HASHTAG_RULE.test(tag)
// };

// const isValAllTegs = (tags) => {

//     const finalArrTegs = tags.trim().split(' ').filter(tag => tag.trim());

//     return checkingLengthValue(finalArrTegs) && 
//     checkingTagsForUniqueness(finalArrTegs) && 
//     finalArrTegs.every(isVal);
// };

// console.log(isValAllTegs('#ss #sss #s #zaaz #sfwrf #svsfb'))

// const x = 'http://localhost:3000/azazaz011';

// console.log(x.substring(22))

// function test (str1, str2) {

//     let x = String(str1.toLocaleLowerCase().split('').sort().join(' '));
//     let y = String(str2.toLocaleLowerCase().split('').sort().join(' '));

//     if ( x == y ) {
//         return true;
//     } return false

// }

// console.log(test('раки', 'ирак')) // true
// console.log(test('раки', 'поле')) // false
// console.log(test('числа', 'силач')) // true
// console.log(test('силач', 'числа')) // true
// console.log(test('гора', 'РОГА')) // true
// console.log(test('анин', 'фИна')) // true

// const xx = String('dadafae'.split('').sort().join(''));
// console.log(xx)

// const morseСodeObj = {
//     '·−': 'A', '−·−': 'К', '····': 'Х', '−···': 'Б', '·−··': 'Л', '−·−·': 'Ц', '·−−': 'В', '--': 'М',
//     '−−−·': 'Ч', '−−·': 'Г', '−·': 'Н', '----': 'Ш', '−··': 'Д', '---': 'О', '−−·−': 'Щ', '·': 'Е',
//     '·−−·': 'П', '−−·−−': 'Ъ', '·−·': 'Р', '−·−−': 'Ы', '···−': 'Ж', '···': 'С', '−··−': 'Ь',
//     '−−··': 'З', '-': 'Т', '··−··': 'Э', '··': 'И', '··−': 'У', '··−−': 'Ю', '·−−−': 'Й', '··−·': 'Ф',
//     '·−·−': 'Я',
//     };

// function xxx(obj) {

//     return function decodeMorse(morseCode) {
//         let carrent = '';
//         let finish = '';
//         let spaсeCounter = 0;

//         for (let i = 0; i <= morseCode.length; i++) {

//             if (i === morseCode.length) {

//                 finish += obj[carrent];

//             } else if (morseCode[i] === ' ' && (!spaсeCounter >= 1)) {

//                 spaсeCounter++;
//                 finish += obj[carrent];
//                 carrent = '';
//                 continue;

//             } else if ((spaсeCounter === 1 || spaсeCounter === 2) && morseCode[i] === ' ') {

//                 spaсeCounter++;
//                 continue;

//             } else if (spaсeCounter === 3) {

//                 carrent += morseCode[i];
//                 finish += ' ';
//                 spaсeCounter = 0;

//             } else if (morseCode[i] !== ' ') {

//                 spaсeCounter = 0;
//                 carrent += morseCode[i];

//             }

//         }
//         return finish;
//     }
// }

// const testing = xxx(morseСodeObj);

// console.log(testing('−··· ·− −··· ·−   −· ·· −· ·−'));