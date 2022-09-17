const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(selectAudio) {
    const element = document.querySelector(selectAudio);

    if(element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        if(event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
