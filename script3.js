function verificarMaioridade() {

    var idade = parseInt(document.getElementById('idade').value);


    if (isNaN(idade) || idade < 0) {
        alert("Por favor, insira uma idade válida.");
        return;
    }

    var resultado = (idade >= 18) ? "Você é maior de idade." : "Você é menor de idade.";

    document.getElementById('resultado').innerText = resultado;
}