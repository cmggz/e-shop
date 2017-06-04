var oBtnBox = getClass('carousel-btns')[0];
var aBtns = oBtnBox.getElementsByTagName('li');
var aList = getClass('carousel-list');
var oContent = getClass('carousel-content')[0];
var oCarousel = getClass('carousel')[0];
var iNow = 0;

for(var i=0; i<aBtns.length; i++){
	aBtns[i].index = i;
	aBtns[i].onclick = function(){
		change(this.index);
		iNow = this.inedx;
		// for(var j=0; j<aBtns.length; j++){
		// 	aBtns[j].className = '';
		// }
		// animate(oContent,{
		// 	left: -aList[0].offsetWidth * this.index
		// })
		//oContent.style.left = -aList[0].offsetWidth * this.index + 'px';
		// this.className = 'selected';
	}
} 

oCarousel.onmouseover = function(){
	clearInterval(timer);
}

oCarousel.onmouseout = function(){
	run();
}

function run(){
	timer = setInterval(function(){
		iNow++;
		if(iNow == aBtns.length){
			iNow = 0;
		}
		change(iNow);
	},2000);
}

run();

function change(idx){
	for(var j=0; j<aBtns.length; j++){
		aBtns[j].className = '';
	}
	// animate(oContent,{
	// 	left: -aList[0].offsetWidth * idx
	// })
	oContent.style.left = -aList[0].offsetWidth * idx + 'px';
	//该语句和css3中transition结合产生滑动效果
	
	aBtns[idx].className = 'selected';
}