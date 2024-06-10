const commentForm = document.querySelector('.setup-comment-form');
const commentMessage = document.querySelector('.social__footer-text');

let checkValidationCommentMessage = new Pristine(commentMessage);

// проверка валидности строки коментариев
commentForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = checkValidationCommentMessage.validate();
  if (isValid) {
    alert('Можно отправлять');
  } else {
    alert('Форма невалидна');
  }
});


