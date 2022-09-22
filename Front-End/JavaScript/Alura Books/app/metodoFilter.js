const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == "disponiveis" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

    exibirOsLivrosNaTela(livrosFiltrados);

    if(categoria == "disponiveis") {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);

        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(total) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
    </div>
    `
}