
$(document).ready(function(){

	$('.head h1').removeClass('animated tada');
	$('.head h1').addClass('animated tada');

	setTimeout(function(){ 
		$('.head h1').addClass('animated fadeOut');	
	}, 1000);

	setTimeout(function(){ 
		$('.head2').addClass('block');
		$('.head2 h1').addClass('animated fadeIn');	
		
	}, 1500);

	setTimeout(function(){
		$('.head2 h1').removeClass('animated fadeIn');
		$('.head2 h1').addClass('animated jello');
	}, 1750);

	setTimeout(function(){ 
		$('.head2 h1').addClass('animated fadeOut');	
		
	}, 2500);

	setTimeout(function(){ 
		$('.head3').addClass('block');
		$('.head3 h1').addClass('animated fadeIn');

	}, 3500);
	setTimeout(function(){ 
		$('.head3 h1').removeClass('animated fadeIn');
		$('.head3 h1').addClass('animated pulse');

	}, 3750);

	setTimeout(function(){ 
		$('.head3 h1').addClass('animated fadeOut');	
	}, 4000);
	setTimeout(function(){ 
		$('.head4').addClass('block');	
		$('.head4 h1').addClass('animated fadeIn');
	}, 4500);
	
});



