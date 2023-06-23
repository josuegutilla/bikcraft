// ativar link
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if(url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);


//selecionando itens de compra via url
const parametros = new URLSearchParams(location.href); //pegando cada parametro passada na url ex: seguro, prata

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true
  }
}

parametros.forEach(ativarProduto);