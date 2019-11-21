function contentScroll(){
  var item = document.getElementById("self-top");
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
  var item = document.getElementById("top");
  zenscroll.toY(0, 2000);
}
function imageScroll(){
  var item = document.getElementById("abt-me");
  zenscroll.center(item, 2000);
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
