let photosDataArr;

const getDataFromServer = (cb) => {
    fetch('https://27.javascript.htmlacademy.pro/kekstagram/data')
        .then(response => response.json())
        .then(photos => {
            cb(photos);
            photosDataArr = photos;
        });
};


const sendData = (onSuccess, onFail, body) => {
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