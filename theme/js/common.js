$(function() {
	
	//tabs logic
	$('.tab_links a').on('click', function(e){
		e.preventDefault();

		var parent = $(this).closest('.tab_links'),
			targetWrapper = $(parent.data('target')),
			targetItem = $($(this).attr('href'));

		parent.find('.active').removeClass('active');
		$(this).addClass('active');

		targetWrapper.find('.active').removeClass('active');
		targetItem.addClass('active')

	})

 
	//Ссылка плавного скролла
	$('.a-scroll').on('click', function(e){
		e.preventDefault();

		var href = $(this).attr('href');
		var top = $(href).offset().top - 200;
		$('body,html').animate({scrollTop: top}, 1000)

	})


	//slider
	$('.prod_slider').slick({
		slidesToShow: 4,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1440,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 564,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	})

	$('.gallery_slider').slick({
		slidesToShow: 3,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 564,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	})

	$('.topSlider').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true
	})
});
