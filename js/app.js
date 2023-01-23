$(document).ready(function(){
	$('.burger').click(function(){
		$('.burger').find('.barre2').toggleClass('add');
		$('.burger').find('.barre1').toggleClass('add');
		$('.burger').find('.barre3').toggleClass('add');
		$('.responsive').toggleClass('open');
	})

});