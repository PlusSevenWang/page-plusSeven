import './main.css';

import renderInfo from './item-info.art';
import renderIntro from './item-intro.art';
import { getData } from 'api/getData.js';

const URL = 'https://www.imooc.com/api/mall-wepApp/details/';
const id = window.location.search.split('id=')[1][0];

getData(`${URL}${id}`)
.then(data => {
    const mainImg = document.getElementById('main-img');
    mainImg.innerHTML = '';
    mainImg.style.background = `url(${data.img}) no-repeat`;
    mainImg.style.backgroundSize = 'cover';

    document.getElementById('main-info-content').innerHTML = renderInfo(data);

    document.getElementById('main-intro-text').innerHTML = renderIntro(data);
})