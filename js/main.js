$(function(){
 var shrinkHeader = 10;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('header').addClass('fixed');
        }
        else {
            $('header').removeClass('fixed');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

//----------------------------------------------
var video = document.getElementById("video"); 

document.getElementById("video-bg").onclick = function() {
	 if (video.paused) {
        video.play(); 
    	document.getElementById("video-bg").style.opacity="0";
    	document.getElementById("video-bg").style.backgroundImage="none";
	}else{
        video.pause();
    	document.getElementById("video-bg").style.opacity="0.7";
    	document.getElementById("video-bg").style.backgroundImage="";
	}
} 

//--------------------------------------
var tabs = Array.from(document.querySelectorAll("input[name=tabs]"));
var prevTab = tabs[0];
tabs.forEach(function(tab) {
    tab.onchange = function() {
        if (prevTab) {
            document.getElementById(prevTab.value).style.display ="none";
        }
        if(this.checked) {
            if (this !== prevTab) {
                prevTab = this;
            }
            document.getElementById(this.value).style.display ="flex";
        }
    }
});
//-------------------------------------------
$(document).ready(function(){
  $('.sl-partners').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.sl-partners-prev'),
    nextArrow: $('.sl-partners-next'),
    responsive: [
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  $('.sl-info').slick({
    prevArrow: $('.sl-info-prev'),
    nextArrow: $('.sl-info-next'),
    fade: true
  });  
});

$('.sl-info').on('init', function(event, slick){
  setSlideCount(slick.slideCount);
  setCurrentSlideNumber(slick.currentSlide);
});
$('.sl-info').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount(slideCount) {
  var $el = $('.sl-numbers').find('.sl-count');
  $el.text(getNumberText(slideCount));
}
function setCurrentSlideNumber(currentSlide) {
  var $el = $('.sl-numbers').find('.sl-current');
  $el.text(getNumberText(currentSlide + 1));
}
function getNumberText(number){
  if(number < 10) {
    return "0"+number;
  } else {
    return number;
  }
}