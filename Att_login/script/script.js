function logar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('Senha').value;

    var n = 'leticiaNatali';
    var s = 'natali';

    //se o usuário errar a senha ou o usuário acontece isso:
    if ((nome !== n) || (senha !== s)) {
        // "||"" = OU.
        // ! inverte o sentido, nesse caso ao invés de "==" ser uma comparação, ela determina que "==" é diferente de algo.
        alert("Senha ou usuário incorretos!!!")
    } else {
        window.location.href = "index2.html";// Para linkar(?) uma página na outra.
    }
}
