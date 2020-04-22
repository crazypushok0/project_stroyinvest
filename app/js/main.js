
$(document).ready(function() {
	$(".directions-blocks").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows:false,
			dots: true,
			responsive: [
			 {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
  ]
			
	});

	$('.header-menu-btn').on('click', function(event) {
		event.preventDefault();
		$('.header-menu').toggleClass('header-menu--active');
	});
	$('.left-sidebar-btn').on('click', function(event) {
	event.preventDefault();
	$('.left-sidebar-menu').toggleClass('left-sidebar-menu--active');
	$('.left-sidebar-btn').toggleClass('left-sidebar-btn--active');
	});
});