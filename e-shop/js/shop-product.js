	//选项卡
	var oTabBox = document.getElementById('tab-box');
	var aLi = oTabBox.getElementsByTagName('li');
	var aDiv = getClass("text",oTabBox);
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick = function(){
			for(var j=0; j<aDiv.length; j++){
				aDiv[j].style.display='none';
				aLi[j].className='';
			}
			this.className='active';
			aDiv[this.index].style.display = 'block';
		}	
	}

	//option点击
	var oInfoSelect = document.getElementById("info-select");
	var oSelBtn = getClass("sel-btn",oInfoSelect)[0];
	var oP = oSelBtn.getElementsByTagName('p')[0]; 
	var oSelMenu = getClass("sel-menu",oInfoSelect)[0];
	var oSpan = oSelBtn.getElementsByTagName('span')[0];
	var aLii = oSelMenu.getElementsByTagName('li'); 

	oSelBtn.onmousedown = function(){
		oSelBtn.className = "sel-btn selected";
	}
	oSelBtn.onmouseup = function(){
		oSelBtn.className = "sel-btn";
		if(oSelMenu.style.display == 'none' || oSelMenu.style.display == '' ){
			oSelMenu.style.display = 'block';
		}else{
			oSelMenu.style.display = 'none';
		}
	}

	for(var i=0; i<aLii.length; i++){
		aLii[i].onclick = function(){
			oP.innerHTML =this.innerHTML;
			oSelMenu.style.display = 'none';

		}			
	}

	document.body.onclick = function(e){
		//事件e三要素：事件源;事件处理函数;事件
		//e.target---取到事件源,标准浏览器兼容
		//event.srcElement---取到事件源,ie浏览器兼容
		//事件的冒泡--点击子元素，触发父元素
		var target = e.target || event.srcElement;
		if(target != oSelBtn && target != oP && target != oSpan){
			oSelMenu.style.display = 'none';			
		}
	}

//点击显示弹层
var oSmallImg = getClass('small-img')[0];
var aDialogLi = oSmallImg.getElementsByTagName('li');
var oDialogBox = getClass('dialog-box')[0];
var oDialogBody = getClass('dialog-body',oDialogBox)[0];
var oDialogImg = oDialogBody.getElementsByTagName('img')[0]; 
var iNow = 0;	
var oDialogPrev = getClass('dialog-prev',oDialogBox)[0];
var oDialogNext = getClass('dialog-next',oDialogBox)[0];
var oPrevBtn = getClass('prev-btn',oDialogBox)[0];
var oNextBtn = getClass('next-btn',oDialogBox)[0];
var oSlideBtn = getClass('slide-btn',oDialogBox)[0];
var oContent = getClass('content',oDialogBox)[0];

//点击显示弹层
for(var i=0; i<aDialogLi.length; i++){
	aDialogLi[i].index = i;
	aDialogLi[i].onclick = function(){ 
		oDialogBox.style.display = 'block';
		oDialogImg.src = this.getElementsByTagName('img')[0].src;
		oContent.style.animation = 'show 1s ease forwards';
		iNow = this.index;
	}
}

// oDialogClose.onclick = function(){
// 	oDialogBox.style.display = 'none';
// }

//关闭弹层
var oDialogClose = getClass('dialog-close')[0]; 
oDialogBox.onclick = function(e){
	var target = e.target || event.srcElement;
	if(target == oDialogBox ||target == oDialogClose){	
		oDialogBox.style.display = 'none';
	}
}

//点击显示上一张图
function prev(){
	if(iNow==0){
		iNow = aDialogLi.length;
	}
	iNow--;
	var pervLi = aDialogLi[iNow];
	oDialogImg.src = pervLi.getElementsByTagName('img')[0].src;
}
oDialogPrev.onclick = function(){
	prev();
}
oPrevBtn.onclick = function(){
	prev();
}

//点击显示下一张图	
function next(){
	iNow++;
	if(iNow==aDialogLi.length){
		iNow =0;
	}
	var nextLi = aDialogLi[iNow]; 

	var oImg = document.createElement('img');//创建一个图片节点
	oImg.src = nextLi.getElementsByTagName('img')[0].src;//图片节点的src属性等于下一张图的src
	var oldImg = oDialogBody.children[0];
	oDialogBody.insertBefore(oImg,oldImg);//父元素oDialogBody：oldImg元素前插入oImg元素
	oldImg.style.animation = 'hide 1s ease forwards';//原有的图片隐藏
	setTimeout(function(){
		oDialogBody.removeChild(oldImg);
	},1000);//setTimeout类似setInterval,只执行一次

	//oDialogImg.src = nextLi.getElementsByTagName('img')[0].src;	--直接切换为下一张
}
oDialogNext.onclick = function(){
	next();
}
oNextBtn.onclick = function(){
	next();
}	

//点击开启定时器，自动轮播
var timer = '';
oSlideBtn.onclick = function(){
	if(timer){
		clearInterval(timer);
		timer = '';
	}else{
		timer = setInterval(function(){
			next();
		},1500);		
	}
}