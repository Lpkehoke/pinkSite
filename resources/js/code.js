'use strict';

startApp();

function startApp() {
	startNumController();
	startSliders();
	startFloatslider();
	startTabs();

	function startNumController() {
		$.each($('.__numController'), function() {
			var input = $(this).children('input');
			input.val(1);
			$(this).children('div:first-child').on('click', function (e) {
				if (+input.val() > 0) {
					input.val(+input.val() - 1);
				}
			});
			$(this).children('div:last-child').on('click', function (e) {
				input.val(+input.val() + 1);
			});
		});
	}

	function startSliders() {
		$('.main-part-slider').slick({
			dots: true,
			prevArrow:
			'<div class="__slider-but">' +
				'<div class="__slider-last">' +
					'<div></div>' +
				'</div>' +
			'</div>',
			nextArrow:
			'<div class="__slider-but">' +
				'<div class="__slider-next">' +
					'<div></div>' +
				'</div' +
			'</div>'
		});
	}

	function startFloatslider() {
		$('._slider_').slider();
	}

	function startTabs() {
		$('.accInfoBnt[data-toggle="pill"]').on('shown.bs.tab', function(e) {
			$('.accInfoBnt[data-toggle="pill"]').removeClass('__active');
			e.target.className = 'accInfoBnt __active active';
		})
	}

}
