	var num_days=30;
	var days_with_tags=[{date:2,data:'tt'},{date:4,data:'du'}];
	$(function() {
		var count=0;
		for(i=0;i<num_days;i++){
			var str='<div class="day">';
			for(ii=0;ii<days_with_tags.length;ii++){
					if(i==days_with_tags[ii].date){
						str+='<a href="#" class="'+days_with_tags[ii].data+'"></a>';
					}
			}
			str+='</div>';
				$('.timeline').append(str);
				count++;
		}
		$('.timeline').css({width: 50*count});
		$('.timeline-holder, .close-btn, .cover').css({width: '100%'});
	  $('.timeline a.tt').on('click',
	  		function(event){
				event.preventDefault();
				$('.note.tt').addClass('active');
	  		}
	  	);
	  	 $('.timeline a.du').on('click',
	  		function(event){
				event.preventDefault();
				$('.note.du').addClass('active');
	  		}
	  	);
	  	$('.cover, .close-btn').on('click',
	  		function(event){
				event.preventDefault();
				$('.active').removeClass('active');
	  		}
	  	);
	});