import './content.css';
import render from './content.art';
import renderLoading from 'components/loading/loading.art';

class Content {
    constructor(el) {
        this.el = el;
    }

    // 获取数据
    set(data) {
        this.el.innerHTML = render({
            items: data
        });
    }

    // 填充加载中页面
    setLoading() {
        this.el.innerHTML = renderLoading();
    }
}

export default Content;