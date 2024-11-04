<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>amogus</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <a href="index.html">Página 1</a>
        <a href="index2.html">Página 1</a>
    </header>
    <section id="container">

    </section>

<footer>
<p>Desenvolvido por Otávio</p>
</footer>
<script src ="pagina2.js">
function criaCartao (categoria, pergunta, resposta){
   let container = document.getElementById('container');
   let cartao = document.createElement('article');
   cartao.className = 'cartao';
   cartao.innerHTML = `
   <div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
   `
   container.appendChild(cartao);
}
function viraCartao(card){
    const resposta = card.queryselector('.resposta-cartao');
    if (resposta.style.display === 'none') {
        resposta.style.display = 'block';
    }
    else {
resposta.style.display = 'none';
    }
}
</script>
