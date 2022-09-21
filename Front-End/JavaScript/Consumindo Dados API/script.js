var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        
        if(consultaCEPConvertida.erro) {
            throw Error("CEP não existente!");
        }

        var bairro = document.getElementById("bairro");
        var logradouro = document.getElementById("endereco");
        var cidade = document.getElementById("cidade");
        var estado = document.getElementById("estado");

        bairro.value = consultaCEPConvertida.bairro;
        logradouro.value = consultaCEPConvertida.logradouro;
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;

        return consultaCEPConvertida;
    } catch(erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
    }
}

