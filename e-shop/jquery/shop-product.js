//点击显示隐藏
var $selBtn = $('.sel-btn');
var $selMenu = $('.sel-menu');

$selBtn.on('mousedown',function(){
	$(this).addClass('selected');
});
$selBtn.on('mouseup',function(){
	$(this).removeClass('selected');
	$selMenu.toggle();
});
// $selBtn.on('click',function(){
// 	$selMenu.toggle();
// });

$('li',$selMenu).on('click',function(){
	$('p',$selBtn).html($(this).html());
	$selMenu.hide();
});

$(document).on('click',function(e){
	if(e.target != $selBtn[0] && e.target != $('p',$selBtn)[0] && e.target != $('span',$selBtn)[0] ){
		$selMenu.hide();
	}
});

//选项卡
$('.btns-box li').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.text').eq($(this).index()).show().siblings().hide();
});

//弹层开始
var iNow = 0;
$('.small-img li').on('click',function(){
	$('.dialog-box').show();
	$('.content').animate({
		top:'50%'
	})
	$('.dialog-body img').attr('src',$(this).find('img').attr('src'));
	iNow = $(this).index();
})
$('.dialog-box').on('click',function(e){
	if(e.target == $('.dialog-box')[0] || e.target == $('.dialog-close')[0]){
		$(this).hide();		
		$('.content').stop().css('top','-249px');	
		clearInterval(timer);
	}
})

function next(){
	iNow++;
	if(iNow == $('.small-img li').length){
		iNow = 0;
	}
	var $NextImgSrc = $('.small-img img').eq(iNow).attr('src');
	$('.dialog-body img').eq(0).before('<img src="'+$NextImgSrc+'"/>');	
	$('.dialog-body img').eq(0).siblings('img').fadeOut(function(){
		$(this).remove();
	});	
}
$('.dialog-next').on('click',function(){
	next();
})
$('.next-btn').on('click',function(){
	next();
})

function prev(){
	iNow--;
	if(iNow == -1){
		iNow = $('.small-img li').length-1;
	}
	var $PrevImgSrc = $('.small-img img').eq(iNow).attr('src');
	$('.dialog-body img').before('<img src="'+$PrevImgSrc+'"/>');
$('.dialog-body img').eq(1).fadeOut(function(){
		$(this).remove();
	});
}
$('.dialog-prev').on('click',function(){
	prev();
})
$('.prev-btn').on('click',function(){
	prev();
})

function run(){
	timer = setInterval(function(){
		next();		
	},1000)
}
$('.slide-btn').on('click',function(){
	run();
})

$('.dialog-body').on('mouseover',function(){
	$('.dialog-prev').show();
	$('.dialog-next').show();
})
$('.dialog-body ').on('mouseout',function(){
	$('.dialog-prev').hide();
	$('.dialog-next').hide();
})
