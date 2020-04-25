	var elem = document.querySelector('.calc-range');
	var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange:true, step: 100000 });

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

	var per, month, result, total, monthly;
	var money = +$ ('.calc-range').val();

	$('input[name="programms"]').on('change', function(event) {
		month = +$(this).attr('data-month');
		per = +$(this).attr('data-per');
		result = Math.round(per / 12 * month * money);
		total = result + money;
		monthly = parseInt(result / month);
		$('.calc-total strong span').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('.calc-monthly strong span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		var dm = $('input[name="programms"]:checked').attr('data-month');
		switch(dm) {
			case '6': 
			$('.calc-total small span').text('6 месяцев');
			break;
			case '12': 
			$('.calc-total small span').text('1 год');
			break;
			case '24': 
			$('.calc-total small span').text('2 года');
			break;
			case '36': 
			$('.calc-total small span').text('3 года');
			break;
			case '48': 
			$('.calc-total small span').text('4 года');
			break;
		};
	});
	$('.calc-range').on('change', function(event) {
		$('.calc-summ_invest_num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		var radio = $('input[name="programms"]:checked');
		money = +$(this).val();
		month = +radio.attr('data-month');
		per = +radio.attr('data-per');
		result = Math.round(per / 12 * month * money);
		total = result + money;
		monthly = parseInt(result / month);
		$('.calc-total strong span').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('.calc-monthly strong span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	});
});