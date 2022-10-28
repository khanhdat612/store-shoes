const clickItem1 = document.querySelector('.click_items_menu1')
const clickItem2 = document.querySelector('.click_items_menu2')
const clickItem3 = document.querySelector('.click_items_menu3')
const clickItem4 = document.querySelector('.click_items_menu4')
const showItem1 = document.querySelector('.menu_mobile1');
const showItem2 = document.querySelector('.menu_mobile2');
const showItem3 = document.querySelector('.menu_mobile3');
const showItem4 = document.querySelector('.menu_mobile4');

function showContent() {
    showItem1.classList.toggle('active_menu_mobile_reponsive');
}
function showContent2() {
    showItem2.classList.toggle('active_menu_mobile_reponsive');
}
function showContent3() {
    showItem3.classList.toggle('active_menu_mobile_reponsive');
}
function showContent4() {
    showItem4.classList.toggle('active_menu_mobile_reponsive');
}
clickItem1.addEventListener('click', showContent);
clickItem2.addEventListener('click', showContent2);
clickItem3.addEventListener('click', showContent3);
clickItem4.addEventListener('click', showContent4);