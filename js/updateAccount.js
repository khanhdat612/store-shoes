const itemUpdate = document.querySelector('.click--Update');
const showUpdate = document.querySelector('.click_account');
const stopNoiBot = document.querySelector('.click_account_brg');

function update(){
    showUpdate.classList.add('click_account--active');
}
itemUpdate.addEventListener('click',update);

function remove(){
    showUpdate.classList.remove('click_account--active');
}
showUpdate.addEventListener('click',remove);

stopNoiBot.addEventListener('click', function(event){
    event.stopPropagation();
});