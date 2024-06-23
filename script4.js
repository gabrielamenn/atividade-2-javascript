function repetirFrase() {

    var frase = document.getElementById('frase').value;


    if (frase.trim() === "") {
        alert("Por favor, insira uma frase.");
        return;
    }

    var resultado = "";
    for (var i = 0; i < 10; i++) {
        resultado += (i + 1) + ". " + frase + "<br>";
    }

    document.getElementById('resultado').innerHTML = resultado;
}