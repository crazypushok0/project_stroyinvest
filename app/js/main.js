
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
		    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
			
	});

	let menuBtn = $('.header-menu-btn');
	let sidebarBtn = $('.left-sidebar-btn');
	let menu = $('.header-menu');
	let sidebarmenu = $('.left-sidebar-menu');
	menuBtn.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('header-menu--active');
	});
	sidebarBtn.on('click', function(event) {
	event.preventDefault();
	sidebarmenu.toggleClass('left-sidebar-menu--active');
	sidebarBtn.toggleClass('left-sidebar-btn--active');
	});
});