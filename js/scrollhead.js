// scroll header
var scrollHeader = 0;
 header = document.getElementById('header');
 function scroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    if (scrollTop > scrollHeader) {
      header.style.top = "-174px";
    } else {
      header.style.top = "0px";
  
    }
    scrollHeader = scrollTop;
 }
window.addEventListener('scroll', scroll)

