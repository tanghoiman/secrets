$(document).ready( function(){	
	$(document).click(function(){
		clearinput();
	});
	$("#secret").keydown(function(evt){
		if(evt.keyCode == 13){
			changeinput ($(this).val());
			reset_animation();
			clearinput();
			$('#secret').blur(); return false;

		}
	});
	
	$("#secret").change(function(){
	changeinput ($(this).val());
	});
});
	
	function changeinput (text){
	$("#copy").html(text);
	}
	function clearinput (){
		$("#secret").val("");
	}
	function reset_animation() {
		var el = document.getElementById('copy');
		el.style.animation = 'none';
		el.offsetHeight; /* trigger reflow */
		el.style.animation = null; 
	}

//---------------------------------------------------------





