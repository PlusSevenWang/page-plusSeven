import './fav-ad.css';

import {getData} from 'api/getData.js';
import render from './fav-ad.art';
import {URL} from './config.js';

const layoutEl = document.querySelector('.fav-ad .center-wrap');

getData(URL)
.then(data => {
    layoutEl.innerHTML = render({
        items: data
    });
})