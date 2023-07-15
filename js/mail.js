document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    const b7 = document.getElementById('b7');
    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);        
        if (error===0) {
        b7.classList.add('sending');
        let responce = await fetch('../send.php', {
            method: 'POST',
            body: formData
        });
        if (responce.ok) {
            let result = await responce.json();
            alert(result.message);
            form.reset();
            b7.classList.remove('sending');
        }
        else {
            b7.classList.remove('sending');
            alert("Ошибка")
        }
        }        
    }
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');
        for (let index=0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);
            if (input.classList.contains('email-form-2')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            }    
        }
        return error;        
    }


    function formRemoveError(input) {
        input.parentElement.classList.remove('error');
        input.classList.remove('error');
    }
    function formAddError(input) {
        input.parentElement.classList.add('error');
        input.classList.add('error');
    }

    
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

})

