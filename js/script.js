'use strict'
$(function(){
    $('.tabs__content .tabs__item').not(':first').hide();
	
	$('.wrapper__menu .tabs__title').click(function(e){
	e.preventDefault();
	
	$('.wrapper__menu .tabs__title').removeClass('selected').eq($(this).index()).addClass('selected');
	$('.tabs__content .tabs__item').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('selected');
	
	

	
	$('form div.tooltip_box').hover(
		function(){
		$(this).find('span').stop().animate({opacity: 1});
		},
		function(){
		$(this).find('span').stop().animate({opacity: 0});
		}),
	
	$('div input.button').click(function() {
		$('form span').stop().animate({opacity: 1});
	});
});
 
 

 
 


