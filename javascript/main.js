function contentScroll(){
  var item = document.getElementById("top");
  zenscroll.center(item, 2000, 200);
}
function cvScroll(){
  var item = document.getElementById("cv");
  zenscroll.center(item, 2000);
}
function aboutScroll(){
  var item = document.getElementById("abt-me");
  zenscroll.center(item, 3000);
}
function topScroll(){
  var item = document.getElementById("self-top");
  zenscroll.toY(0, 2000);
}
function imageScroll(){
  var item = document.getElementById("abt-me");
  zenscroll.center(item, 2000);
}

function maxScroll(){
  if($(window).scrollTop() >=10)
  {
    $(window).scrollTop(0);
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function loopDown(){
       $("#to-top").animate({
           marginTop : -10
           },
           500, function() {
           loopUp();
       });
   }
   function loopUp(){
       $("#to-top").animate({
           marginTop : 0
           },
           500, function() {
           loopDown();
       });
   }
 loopDown();
