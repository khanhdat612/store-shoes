const numberInpts = document.querySelectorAll('.inp_number')
const numberGiams = document.querySelectorAll('.inp_giam')
const numberTangs = document.querySelectorAll('.inp_tru')


for (let index = 0; index < numberTangs.length; index++) {
    
    let a = 0;
    numberTangs[index].addEventListener('click', () => {
        a++;
        numberInpts[index].innerHTML = a;
    });
}

for (let index = 0; index < numberGiams.length; index++) {

    let a = 0;
    numberGiams[index].addEventListener('click', () => {
        a--;
        numberInpts[index].innerHTML = a;
    });
};
// numberTang.addEventListener('click', () => {
//     a++;
//     numberInpt.innerHTML = a;
// });
