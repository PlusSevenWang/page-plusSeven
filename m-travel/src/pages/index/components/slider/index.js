import 'swiper/swiper-bundle.min.css';
import './slider.css';

import Swiper from 'swiper/swiper-bundle.min.js';

import render from './slider.art';
import {getData} from 'api/getData.js';

getData('https://www.imooc.com/api/mall-wepApp/index/slider')
.then(data => {
    document.getElementById('index-slider').innerHTML = render({
        items: data
    });

    new Swiper ('.swiper-container', {
        // 循环模式选项
        loop: true, 
        // 自动滑动
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
    });
});

