## offset家族
	
	offset 自己的  js中有一套方便获取元素尺寸的办法就是offset家族;

	1. offset常用属性   offsetWidth offsetHeight 得到对象的宽度和高度（自己的，与他人无关）;
		offsetWidth = width + border + padding     div.style.width 只能得到行内的数值

	2. offsetLeft and offsetTop  返回距离上级盒子(带有定位)左边/上面的位置
		如果父级都没有定位则以body为准,  这里的父级指的是所有的上一级，不仅仅指的是父级元素
		offsetLeft 从父级的padding开始算 父级的border不算
		总结：就是子盒子到定位的父盒子边框到边框的距离

	3. offsetParent 返回该对象的父级（带有定位）
		返回改对象的父级 （带有定位） 不一定是亲的爸爸 
		前面学过一个返回父亲(亲的)    parentNode   有所区别
		
		1.如果当前元素的父级元素没有进行CSS定位（position为absolute或relative），offsetParent为body。
		2.如果当前元素的父级元素中有CSS定位（position为absolute或relative），offsetParent取最近的那个父级元素。

	4. offsetTop style.top 的区别
		一、最大区别在于  offsetLeft  可以返回没有定位盒子的距离左侧的位置。 而 style.top 不可以  只有定位的盒子 才有 left  top right  
		
		二、offsetTop 返回的是数字，而 style.top 返回的是字符串，除了数字外还带有单位：px。
		 style.left = 300px      parseInt（300px）    结果  300
		parseInt（style.left） + parseInt（style.left） 
 
		三、offsetTop 只读，而 style.top 可读写。
		
		四、如果没有给 HTML 元素指定过 top 样式，则 style.top 返回的是空字符串。

		五、最重要的区别  style.left 只能得到 行内样式     offsetLeft 随便


## 事件对象
	event   单词翻译过来   事件 的意思 
	event  就是事件的对象    指向的是 事件  是   onclick  
	再触发DOM上的某个事件时，会产生一个事件对象event，这个对象中包含着所有与事件有关的信息。所有浏览器都支持event对象，但支持的方式不同。
	比如鼠标操作时候，会添加鼠标位置的相关信息到事件对象中。

	普通浏览器支持 event  ie 678 支持 window.event



	1. pageX  clientX  screenX 区别
	 	screen X   screenY   
		是以我们的电脑屏幕 为基准点   测量 
	 
		pageX  pageY    
		以我们的  文档   （绝对定位）加滚动条的  的基准点 对齐       ie678 不认识        
 
		clientX   clientY
		以 可视区域 为基准点   类似于    固定定位 
 
## 防止选择拖动   
	我们知道 按下鼠标然后拖拽可以选择文字 的。 
	清除选中的内容 
	window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();




