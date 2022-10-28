const clickName = document.querySelectorAll('.category_click');
for(let i = 0; i < clickName.length; i++){
    clickName[i].addEventListener('click', () =>{
        document.querySelector('.category_click.category_click_active').classList.remove('category_click_active');
        clickName[i].classList.add('category_click_active');
    });
}

/// CHECK INPUT RADIO
const radioButtons = document.querySelectorAll('input[name="category"]');
    for (const radioButton of radioButtons) {
        radioButton.addEventListener('change', showSelected);
    }

function showSelected(e) {
        if (this.checked) {
            document.querySelector('#result').innerText = `X Bỏ chọn`;
        }
}            
/// Click bỏ chọn
const clickX = document.querySelector('.click_result');
    function removeX(){
        clickX.classList.toggle('noActive');
        document.getElementById('checkedActive').checked= "checked";
    }
clickX.addEventListener('click', removeX)