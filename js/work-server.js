let photosDataArr;

const getDataFromServer = (renderingFn) => {
    fetch('https://27.javascript.htmlacademy.pro/kekstagram/data')
        .then(response => response.json())
        .then(photos => {
            renderingFn(photos);
            photosDataArr = photos;
        });
};

const sendData = (onSuccess, onFail, body, fnCloseForm) => {
    fetch(
        'https://27.javascript.htmlacademy.pro/kekstagram',
        {
            method: 'POST',
            body,
        },
    )
        .then((response) => {
            if (response.ok) {
                onSuccess();
            } else {
                onFail();
            }
        })
        .catch(() => {
            onFail();
        });
};

export { getDataFromServer, sendData, photosDataArr }