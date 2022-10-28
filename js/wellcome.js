const clickBtn = document.querySelector('.click_btn');
const openbox = document.querySelector('.click_wall');
const closebox = document.querySelector('.click_account_brg2');


function showBox(){
    openbox.classList.add('click_wall--active');
}
clickBtn.addEventListener('click', showBox);

function remove(){
    openbox.classList.remove('click_wall--active');
}
openbox.addEventListener('click', remove);


closebox.addEventListener('click', function(event){
event.stopPropagation();
});