const numberList = document.querySelectorAll('input[type=button]');

function telefone(numberPhone) {
    const phone = document.querySelector('input[type=tel]');
    phone.value += numberPhone;
}

for(let cont = 0; cont < numberList.length; cont++) {
    const key = numberList[cont];
    const valueKey = key.value;

    key.onclick = function() {
        telefone(valueKey);
    }
    key.onkeydown = function(event) {
        if(event.code === 'Enter' || event.code === 'Space') {
            key.classList.add('ativa');
        }
    }
    key.onkeyup = function() {
        key.classList.remove('ativa');
    }
}