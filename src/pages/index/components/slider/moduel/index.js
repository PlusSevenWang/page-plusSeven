import BaseSlider from './base.js';
import btn from './btn.js';

// 继承基类
class Slider extends BaseSlider {
  constructor(el, options) {
    super(el, options);

    this.bindEvent();
  }

  bindEvent() {
    btn.bindEvent(this);
  }
}

export default Slider;
