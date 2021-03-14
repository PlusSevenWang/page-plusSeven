// 添加按钮控制
const btn = {
    bindEvent(slider) {
        const leftBtn = document.getElementById('leftbtn');
        const rightBtn = document.getElementById('rightbtn');

        // 节流锁
        let lock = true;
        
        leftBtn.onclick = () => {
            if(!lock) return;
            slider.prev();
            lock = false;
            setTimeout(() => {
                lock = true;
            }, slider.options.speed)
        }

        rightBtn.onclick = () => {
            if(!lock) return;
            slider.next();
            lock = false;
            setTimeout(() => {
                lock = true;
            }, slider.options.speed)
        }
    }
};

export default btn;