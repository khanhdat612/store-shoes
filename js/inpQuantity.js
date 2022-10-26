const numberInpt = document.querySelector('.inp_number')
const numberGiam = document.querySelector('.inp_giam')
const numberTang = document.querySelector('.inp_tru')

let a=1;
numberTang.addEventListener('click', () => {
    a++;
    numberInpt.innerHTML = a;
});
numberGiam.addEventListener('click', () => {
    a--;
    numberInpt.innerHTML = a;
});
