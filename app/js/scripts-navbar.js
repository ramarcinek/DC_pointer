$(document).ready(function() {
	var NavY = $('header nav').offset().top;
	 
	var stickyNav = function(){
		var ScrollY = $(window).scrollTop();
		  
		if (ScrollY > NavY) { 
			$('header nav').addClass('sticky');
			$('.slogan').addClass('sticky-item-color');
			$('.phone-li, .mail-li').addClass('sticky-item-color');
			$('.social-icons').children().addClass('sticky-item-color');
			$('.burger-menu').addClass('sticky-burger-menu');

			if ($(window).width() <= 495) {

				$('.nav-list').addClass('sticky-dropDown-menu');

			} else {

				$('.nav-list').removeClass('sticky-dropDown-menu');
			}
			
			
		} else {
			$('header nav').removeClass('sticky'); 
			$('.slogan').removeClass('sticky-item-color');
			$('.phone-li, .mail-li').removeClass('sticky-item-color');
			$('.social-icons').children().removeClass('sticky-item-color');
			$('.burger-menu').removeClass('sticky-burger-menu');
			
			
		}
	};
	 
	$(window).scroll(function() {
		stickyNav();
	});
});