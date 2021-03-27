import './tab.css';

import {getData} from 'api/getData.js';

const URL = 'https://www.imooc.com/api/mall-wepApp/destination/content/';

class Tab {
    constructor(el) {
        this.itemEls = el.querySelectorAll('.tab-item');
    }

    // 设置被选中
    setActiveItem(index) {
        for(const itemEl of this.itemEls) {
            itemEl.classList.remove('tab-item-active');
        }
        this.itemEls[index].classList.add('tab-item-active');
    }

    // 切换选项，发送请求
    to(index) {
        // 取消上一次的请求
        if(this.dataPromise && this.dataPromise.xhr) {
            this.dataPromise.xhr.abort();
        }
        this.setActiveItem(index);
        this.dataPromise = getData(`${URL}${this.itemEls[index].dataset.id}`);
        return this.dataPromise;
    }
}

export default Tab;