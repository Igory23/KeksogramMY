import { photoRendering } from './HTML_Template.js';
import './popup-big-photo.js';
import './form-coment.js';
import { setUserFormSubmit } from './form-download-photo.js';
import { closeForm } from './popup-download-photo.js';
import { getDataFromServer } from './work-server.js';


getDataFromServer(photoRendering);

setUserFormSubmit(closeForm);


