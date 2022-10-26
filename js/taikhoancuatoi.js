const clickAvt = document.querySelector('.account_top_img');
const openimg = document.querySelector('.avatar_items');

function showImage(){
    openimg.classList.add('avatar_items--active');
}
clickAvt.addEventListener('click', showImage);