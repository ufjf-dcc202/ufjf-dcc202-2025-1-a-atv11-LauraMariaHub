import { getLista, adicionaNaLista, removeDaLista, limpaLista } from "./lista.js";

const olItens = document.querySelector('#itens');
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}


btnAdicionar.addEventListener('click', function() {
     const texto = pEntrada.textContent.trim();
     adicionaNaLista(texto);
     atualizarLista();
});


btnLimpar.addEventListener('click', function() {
   limpaLista();
   atualizarLista(); 
});




atualizarLista();