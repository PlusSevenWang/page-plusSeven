import BackToTop from 'components/backtotop/index.js';

const scrollContainer = document.getElementById('index-page');
const backtotopEl = scrollContainer.querySelector('.backtotop');

new BackToTop(backtotopEl, 0.5*window.innerHeight, scrollContainer);