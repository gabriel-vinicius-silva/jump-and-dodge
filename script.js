// script.js
let personagem = document.querySelector('#personagem');
let quadrado = document.querySelector('#quadrado');

function pular() {
    if (!personagem.classList.contains('animar')) {
        personagem.classList.add('animar');
        setTimeout(function () {
            personagem.classList.remove('animar');
        }, 500);
    }
}
