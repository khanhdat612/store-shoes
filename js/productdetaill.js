const clickSize = document.querySelector('.container_product_details_size--sp');
const clickBlockDetaill = document.querySelector('.container_product_details_size_img');

clickSize.addEventListener('click', showSize);
function showSize(){
    clickBlockDetaill.classList.toggle('container_product_details_size_img--block');

}