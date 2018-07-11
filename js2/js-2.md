### DOM 文档对象模型

> 1.6.1	DOM 定义:DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让js操作html元素而制定的一个规范。

#### 1. 访问节点 getElementById()  id 访问节点   getElementsByTagName()  标签访问节点  
getElementsByClassName()   类名
		
	封装自己的class类  
			function getClass(classname) {
            if(document.getElementsByClassName){
                return document.getElementsByClassName(classname);
            }
            var arr = [];
            var dom = document.getElementsByTagName("*");
            for(var i=0;i<dom.length;i++){
                var txtarr = dom[i].className.split(" ");
                for(var j=0;j<txtarr.length;j++){
                    if(txtarr[j] == classname){
                        arr.push(dom[i]); // 我们要的是div;
                    }
                }
            }
            return arr;
        }

#### 2.访问关系
> 父亲节点  parentNode
> 兄弟节点  nextSibling || nextElementSibling 下一个兄弟    兼容写法  nextSibling ie6,7,8的
> 
> 兄弟节点  previousSibling || previousSibling 上一个兄弟
> 
> 子节点 firstChild || firstElementChild  第一个孩子
> 
> 子节点 lastChild || lastElementChild  第一个孩子
> 
> 孩子节点  ChildNodes  选出全部的孩子  ChildNodes 他是标准属性，他返回指定元素的子元素集合，包括HTML节点 nodeType=1时才是元素节点    ul.ChildNodes[i].nodeType == 1 ; （嫡出）
> Children 重要 选取所有的孩子，（元素节点） （庶出，但没有兼容问题）

#### 3. DOM节点操作
> 1.创建节点  var div = document.createElement("div");
> 
> 2.插入节点  appendChild() 添加孩子 放在盒子的最后面  
> 2.插入节点  insertBefore（插入的节点，参照节点）
![](https://i.imgur.com/95dc5JQ.png)
![](https://i.imgur.com/hKZdBrv.png)
> 3.删除节点  removeChild()
> 
> 4.克隆节点 cloneNode(true); 括号里面可以跟参数，如果里面是true 深层复制，除了复制本盒子，还能复制子节点，如果为false 只复制本节点，不复制 子节点

#### 3. 设置节点属性
	getAttribute('属性') 获取属性 可以得到某些元素的某些属行 getAttribute('class');
	setAttribute('属性','属性值') 设置节点属行 div.setAttribute('class','demo')
	removerAttribute('属性') 


## 日期函数 Date()
	
	这个函数可以得到本地日期，
	
	1.声明日期 var date = new Date();  创造声明一个新的日期函数

	2.使用函数 
		2.1 返回毫秒数 date.getTime() || date.valueOf();  得到距离 1970 年 至今的毫秒数

	3.常用日期函数
![](https://i.imgur.com/gDU2sqk.png)

	4.定义自己的日子  var endTime = new Date("2017/12/12");
		如果Date括号里面写日期，就是自己定义的时间.
		如果Date括号不写日期,就是当前时间.
![](https://i.imgur.com/dw4l6TZ.png)


## 定时器 
	开启定时器 window.setInterval('执行函数',间隔时间);
	关闭定时器 clearInterval(定时器名称);

	定时器之  setTimeout() 时间去哪儿了   类似于定时炸弹 。。 setTimeout(“函数”, 时间 ) 

	setInterval(fn,5000);      每隔 5秒钟，就去执行函数fn一次
 	setTimeout(fn,5000);     5秒钟之后，去执行 fn 函数， 只执行一次

## arguments 对象
	 function fn(a,b,c) {  console.log(a+b+c); alert(arguments.length;)}
	 fn(1,3,4,6); 

     arguments.length;  返回的是  实参的个数。    

     但是这个对象有讲究，他只在正在使用的函数内使用。 
     arguments.callee;  
  
     返回的是正在执行的函数。 也是在函数体内使用。 在使用函数递归调用时推荐使用arguments.callee代替函数名本身。 

     function fn() {  console.log(arguments.callee); }   
     这个callee 就是 ：   function fn() {  console.log(arguments.callee); } 


## && ||  注意 &&等级高

	 a&&b   结果是什么？  
	 如果a 为假 ，则返回 a   
	 如果a 为真 ，则返回 b 

	 var aa  =   0&&1; alert(aa)    // 0 
	
	 var bb =  1&&0;  alert(bb);  //0  

	 var cc =  1&&10; alert(cc);  // 10


	2. a||b  
	   如果 a 为假   则返回b  
	   如果 a 为真   则返回a 
	
	var a = 1 && 2 && 3;  	console.log(a);   3
	var b = 0 && 1 && 2;	console.log(b);  0
	var c = 1 && 0  && 2;	console.log(c);  0




   