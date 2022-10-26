const clickIcon = document.querySelector('.wellcome--icon');// icon
const clickIcon2 = document.querySelector('.wellcome--icon2');// icon2
const color = document.querySelector('.wellcome_contact');// color
const color2 = document.querySelector('.wellcome_policy');// color2
const showWellcome = document.querySelector('.wellcome_contact_click');//1
const showPolicy = document.querySelector('.wellcome_policy_click');//2

function clickIc(){
    showWellcome.classList.toggle('wellcome_contact_click_on');
    clickIcon.classList.toggle('wellcome--icon--deg'); 
    color.classList.toggle('wellcome_p');
    color.classList.toggle('wellcome_bottom');
    
}
clickIcon.addEventListener('click', clickIc);



function clickIc2(){
    showPolicy.classList.toggle('wellcome_policy_click--on');
    clickIcon2.classList.toggle('wellcome--icon2--deg');
    color2.classList.toggle('wellcome_policy--color');
    color2.classList.toggle('wellcome_bottom');

}
clickIcon2.addEventListener('click', clickIc2);


