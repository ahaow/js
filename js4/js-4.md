#scroll家族  #

	1. scollTop 被卷去的头部 
	2. scrollLeft

	页面滚动效果： window.onscroll = functin(){页面滚动语句}

	谷歌浏览器 和 没有声明DTD（DOCTYPE）：document.body.scrollTop;
	火狐和其他浏览器： document.documentElement.scrollTop;
	ie9+ 和 最新浏览器: window.pageXoffset;

	兼容写法：  
				function scroll(){
					if(window.pageYoffset != null){
						return {
							left: window.pageXoffset,
							top: window.pageYoffset
						}
					}
					else if(document.compatMode == "CSS1Compat"){
						return {
							left: docuemnt.documentElement.scrollLeft,
							top: docuemnt.documentElement.scrollTop
						}
					}
					return {
						left:document.body.scrollLeft,
						top: document.body.scrollTop
					}
				}
	3. window.scrollTo(x,y);


# client家族 # 
	client 可视区域

	offseWidth: width + padding + border
	
	clientWidth: width + padding  (不包括border)

	scrollWidth: 大小是内容的大小 包含滚动条


	1. 检测屏幕的大小
		function client() {
        if(window.innerWidth != null){
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }else if(document.compatMode === "CSS1Compat"){
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
	
	2. window.onresize = function(){} 改变窗口事件
	3. window.screen.width: 检测电脑分辨率


# 冒泡 #
	事件冒泡: 当一个元素上的事件被触发的时候，比如说鼠标点击了一个按钮，同样的事件将会在那个元素的所有祖先元素中被触发。这一过程被称为事件冒泡；这个事件从原始元素开始一直冒泡到DOM树的最上层。

	不是所有的事件都能冒泡。以下事件不冒泡：blur、focus、load、unload

	阻止冒泡的方法: 标准浏览器 和  ie浏览器  
	 w3c的方法是event.stopPropagation()        proPagation  传播  传递 
	 IE则是使用event.cancelBubble = true       bubble   冒泡  泡泡       cancel 取消 

	兼容写法： 
	event && event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true

# 判断当前对象 #
	火狐 谷歌 等   event.target.id   
	ie 678          event.srcElement.id    
	兼容性写法：  var targetId = event.target ? event.target.id : event.srcElement.id;

# js常用访问CSS属性 #

	我们访问得到css 属性，比较常用的有两种：
	    1. 利用点语法 
	      box.style.width      box.style.top    
	      点语法可以得到 width  属性  和 top属性  带有单位的。 100px
	      但是这个语法有非常大的缺陷，  不变的。 
	      后面的width  和 top  没有办法传递参数的。
	      var w = width;
	      box.style.w

	   2. 利用 []  访问属性
	      语法格式:  box.style[“width”]   
	                元素.style[“属性”];
	      console.log(box.style["left"]);
	       最大的优点  ：  可以给属性传递参数

![](https://i.imgur.com/ZuOMnzh.png)




# 闭包 #
	在程序语言中，所谓闭包，是指语法域位于某个特定的区域，具有持续参照(读写)位于该区域内自身范围之外的执行域上的非持久型变量值能力的段落。这些外部执行域的非持久型变量神奇地保留他们在闭包最初定义(或创建)时的值
				
	白话：  我们可以用一个函数 去访问 另外一个函数的内部变量的方式就是闭包。

	内部变量 是 局部变量      那我们知道，局部变量是不可以为别人随便使用也。

	闭包的优点 ： 
	优点：不产生全局变量，实现属性私有化。
	缺点：闭包中的数据会常驻内存，在不用的时候要删掉否则会导致内存溢出。



