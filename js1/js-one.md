# js one-two

## 1.关于变量提升
	在函数体内部，声明变量，会把该声明提升到函数体的最顶端。 只提升变量声明，不赋值。
![](https://i.imgur.com/mlamO5J.png)

## 2.函数参数
	arguments是存储了函数传送过过来实参 
	Javascript在创建函数的同时，会在函数内部创建一个arguments对象实例.
	arguments对象只有函数开始时才可用。函数的 arguments 对象并不是一个数组，访问单个参数的方式与访问数组元素的方式相同
	arguments对象的长度是由实参个数而不是形参个数决定的
![](https://i.imgur.com/1nOr1H3.png)
![](https://i.imgur.com/VIFE138.png)

## 3.返回值 return
	定义：一个函数实际上就是一个计算过程，计算完成之后的结果就是返回值。
		定义函数的返回值：
		在函数内部用return来设置返回值，一个函数只能有一个返回值。
		同时，终止代码的执行。
		所有的自定义函数默认没有返回值；
		Return 后面不要换行

## 4. 表单2个方法
		表单自动获取焦点 input.focus();  方法
		鼠标经过选择表单 input.select(); 方法

## 5. 两个小循环
	
	while() 当  	do{} while() 
	while(条件) {语句}
	var sum1 = 0;
        var j=1;
        while(j<=100){
            sum1 += j;
            j++;
        }
        console.log(sum1);


	switch 多分支语句  switch 跟 if else if   else if else 几乎是一样的，但是switch 效率更好
	多选1；

	switch(参数){
		case 参数1:
		语句;
		break;  退出的意思
		
		case 参数2:
		语句;
		break; 退出的意思
		....

		default:    (默认)
		语句;

	}

	btn.onclick = function() {
            var val = txt.value;

            switch (val){
                case "苹果": alert("苹果5元");
                break;
                case "香蕉": alert("香蕉3块");
                break;
                case "梨子": alert("梨子2块");
                break;
                case "草莓": alert("草莓12块");
                break;
                default: alert("没有");
            }
        }

### 数组常用方法
	
	
	 1.1 添加数组到后面 push() *****  可以向数组的末尾添加一个或者是多个元素，返回新长度
     1.2 添加数组到前面 unshift *****  可以向数组的前面添加一个或者是多个元素，返回新长度  与 push()相反

	 1.3 pop() 删除最后一个元素  只能一个 返回值是最后一个值 
	 1.4 shift（) 删除前面第一个元素  并返回第一个元素的值
	
	 1.5 连接2个数组 concat()  该方法用于连接两个或多个数组，他不会改变现有的数组，而仅仅会返回被连接数组的一个副本

	 1.6 join() 作用是将数组各个元素是通过指定的分隔符进行连接成为一个字符串。 array.join(separatot)

	 1.7 split() 把字符串转换为数组
	 string.split(str,howmany)  str 参数可选，指定要使用的分隔符，如果省略，则使用逗号作为分隔符。
	howmany 可选，该参数可指定返回的数组的最大长度
![](https://i.imgur.com/flVOeMx.png)

	1.8 splice('起始位置','删除数量','添加新项目');


### 字符串常用方法
	1. 转换为字符串
		+“”  2+“” = "2" 
		String()  转化为字符串
		toString(基数);    基数就是进制; 

	2. 获取字符的位置方法
		chatAt() 获取相应位置的字符（参数：字符位置）
		
		chatCodeAt 获取相应位置字符的unicode编码 （参数：字符位置）

	3. 根据字符返回位置 与chatAt()相反
		返回前面第一个字符的位置  indexOf("字符");  它是从左边开始数，而且只找第一个，返回该字符的位置，索引号都是从0开始的。

		返回后面起第一个字符的位置 lastIndexOf("字符");  从后面开始数

### 网址编码
	我们知道一个网址 自己的网址，   不同页面也有自己id网址， 我们经常会做一些， 把网址送入到后台。  但是后台再处理的 不认识比如 换行啊 等特殊符号的  ？  

	var url =  “http://www.itast.cn?name=cz”  
	所以我们要实现编码，然后再传到后台。

	encodeURIComponent() 函数可把字符串作为 URI 组件进行编码

	decodeURIComponent() 函数可把字符串作为 URI 组件进行解码

### 操作字符串
		1. 合并字符串 concat
		2. slice("取字符串的起始位置",[结束位置]);  []可选的  起始位置一定要有  
			总结  slice(3)  从第3个开始取，一直取到最后 
			slice(3,6)  3 从 第3个开始 取 6 取到第6索引号的位置，还是从左边的第0个开始数。 但是不包 6 。

		3. substr()   substr(起始位置,[取的个数])  同上。
  
		  	不写取的个数， 默认从起始位置一直取到最后 。
		  	取的个数：    是指从起始位置开始，往后面数几个。 
		 	var txt = “abcdefghijk”;
		 	txt.substr(3,4); 
		  	从第3个  （d） 开始 数 4个  defg 
		  	substr(-1)  少用   ie678 报错 。 尽量少用 
