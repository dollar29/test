$(document).ready(function(){
    $(".scrollbtn img").click(function(){
      $(".scrollbtn img").fadeOut(1700);
      $(".lamp img").fadeOut(2200);
      $(".scroll").fadeIn(2200);
      $(".l-pic-index").animate({left:"0%"},2700);
      $(".r-pic-index").animate({left:"93%"},2700);
      $(".l-bg-index").animate({'width':'43%',right:'50%'},2700);
      $(".r-bg-index").animate({'width':'43%',left:'50%'},2700,function(){
          $(".main-index").fadeIn(800);
      });
    });
  });
/*
function Switch() {
    //var type = document.body.className;
    var bodyElement = document.body.className;
    var afterStyle = window.getComputedStyle(bodyElement, ":after");
    var type = afterStyle;
    if (type == "light") {
document.body.className = "dark";
    } else {
document.body.className = "light";
    }
}
*/