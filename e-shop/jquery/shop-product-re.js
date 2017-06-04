requirejs.config({
	baseUrl:'jquery/',
	paths:{
		jquery:'jquery-1.12.4.min'
	}
});

require(['jquery','dialog1'],function($,Dialog){
	$('.small-img li').on('click',function(){
		var dialog1 = new Dialog({
			width:600,
			height:400,
			opacity:0.9,
			title:'hh',
			content:'.div1'			
		})
		dialog1.open();
	})
	$('body').on('click','#login-btn',function(){//login-btn是后生成元素，事件委托
		var dialog2 = new Dialog({
			width:200,
			height:100,
			opacity:0.7,
			title:'登录成功',
			content:''			
		})
		dialog2.open();
	})
})