import Header from 'components/header/index.js';
import 'components/searchbox/index.js';

const scrollContainer = document.getElementById('index-page');
const headerEl = scrollContainer.querySelector('.header');

new Header(headerEl, 0, scrollContainer);