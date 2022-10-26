

function ShowDonHang() {
    const clickChecks = document.querySelectorAll('.donhang_status_item');// CÁI MÀ MÀY CLICK VÀO
    const clickBanes = document.querySelectorAll('.banner_donhang'); // NỘI DUNG CẦN SHOW
    for (let index = 0; index < clickChecks.length; index++) {
      clickChecks[index].addEventListener('click', () => {
      document.querySelector('.banner_donhang.active').classList.remove("active");
      clickBanes[index].classList.add("active");
      })
    }
}
ShowDonHang();



function checkClick(){
const clickChecks = document.querySelectorAll('.donhang_status_item');
  for (let i = 0 ; i < clickChecks.length; i++) {
    clickChecks[i].addEventListener('click', () => {
      document.querySelector('.donhang_status_item.bannerDonhang--p').classList.remove("bannerDonhang--p");
      clickChecks[i].classList.add("bannerDonhang--p");
    });
  }
}
checkClick();