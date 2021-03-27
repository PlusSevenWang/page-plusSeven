import BackToTop from 'components/backtotop/index.js';

const scrollContainer = document.getElementById('destination-content');
const backtotopEl = document.querySelector('.backtotop');

new BackToTop(backtotopEl, 0.5*scrollContainer.offsetHeight, scrollContainer);