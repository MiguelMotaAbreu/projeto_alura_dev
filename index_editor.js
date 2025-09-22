const botaoMudarCor = document.querySelector(".botao-selecionar-cor-borda__cor");

botaoMudarCor.addEventListener('input', function() {
    const corSelecionada = this.value;
    const quadradoCodigo = document.querySelector(".codigo-projeto__quadrado");
    quadradoCodigo.style.backgroundColor = corSelecionada;
});

