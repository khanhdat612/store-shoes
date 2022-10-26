    //clicks and show contents
    const clickChiNhanhs =document.querySelectorAll('.btn_chinhanh');
    const showChiNhanhs =document.querySelectorAll('.map_none');
        for (let i = 0; i < clickChiNhanhs.length; i++){
            clickChiNhanhs[i].addEventListener('click', () =>{
              document.querySelector('.map_none.active').classList.remove('active');
              showChiNhanhs[i].classList.add('active');
            })
        }

//color buttons
function showBTN(){
  const clickChiNhanhs =document.querySelectorAll('.btn_chinhanh');
  for (let i = 0; i < clickChiNhanhs.length; i++){
    clickChiNhanhs[i].addEventListener('click', () =>{
      document.querySelector('.btn_chinhanh.btn--active').classList.remove('btn--active');
      clickChiNhanhs[i].classList.add('btn--active');
    });
  } 
}
showBTN();


