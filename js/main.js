$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    autoplay: true,
    speed:2000,
  });


// -----close open mneu--------
const clickMenu = document.querySelector('.menu_js');
const clickClose = document.querySelector('.close_menu');
const form_menu = document.querySelector('.menu_mobile_reponsive');

function showMenu(){
  form_menu.classList.add('menu_mobile');
}
clickMenu.addEventListener('click', showMenu)


function hideMenu(){
  form_menu.classList.remove('menu_mobile');
}
clickClose.addEventListener('click', hideMenu)






