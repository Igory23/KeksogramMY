import './popup-big-photo.js';
import './form-coment.js';
import { getEventsListenerFilter } from './filter.js';
import { photoRendering } from './HTML_Template.js';
import { setUserFormSubmit } from './form-download-photo.js';
import { closeForm } from './popup-download-photo.js';
import { getDataFromServer } from './work-server.js';
import { debounce } from './util.js';


getDataFromServer(photos => {
    photoRendering(photos);
    getEventsListenerFilter(
        debounce(() => { photoRendering(photos.slice().sort((a, b) =>
            b.comments.length - a.comments.length)) }),

        debounce(() => { photoRendering(photos.slice().sort(() => 
            Math.random() - 0.5).slice(0, 10)) }),

        debounce(() => { photoRendering(photos) })
    );
});

setUserFormSubmit(closeForm);
