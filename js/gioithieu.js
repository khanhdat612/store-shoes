
 
 //// click mess
 const clickMess = document.querySelector('.to-top_img');
 const mess_div = document.querySelector('.box_mess');
 const close_mess = document.querySelector('.close_mess');
 
function messenger(){
mess_div.classList.add('box_mess_active');
}
 clickMess.addEventListener('click',messenger);

   function closemess(){
      mess_div.classList.remove('box_mess_active');
   }
 close_mess.addEventListener('click',closemess);