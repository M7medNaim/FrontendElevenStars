

function sliderbgMove() {
    var moveForce = 25;
    var mainSection = document.querySelector('main');
    var docX = mainSection.offsetWidth;
    var docY = mainSection.offsetHeight;
  
    mainSection.addEventListener('mousemove', function(e) {
      var moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
      var moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;
      var imgLayer = mainSection.querySelector('.tg-imglayer');
      imgLayer.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    });
  }
  
  sliderbgMove();

  var swiper = new Swiper('#tg-pointstable-slider', {
		direction: 'vertical',
		slidesPerView: 6,
		spaceBetween: 10,
		mousewheelControl: true,
		nextButton: '.tg-themebtnnext',
		prevButton: '.tg-themebtnprev',
		autoplay: 2500,
	});

  /*------------------------------------------
		CUSTOM FUNCTION WRITE HERE
------------------------------------------*/
$(document).ready(function() {
	
	var loader_html = '<div class="system-site-wrap"><div class="system-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>';
	
	
	/*------------------------------------------
			ALL MATCHS SLIDER
	------------------------------------------*/
	var mainswiper = new Swiper('#tg-upcomingmatch-slider', {
		direction: 'vertical',
		slidesPerView: 3,
		spaceBetween: 10,
		mousewheelControl: true,
		nextButton: '.tg-themebtnnext',
		prevButton: '.tg-themebtnprev',
		autoplay: 0,
	});
	/* ---------------------------------------
			MEDIA SCROLLBAR RESET
	-------------------------------------- */
	function resetScrollbar(){
		$('#tg-filterbale-nav li a').on('click', function () {
			$('#tg-soccermediascrollbar').html();
			$('#mCSB_1_container').animate({left: '0'});
		});
	}
	resetScrollbar();
});

AOS.init();

// modal video youtube
let modal = document.querySelector('.ifram .videoShow');
let showVideo = document.querySelector('.ifram .video');
let close = document.querySelector('.ifram .videoShow .close');
showVideo.onclick = _ => {
	modal.classList.toggle('show');
  };
  close.onclick = _ => {
	modal.classList.remove('show');
  };

