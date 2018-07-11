// 函数，处理innerText 和 textContent的兼容问题

// 获取元素之间的内容
function getInnerText(ele){
    // 判断ele是否支持innerText
    if(typeof ele.innerText === 'string'){
        return ele.innerText;
    }else {
        return ele.textContent;
    }
}

// 设置元素之间的内容
function setInnerText(ele,content){
    if(typeof ele.innerText === 'string'){
        ele.innerText = content;
    }else {
        ele.textContent = content;
    }
}
