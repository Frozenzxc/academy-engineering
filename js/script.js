
$(document).ready(function() {
  
  $('body').on('click' , '.header__button', function() {

   if (!$('.header__button').hasClass('clicked')) {
    $('.navigation__list').addClass('navigation__list--toggle');
    $('.header__mobile-btn').removeClass('header__mobile-btn').addClass('header__mobile-btn--off');
    $('.header__button').addClass('clicked')
   }
   else {
    $('.header__mobile-btn--off').removeClass('header__mobile-btn--off').addClass('header__mobile-btn');
    $('.navigation__list').removeClass('navigation__list--toggle');
    $('.header__button').removeClass('clicked')
    }
    }
  );

  $(window).resize(function() {		
		if (  $(window).width > 800 ) {			
			$('.navigation__list').addClass('navigation__list--inline');
		 }
	});
});



