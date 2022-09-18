const form = document.getElementById('novoItem');
const lista = document.querySelector('.lista');
const itens = JSON.parse(localStorage.getItem('Itens')) || [];

itens.forEach((e) => {
    criaElemento(e);
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];

    const existe = itens.find(element => element.nome === nome.value);

    console.log(existe)
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe) {
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);

        itens[itens.findIndex(element => element.id === existe.id)] = itemAtual;
    } else {
        itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;

        criaElemento(itemAtual);

        itens.push(itemAtual);
    }

    localStorage.setItem('Itens', JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
})

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;
    novoItem.appendChild(buttonDeleta(item.id));

    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}

function buttonDeleta(id) {
    const elementoButton = document.createElement('button');
    elementoButton.innerHTML = 'X';
    elementoButton.addEventListener('click', function(){
        deletaElemento(this.parentNode, id);
    })

    return elementoButton;
}

function deletaElemento(tag, id) {
    tag.remove();

    itens.splice(itens.findIndex(element => element.id === id), 1);

    localStorage.setItem('Itens', JSON.stringify(itens));
}
