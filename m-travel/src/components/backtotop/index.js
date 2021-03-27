import './backtotop.css';
import 'icons/iconfont.css';

class BackToTop {
    constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {
        // 目标元素
        this.el = el;
        // 滚动临界点
        this.critical_point = critical_point;
        // 滚动条所在容器
        this.scrollContainer = scrollContainer;
        // 监听滚动事件的元素
        this.eventEl = eventEl;

        this.setState(false);
        this.bindEvent();
    }

    // 设置状态
    setState(state) {
        this.state = state;
    }

    // 绑定事件
    bindEvent() {
        this.eventEl.addEventListener('scroll', () => {
            if(!this.state && this.scrollContainer.scrollTop > this.critical_point) {
                this.el.classList.remove('backtotop-hidden');
                this.setState(true);
            } else if(this.state && this.scrollContainer.scrollTop <= this.critical_point) {
                this.el.classList.add('backtotop-hidden');
                this.setState(false);
            }
        }, false);

        this.el.addEventListener('click', () => {
            this.scrollContainer.scrollTo({top:0, left:0, behavior:'smooth'});
        }, false);
    } 
}

export default BackToTop;