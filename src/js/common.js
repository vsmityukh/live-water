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
	$('.article_slider').slick({
		slidesToShow: 3,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1440,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
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
	})
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

	$('.command_slider').slick({
		slidesToShow: 3,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1440,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
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
	})


	$('.topSlider').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				arrows: false
			  }
			}
		]
	})

	$('.review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinity: true,
		dots: false,
		centerMode: true,
		variableWidth: true,
		arrows: true,
		responsive: [
			{
			  breakpoint: 564,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
				variableWidth: false
			  }
			}
		]
	})

	$('.photo_slider').slick({
		slidesToShow: 6,
		slidesToScroll: 3,
		infinity: true,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 564,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
		]
	})
});
