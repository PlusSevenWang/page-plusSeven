import './slider.css';
import './btn.css';

import Slider from './moduel/index.js';

// 实例化
const slider = new Slider(document.querySelector('.slider'), {autoplay: 2500});

// 鼠标移入暂停 移出恢复
const banner = document.getElementById('banner');

banner.onmouseenter = () => {
    slider.pause();
}

banner.onmouseleave = () => {
    slider.autoplay();
}


