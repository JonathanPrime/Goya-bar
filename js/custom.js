/*---------------------------------
[Master Javascript]

Project: Music

-------------------------------------------------------------------*/

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
    document.getElementById('img-logo').src = '../images/svg/logo-dark.svg';
  } else {
    document.querySelector('.header').classList.remove('active');
    document.getElementById('img-logo').src = '../images/svg/logo-white.svg';
  }
}
(function($) {
	"use strict";
	var Music = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function() {
			if (!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- Music Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.homeslider();
			this.playlist_crousel();
			this.smooth_scroll();
			this.Responsive_menu();
			this.Active_menu();
			this.audio_player();
			this.MailFunction();
			this.wowanimation();
		},
		/*-------------- Music Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function() {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if (rtl_attr) {
				$('html').find('body').addClass("rtl");
			}
		},
		
		//main slider
		homeslider: function() {
			if($(".home_slider").length > 0){ 
				$('.home_slider').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					singleItem:true,
					autoplay:true,
					autoplayTimeout:6000,
					autoplaySpeed:1000,
					smartSpeed:1500,
					dots:false,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						1000:{
							items:1
						}
					},
					animateIn:'slideup',
					animateOut:'slidedown',
					touchDrag:true,
					mouseDrag:false,
				})
			}
		},
		//fullslider
		//playlist crousel
		playlist_crousel: function() {
			if($(".playlist_slider").length > 0){ 
				$('.playlist_slider').owlCarousel({
					loop:true,
					margin:0,
					items:2,
					autoplay:false,
					autoplayTimeout:4000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:false,
					nav:true,
					navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						768:{
							items:1
						},
						992:{
							items:2
						}
					}
				})
			}
		},
		
		//smooth scroll
		smooth_scroll: function() {
			$(function() {
			  $('.header_right_menu ul > li > a').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html, body').animate({
					  scrollTop: target.offset().top
					}, 1000);
					return false;
				  }
				}
			  });
			});
		},
		//Responsive Menu
		Responsive_menu: function() {
			/* $(".nav_toggle").on('click',function(){
				$(this).toggleClass("toggle_open");
				$(".header_right_menu").slideToggle(500);
			}); */
		},
		//Active menu
		Active_menu:function(){
			$('#customers-testimonials').owlCarousel({
				loop: true,
				nav: true,
				navText: ["<div class='nav-button owl-next'>‹</div>", "<div class='nav-button owl-prev'>›</div>"],
				center: true,
				items: 3,
				margin: 0,
				autoplay: true,
				dots: false,
				autoplayTimeout: 8500,
				smartSpeed: 450,
			 
				responsive: {
				   0: {
					  items: 1
				   },
				   768: {
					  items: 2
				   },
				   1170: {
					  items: 3
				   },
				   3840: {
					  items: 3
				   }
				}
			 });
			
		},
		//audio player
		audio_player:function(){
			$('audio').mediaelementplayer({
				loop: true,
				playlist: true,
				favourite: true,
				audioHeight: 30,
				playlistposition: 'bottom',
				features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'tracks', 'current', 'duration', 'progress', 'volume']
			});
			
			// $(".play_button").on("click",function(e){
				// var song = $(this).attr("data-song");
				// $("audio source").attr("src",song);
				// e.preventDefault();
			// });
		},
		//contact form mail script
		MailFunction:function(){
			$('.submit_btn').on('click', function(){
				var name=$('#u_name').val();
				var email=$('#u_email').val();
				var sub=$('#u_subject').val();
				var u_msg=$('#u_message').val();
				$.ajax({
					type: "POST",
					url: "contactmail.php",
					data: {
						'username':name,
						'useremail':email,
						'usersub':sub,
						'usermsg':u_msg,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#u_name').val("");
							$('#u_email').val("");
							$('#u_subject').val("");
							$('#u_message').val("");
							$('#err_msg').html( full_msg[1] );
						}
						else{
							$('#u_name').val(name);
							$('#u_email').val(email);
							$('#u_subject').val(sub);
							$('#u_message').val(u_msg);
							$('#err_msg').html( full_msg[1] );
						}
					}
				});
			});
		},
		//animation on page scroll
		wowanimation:function(){
			var wow = new WOW({
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
			})
			wow.init();
		},
	
   };
	Music.init();
	//window load function
	$(window).load(function(){
		$(".preloader").fadeOut("slow").delay("600");
	});
	
	//window scroll function
	$(window).bind('scroll', function() {
        if ($(window).scrollTop() > 200 ) {
            $('.ms_header_section').addClass('fixed_top_menu');
        }
		else {
            $('.ms_header_section').removeClass('fixed_top_menu');
        }
    });

})(jQuery);

popupWhatsApp = () => {

	let btnClosePopup = document.querySelector('.closePopup');
	let btnOpenPopup = document.querySelector('.whatsapp-button');
	let popup = document.querySelector('.popup-whatsapp');
	let sendBtn = document.getElementById('send-btn');
 
	btnClosePopup.addEventListener("click", () => {
	   popup.classList.toggle('is-active-whatsapp-popup')
	})
 
	btnOpenPopup.addEventListener("click", () => {
	   popup.classList.toggle('is-active-whatsapp-popup')
	   popup.style.animation = "fadeIn .6s 0.0s both";
	})
 
	sendBtn.addEventListener("click", () => {
	   let msg = document.getElementById('whats-in').value;
	   let relmsg = msg.replace(/ /g, "%20");
	   //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
	   window.open('https://wa.me/573112163664?text=' + relmsg, '_blank');
 
	});
 
	/* Open pop-up in 15 seconds */
	/* setTimeout(() => {
	  popup.classList.toggle('is-active-whatsapp-popup');
	}, 8000); */
 
 }
 
 popupWhatsApp();