import './ddwl.css';

import {getData} from 'api/getData.js';
import render from './items.art';
import {URL} from './config.js';

const layoutEl = document.querySelector('.ddwl .bd');

getData(URL)
.then(data => {
    layoutEl.innerHTML = render(data);
})