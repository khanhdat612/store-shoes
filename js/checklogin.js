    const clickinput = document.querySelector('.btn_login');
    
    function clickipt(){
        
        const input1 = document.querySelector('.check1');
        const input2 = document.querySelector('.check2');

        if(input1.value == '' || input2.value == '')
        {
            alert('Vui lòng điển tài khoản và mật khẩu!')
            input1.focus();
            return false;
        } else {
            return true;
        }

    }
    clickinput.addEventListener('click', clickipt)


