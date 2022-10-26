const clickName = document.querySelectorAll('.category_click');
for(let i = 0; i < clickName.length; i++){
    clickName[i].addEventListener('click', () =>{
        document.querySelector('.category_click.category_click_active').classList.remove('category_click_active');
        clickName[i].classList.add('category_click_active');
    });
}