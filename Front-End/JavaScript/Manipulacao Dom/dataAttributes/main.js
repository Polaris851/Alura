const listaItem = document.querySelectorAll('.lista');
const mostrar = document.querySelector('[data-mostraTintas]');
const sumir = document.querySelector('[data-sumirTintas]');

mostrar.addEventListener('click', () => {
    listaItem.forEach((item) => {
        item.style.display = 'inline';
    })
})

sumir.addEventListener('click', () => {
    listaItem.forEach((item) => {
        item.style.display = 'none';
    })
})
