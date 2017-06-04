var oList = document.getElementById('list');
var oThead = oList.getElementsByTagName('thead')[0];
var oTrHead = oThead.getElementsByTagName('tr')[0];
var oInput = oThead.getElementsByTagName('input')[0];
var oTbody = oList.getElementsByTagName('tbody')[0];
var aTr = oTbody.getElementsByTagName('tr');
var aCheckBox = getClass('checkbox',oTbody);


for(var i=0 ; i<aTr.length; i++){
	aTr[i].onclick = function(){
		var oCheck = this.getElementsByTagName('input')[0];
		//判断是否被选中
		if(this.className == 'selected'){
			this.className = '';
			oCheck.checked = false;
		}else{
			this.className = 'selected';
			oCheck.checked = true;
		}
		
		//判断是否全选
		var aCheckTr= getClass("selected",oTbody);
		if(aCheckTr.length == aTr.length){
			oInput.checked = true;
		}else{
			oInput.checked = false;
		}
	}
}	
	//全选按钮点击
	// oInput.onclick = function(){
	// 	for(var i=0 ; i<aTr.length; i++){
	// 		if(this.checked == true){
	// 			aTr[i].className = 'selected';
	// 		}else{
	// 			aTr[i].className = '';
	// 		}
	// 		aCheckBox[i].checked = this.checked;
	// 		//this.checked直接返回true或者false
	// 	}
	// }

	//全选点击thead--tr
	oTrHead.onclick = function(e){
		// if(oInput.checked == true){
		// 	oInput.checked = false;
		// }else{
		// 	oInput.checked = true;
		// }
		
		//oInput.checked =!oInput.checked;----同上面if-else
		var target = e.target || event.srcElement;
		if(target != oInput){    //checkbox自身会选中
			oInput.checked =!oInput.checked;
		}
		for(var i=0; i<aTr.length; i++){
			if(oInput.checked == true){
	 			aTr[i].className = 'selected';	
	 		}else{
	 			aTr[i].className = '';
	 		}
	 		aCheckBox[i].checked = oInput.checked;
		}
	}

