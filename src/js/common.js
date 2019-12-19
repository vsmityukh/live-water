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

	//tabs logic in basket popup form
	$('.personal_data .form_tabs').on('click', function(e){
		// e.preventDefault();

		var parent = $(this).closest('.personal_data'),
			targetWrapper = $(parent.data('target')),
			targetItem = $($(this).data('href'));

		parent.find('.active').removeClass('active');
		$(this).addClass('active');

		targetWrapper.find('.active').removeClass('active');
		targetItem.addClass('active')

	})

	$('.toggler').on('click', function(){
		$('.header_nav ul').toggle();
	})

 
	//Ссылка плавного скролла
	$('.a-scroll').on('click', function(e){
		e.preventDefault();

		var href = $(this).attr('href');
		var top = $(href).offset().top - 200;
		$('body,html').animate({scrollTop: top}, 1000)

	})


	//slider

	$('.product_wrap--slide .main_photo').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		asNavFor: '.thumb_photos'
	})
	$('.product_wrap--slide .thumb_photos').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.main_photo',
		dots: false,
		focusOnSelect: true,
		vertical: true
	});
	$('.top_slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: true,
	})
	$('.article_slider').slick({
		slidesToShow: 3,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1540,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
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
				slidesToScroll: 1,
				adaptiveHeight: true
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
			  breakpoint: 1440,
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
			  breakpoint: 991,
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
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: false
				}
			},
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
