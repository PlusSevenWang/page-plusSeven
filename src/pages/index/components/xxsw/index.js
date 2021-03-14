import './xxsw.css';

import {getData} from 'api/getData.js';
import {URL} from './config.js';
import render from './items.art';

const layoutEl = document.querySelector('.xxsw .bd');

getData(URL)
.then(data => {
    layoutEl.innerHTML = render({
        items: data
    });
})