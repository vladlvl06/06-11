// 1.
document.getElementById('titulo').style.backgroundColor = 'blue';

// 2.
const paragrafos = document.getElementsByClassName('paragrafo');
for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].style.fontSize = '20px';
}

// 3.
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Novo parágrafo adicionado!';
document.body.appendChild(novoParagrafo);

// 4.
const todosParagrafos = document.querySelectorAll('.paragrafo');
if (todosParagrafos.length > 0) {
    todosParagrafos[0].remove();
}

// 5.
const paragrafoAlterar = document.querySelector('.paragrafo'); 
if (paragrafoAlterar) {
    paragrafoAlterar.textContent = 'Texto alterado com sucesso!';
}