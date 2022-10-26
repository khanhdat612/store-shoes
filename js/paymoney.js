const clickCheck = document.getElementById('myCheckbox');
const showCheck = document.querySelector('.checkProduct');
const closeshowBlock = document.querySelector('.close_showBlock'); 

clickCheck.addEventListener('click', showBlock);
function showBlock(){
  showCheck.classList.add('blockCheck')
}

closeshowBlock.addEventListener('click', closeBlock);
function closeBlock(){
  showCheck.classList.remove('blockCheck')
}


const boxProduct = document.querySelector('.paymoneyProduct_check');
const boxTotal =document.querySelector('.checkProduct_2');


boxTotal.addEventListener('click', closeBlock);
boxProduct.addEventListener('click', (event) => {
  event.stopPropagation();
})