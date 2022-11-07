$(function() {
    
//메뉴 바    
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-up').addClass('nav-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-down').addClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}

//내비 바 부드럽게 이동
$('.gnb-list li a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-70
    }, 500);
    
    return false;
    
  });
 $('.mo-gnb-list').click(function () {
   
    $('.header-menu').removeClass( 'open' );
   
    
  });   
//모바일 내비 바   
 $('.mo-gnb-btn').click(function () {
    $(this).toggleClass( 'open' );
    $('.header-menu').toggleClass( 'open' );
  });   
//영상 재생 후 이미지로 변경   
    function playvid() {
        $("#vid").trigger('play');
    }
    playvid() ;
 
    setTimeout(function (){

        $('#vid').addClass('unslick') ;
        $('.video-wrap').addClass('dd') ;

        
    },10000) ;
    
    
//팀 슬라이드
    var teamSlide = new Swiper('.team-slide', {
        
      slidesPerView: 'auto',
      spaceBetween: 30,
//      loop: true,
        

        
//      autoplay: {
//          delay: 3000,
//          disableOnInteraction: false,
//     },
      pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
      },
        breakpoints: {
         640: {
          slidesPerView: 1.9,
         
        }
        },
        
    });
    
    teamSlide.on('slideChange', function () {
        if(this.activeIndex === 1) {
             $(".swiper-slide-active").addClass('dd');
        }
    });
    
    

//텍스트 슬라이드


  $('.marquee-slide').marquee({  
        duration:28000,
       easing:'linear',
        delayBeforeStart:0,
            direction:'left',
      duplicated: true
    });
    
//하단으로 이동
 $('#go-down').click(function() {
        $('html, body').animate({scrollTop: $(document).height()}, 400);
        return false;
    });


    
    });


