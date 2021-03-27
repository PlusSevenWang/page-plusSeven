import {getJSON} from './ajax/index.js';
import {SUCC_CODE, TIMEOUT} from './config.js';

// 获取数据
const getData = (url, options) => {
    const ajaxPromise = getJSON(url, {
        timeoutTime: TIMEOUT,
        ...options
    });
    const resultPromise = ajaxPromise
    .then(response => {
        if(response.code != SUCC_CODE) {
            throw new Error(`出错了：${response.code}`)
        }
        return response.data;
    })
    .catch(err => {
        console.log(err);
    });

    resultPromise.xhr = ajaxPromise.xhr;
    return resultPromise;
};

export {getData};