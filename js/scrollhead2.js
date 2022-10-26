// scroll header2
var scrollHeader2 = 0;
 header2 = document.querySelector('.header');
 function scroll2() {
    var scrollTop2 = window.pageYOffset || document.documentElement.scrollTop2; 
    if (scrollTop2 > scrollHeader2) {
      header2.style.top = "-130px";
    } else {
      header2.style.top = "0px";
  
    }
    scrollHeader2 = scrollTop2;
 }
window.addEventListener('scroll', scroll2)

