import './nav.css';

import render from './nav.art';
import {getData} from 'api/getData.js';

getData('https://www.imooc.com/api/mall-wepApp/index/nav')
.then(data => {
    document.getElementById('index-nav').innerHTML = render({
        items: data
    });
})