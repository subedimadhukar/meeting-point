jQuery(document).ready(function($){
	// hide preloder
	$(".preloader").hide();

	// header animation on scroll
	$(window).on('load scroll',function() {
		if ($(this).scrollTop() >= 100) {
			// show header
			$("header.main-header").addClass("shown");
		} else {
			// hide header
			$("header.main-header").removeClass("shown");    
		} 
	});

	// Main Slider on Homepage
	$('#main-slider').flexslider({
		animation: "fade",
		slideshowSpeed: 8000,
		directionNav: false,
		controlNav: true,
	});

	// direction navigation
	$(".next-arrow").click(function () {
		$('.slider').flexslider("next");
	});

	$(".prev-arrow").click(function () {
		$('.slider').flexslider("prev");
	});

	//Testimonials the slider
	$('.testimonials-wrapper').flexslider({
		selector: ".testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	// Video Carousel
	$('.video-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		video: true,
		navText: [
			"<i class='ion-ios-arrow-left'></i>",
			"<i class='ion-ios-arrow-right'></i>"
		],
		lazyLoad: true,
		center: true,
		responsive: {
			0:{
				items:1

			},
			768:{
				items:3

			}
		}
	});

	// Image Carousel
	var imageCarousel = $('.image-carousel');
	imageCarousel.owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		slideHeight: 500,
		navText: [
			"<i class='ion-ios-arrow-left'></i>",
			"<i class='ion-ios-arrow-right'></i>"
		],
		lazyLoad: true,
		center: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

  	//imageCarousel.on('initialized.owl.carousel',updateSize());
    //imageCarousel.on('refreshed.owl.carousel',updateSize());
    //imageCarousel.on('resized.owl.carousel',updateSize());
    //imageCarousel.on('changed.owl.carousel',updateSize());
    //
    //function updateSize(){
    //    //var minHeight=parseInt($('.image-carousel .owl-item').eq(0).css('height'));
    //    var minHeight=parseInt($('.image-carousel .owl-item').eq(0).find('img').height);
		//console.log(minHeight);
    //    $('.owl-item').each(function () {
    //        var thisHeight = parseInt($(this).css('height'));
    //        minHeight=(minHeight<=thisHeight?minHeight:thisHeight);
    //    });
    //    $('.image-carousel .owl-stage-outer').css('height',minHeight+'px');
    //
    //    /*show the bottom part of the cropped images*/
    //    $('.image-carousel.owl-carousel .owl-item img').each(function(){
    //        var thisHeight = parseInt($(this).css('height'));
    //        if(thisHeight>minHeight){
    //            $(this).css('margin-top',-1*(thisHeight-minHeight)+'px');
    //        }
    //    });
    //
    //}

    //client carousel
	$('.client-carousel').owlCarousel({
		loop:true,
		margin:10,
		navText: [
			"<i class='ion-ios-arrow-left'></i>",
			"<i class='ion-ios-arrow-right'></i>"
		],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	});

	// input styles
	$(".input-class input, .textarea-class textarea").focus(function(){
		if($(this).parent().hasClass("input-class"))
			$(this).prev().removeClass("input-class-blurred").addClass("input-class-focused");
		else if($(this).parent().hasClass("textarea-class"))
			$(this).prev().removeClass("textarea-class-blurred").addClass("textarea-class_focused");

		$(this).prev().parent().css({
			borderBottom : "solid 1px #f80050"
		});
	});
	$(".input-class input, .textarea-class textarea").blur(function(){
		if($(this).val() === ""){
			if($(this).parent().hasClass("input-class"))
				$(this).prev().addClass("input-class-blurred").removeClass("input-class-focused");
			else if($(this).parent().hasClass("textarea-class"))
				$(this).prev().addClass("textarea-class-blurred").removeClass("textarea-class_focused");
			$(this).prev().parent().css({
				borderBottom : "solid 1px #f80050"
			});
		}
	});

	// add margin to header's next element
	$("header.main-header").next().css("margin-top","85px");

	// drop down in menu
	$("ul.nav-menu").children("li").children("a").each(function(){
		$(this).click(function(e){
			$("ul.sub-menu").each(function(){
				$(this).slideUp(200, "easeInCirc");
			});

			if($(this).next("ul.sub-menu").html() !== undefined){
				e.preventDefault();
				$(this).next("ul.sub-menu").slideToggle(200, "easeInCirc");
			}
		});
	});

	// show menu content
	$(".menu-toggle").click(function(){
		$(".menu-content").animate({
			left : "0",
			opacity : "1"
		},200,"easeInCirc");
		$(".menu-wrapper").delay(300).fadeIn(200,"easeInCirc");
		$(".nav-menu").children("li").each(function(){
			var _index = $(this).index();
			$(this).children("a").delay((_index * 25) + 100).animate({
				marginBottom : '0'
			},200);
		});
	});

	// hide menu content
	$(".close-button").click(function(e){
		e.preventDefault();
		var links_length = $(".nav-menu").children("li").length;
		// reset links' styles
		$(".nav-menu").children("li").each(function(){
			var _index = $(this).index();
			$(this).children("a").delay( ( (links_length - _index) * 25 ) + 100 ).animate({
				marginBottom : '0'
			},200);
		});
		// hide menu link
		$(".menu-wrapper").delay( (links_length * 25) + 200).fadeOut(200,"easeInCirc");
		// hide menu content
		$(".menu-content").delay( (links_length * 25) + 600).animate({
			left : "-100%",
		},200,"easeInCirc");
	});

    /* http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/documentation */
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools:'',
		opacity: 1,
		theme: 'dark_square', /* pp_default / light_rounded / dark_rounded / light_square / dark_square / facebook */
	});

	//Play iFrame embedded YouTube Video on click
	$('#play-video').on('click', function(ev) {

		$("#video")[0].src += "&autoplay=1";
		ev.preventDefault();
		$('.square-text').addClass('remove-style')

	});
});


