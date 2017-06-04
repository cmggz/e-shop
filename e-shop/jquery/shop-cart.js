//自己写
var $listTheadTr = $('#list thead tr');
var $listTbodyTr = $('#list tbody tr');

$listTheadTr.on('click',function(e){
	if(e.target == $(this).find(':checkbox')[0]){
		e.target.checked = !e.target.checked;
	}
	if($(this).find(':checkbox').prop('checked')){
		$(this).find(':checkbox').prop('checked',false);
		$('#list tbody tr').removeClass('selected').find(':checkbox').prop('checked',false);	
	}else{
		$(this).find(':checkbox').prop('checked',true);	
		$listTbodyTr.addClass('selected').find(':checkbox').prop('checked',true);
	}
});


$('#list tbody tr').on('click',function(e){
	if(e.target == $(this).find(':checkbox')[0]){
		e.target.checked = !e.target.checked;
	}
	
	// if(!$(this).find(':checkbox').prop('checked')){
	// 	$(this).addClass('selected').find(':checkbox').prop('checked',true);
	// }else{					
	// 	$(this).removeClass('selected').find(':checkbox').prop('checked',false);
	// }
	$(this).toggleClass('selected');
	$(this).find(':checkbox').prop('checked',$(this).hasClass('selected'));

	var flag=true;
	$listTbodyTr.each(function(){
		if(!$(this).find(':checkbox').prop('checked')){
			flag = false;
		};
		if(flag){
			$listTheadTr.find(':checkbox').prop('checked',true);
		}else{	
			$listTheadTr.find(':checkbox').prop('checked',false);
		};		
	})
});


