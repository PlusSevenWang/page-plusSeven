import './header.css';

class Header {
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
                this.el.classList.add('header-transition');
                this.setState(true);
            } else if(this.state && this.scrollContainer.scrollTop <= this.critical_point) {
                this.el.classList.remove('header-transition');
                this.setState(false);
            }
        }, false);
    } 
}

export default Header;