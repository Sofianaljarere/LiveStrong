(function($) {

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
	
	headerStyle();
	
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
	}
	
	
	
	//Hidden Sidebar
	if ($('.hidden-bar,.fullscreen-menu').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.nav-toggler');
		var hiddenBarCloser = $('.hidden-bar-closer,.close-menu');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			$('body').addClass('visible-menu-bar');
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			$('body').removeClass('visible-menu-bar');
			hiddenBar.removeClass('visible-sidebar');
		});
	}
	
	
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	
	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 6000,
			navText: [ '<span class=""></span>', '<span class=""></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay:false,
			navText: [ '<span class=""></span>', '<span class=""></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	
	

	var TxtRotate = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	  };
	  
	  TxtRotate.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];
	  
		if (this.isDeleting) {
		  this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
		  this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
	  
		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
	  
		var that = this;
		var delta = 300 - Math.random() * 100;
	  
		if (this.isDeleting) { delta /= 2; }
	  
		if (!this.isDeleting && this.txt === fullTxt) {
		  delta = this.period;
		  this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
		  this.isDeleting = false;
		  this.loopNum++;
		  delta = 500;
		}
	  
		setTimeout(function() {
		  that.tick();
		}, delta);
	  };
	  
	  window.onload = function() {
		var elements = document.getElementsByClassName('txt-rotate');
		for (var i=0; i<elements.length; i++) {
		  var toRotate = elements[i].getAttribute('data-rotate');
		  var period = elements[i].getAttribute('data-period');
		  if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		  }
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666}";
		document.body.appendChild(css);
	  };




	  const panels = document.querySelectorAll('.panel');

	  panels.forEach(panel => {
		  panel.addEventListener('click', () => {
			  removeActiveClasses();
			  panel.classList.add('active');
		  })
	  })
	  
	  function removeActiveClasses(){
		  panels.forEach(panel => {
			  panel.classList.remove('active');
		  })
	  }

	  $('#modal1').on('hidden.bs.modal', function (e) {
		// do something...
		$('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
	  });
	  
	  $('#modal6').on('hidden.bs.modal', function (e) {
		// do something...
		$('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
	  });
	  
	  $('#modal4').on('hidden.bs.modal', function (e) {
		// do something...
		$('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
	  });






	  $('button#subscribeNewsletter').on('click', function () {
		var form = $(this).closest('.newsletter-form');
		var email = $(this).closest('.newsletter-form').find('input[name=email]').val();
	
		if(email != '') {
	
			$.ajax({
				type:"POST",
				data:{subscribeNewsletter:email},
				
			})
	
			$(form).html('<div class="text" style="color:#3cf7a9" >You have been subscribed to our newsletter.</div>');
		}
	
	})


	  



$('button#calculate').on('click', function () {

    var height = $('input[name=cm]').val();
    var weight = $('input[name=weight]').val();
    var age = $('input[name=age]').val();
    var gender = $('select[name=gender]').val();
    var activity = $('select[name=activity]').val();

    var message = '';

    // Stop Function if Height or Weight is empty
    if(height == '' || weight == '' )
    return;

    // If height-100 > wieght Means He/she's not fat ex: (170-100) > 60 

    if(height-100 >= weight) {

        // If (height-100 - weight) > 20, He/She's not in perfect Weight and Thin
        if( (height-100 - weight) > 20) {
            // He/She's Needs to get Fatter
            message += 'You Need to get fatter  We advise you to see our article <a href="our blog.html" style="color:blue">here</a>';
        } else {
            // He/She's in Perfect Weight
            message += 'You are in a Perfect Weight  We advise you to check our latest posts <a href="our blog.html" style="color:blue">here</a>';

        }
    }
 
    // If she is a female Show
    if(gender == 'female') {
        message += '<br>You can see more articles for Women <a href="blog-classic for women.html"  style="color:blue">here</a>';
    } else {
        message += '<br>You can see more articles for Men <a href="blog-classic for men.html"  style="color:blue">here</a>';
    }
 
    if(activity == 'low') {
        message += '<br>You can see some tips for low activity for Men   <a href="blogM.html" style="color:blue">here</a>';
		message += '<br>You can see some tips for low activity for Women <a href="blog.html" style="color:blue">here</a>';
    } else {
        message += '<br>You can see some tips for high activity for Men   <a href="blogM1.html" style="color:blue">here</a>';
		message += '<br>You can see some tips for high activity for Women <a href="blog 1.html" style="color:blue">here</a>';
    }

    $('#result').html(message);
    $('#result').show(500);
})



/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);