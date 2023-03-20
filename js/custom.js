
  (function ($) {
  
  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // PROJECTS IMAGE RESIZE
    function NewsImageResize(){      
      var LargeImage = $('.projects-thumb-small .projects-image').height();

      $('.projects-thumb-large').css('height', LargeImage + 'px');
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


// IMAGE GALLERY

const fullImgBox = document.getElementById("full-ImgBox");
const fullImg = document.getElementById("full-img");

function openFullImg(reference){
  fullImgBox.style.display="flex";
  fullImg.src = reference
}
function closeImg(){
  fullImgBox.style.display="none";

}


// POPUP
const fulImgBox = document.getElementById("ful-ImgBox");
const fulImg = document.getElementById("fulImg");
function closeImg1(){
  fulImgBox.style.display = "none";
}
function openImg1(){
  fulImgBox.style.display = "flex";
}


// POPUP PERSONAL SALUD
const fulImgBoxdr1 = document.getElementById("ful-ImgBox-dr1");
const fulImgdr1 = document.getElementById("fulImg-dr1");
function closeImgdr1(){
  fulImgBoxdr1.style.display = "none";
}
function openImgdr1(){
  fulImgBoxdr1.style.display = "flex";
}

const fulImgBoxdr10 = document.getElementById("ful-ImgBox-dr10");
const fulImgdr10 = document.getElementById("fulImg-dr10");
function closeImgdr10(){
  fulImgBoxdr10.style.display = "none";
}
function openImgdr10(){
  fulImgBoxdr10.style.display = "flex";
}

const fulImgBoxdr11 = document.getElementById("ful-ImgBox-dr11");
const fulImgdr11 = document.getElementById("fulImg-dr11");
function closeImgdr11(){
  fulImgBoxdr11.style.display = "none";
}
function openImgdr11(){
  fulImgBoxdr11.style.display = "flex";
}

const fulImgBoxdr2 = document.getElementById("ful-ImgBox-dr2");
const fulImgdr2 = document.getElementById("fulImg-dr2");
function closeImgdr2(){
  fulImgBoxdr2.style.display = "none";
}
function openImgdr2(){
  fulImgBoxdr2.style.display = "flex";
}

const fulImgBoxdr3 = document.getElementById("ful-ImgBox-dr3");
const fulImgdr3 = document.getElementById("fulImg-dr3");
function closeImgdr3(){
  fulImgBoxdr3.style.display = "none";
}
function openImgdr3(){
  fulImgBoxdr3.style.display = "flex";
}

const fulImgBoxdr4 = document.getElementById("ful-ImgBox-dr4");
const fulImgdr4 = document.getElementById("fulImg-dr4");
function closeImgdr4(){
  fulImgBoxdr4.style.display = "none";
}
function openImgdr4(){
  fulImgBoxdr4.style.display = "flex";
}

const fulImgBoxdr5 = document.getElementById("ful-ImgBox-dr5");
const fulImgdr5 = document.getElementById("fulImg-dr5");
function closeImgdr5(){
  fulImgBoxdr5.style.display = "none";
}
function openImgdr5(){
  fulImgBoxdr5.style.display = "flex";
}

const fulImgBoxdr6 = document.getElementById("ful-ImgBox-dr6");
const fulImgdr6 = document.getElementById("fulImg-dr6");
function closeImgdr6(){
  fulImgBoxdr6.style.display = "none";
}
function openImgdr6(){
  fulImgBoxdr6.style.display = "flex";
}

const fulImgBoxdr7 = document.getElementById("ful-ImgBox-dr7");
const fulImgdr7 = document.getElementById("fulImg-dr7");
function closeImgdr7(){
  fulImgBoxdr7.style.display = "none";
}
function openImgdr7(){
  fulImgBoxdr7.style.display = "flex";
}






// CLIC DERECHO
document.oncontextmenu = function(){
  return false;
}