import './main.css';
import Tab from '../tab/index.js';
import Content from '../content/index.js';
import 'components/loading/index.js';
import {set, get} from 'utils/sessionStorage';

const tabEl = document.querySelector('.tab');
const tab = new Tab(tabEl);
const content = new Content(document.getElementById('destination-content'));
const itemEls = tabEl.querySelectorAll('.tab-item');

tabEl.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() == 'li') {
        // 索引
        const index = e.target.getAttribute('data-id') - 1;

        const storageName = `destination_content_${index}`;
        const storageContent = get(storageName);
        if(storageContent) {
            // 若存在本地数据，使用不再发送请求，使用本地数据
            tab.setActiveItem(index);
            content.set(storageContent);
        } else {
            // 不存在本地数据则发送请求
            const tabPromise = tab.to(index);
            // 获取到数据前，先使用loading页面
            content.setLoading();
            tabPromise.then(data => {
                content.set(data);
                // 讲数据保存在本地
                set(storageName,data);
            });
        }
    }
}, false);

// 初始为index=0的标签
itemEls[0].click();
