//dialog.js先生成html，再设置其css相关属性，可能会有延迟；
//dialog1.js先生成每一个html,同时设置其css属性，最后append成一个完整的html.
requirejs.config({
	baseUrl:'jquery/',
	paths:{
		jquery:'jquery-1.12.4.min'
	}
});

define(['jquery'],function($){
	function Dialog(option){
			var _this = this;
			var defaultVal = {
				width:400,
				height:300,
				opacity:0.5,
				title:'',
				content:''
			}
			option = $.extend(defaultVal,option);

			this.$dialogBox = $('<div class="dialog-box"></div>').css('background','rgba(0,0,0,'+option.opacity+')');
			this.$content = $('<div class="content"></div>').css({
				width:option.width,
				height:option.height,
				marginLeft:-option.width/2,
				marginTop:-option.height/2				
			});
			this.$dialogTitle = $('<div class="dialog-title"></div>');
			this.$title = $('<span class="title">'+option.title+'</span>');
			this.$dialogClose = $('<span class="dialog-close">X</span>');
			this.$dialogBody = $('<div class="dialog-body"></div>').html($(option.content).clone().show());
			this.$dialogClose.on('click',function(){
				_this.close();
			})
	}
	Dialog.prototype.open = function(){
		this.$dialogBox.append(this.$content);
		this.$content.append(this.$dialogTitle).append(this.$dialogBody);
		this.$dialogTitle.append(this.$title).append(this.$dialogClose);
		$('body').append(this.$dialogBox);		
	}
	Dialog.prototype.close = function(){
		this.$dialogBox.remove();		
	}
	return Dialog;

})