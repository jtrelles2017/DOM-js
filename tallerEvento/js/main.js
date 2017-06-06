function muestra_oculta(id) {

  var textoMostrar = document.getElementById(id);

  if (document.getElementById) { //se obtiene el id
    if (textoMostrar.style.display == 'none') {
      textoMostrar.style.display = 'block';
      var nuevoP = document.createElement('p').appendChild(document.createElement('img').setAttribute('src="img/img1.jpg"'));
      textoMostrar.appendChild(nuevoP);
    } else {
      textoMostrar.style.display = 'none';
    }
  }
  alert(textoMostrar.id);
}

function printDOM(node, prefix) {
  console.log(prefix + node.nodeName);
  for (let i = 0; i < node.childNodes.length; i++) {
    printDOM(node.childNodes[i], prefix + ' ');
  }
}
printDOM(document, '');

function highlighterPen() {
  var arreglo = document.getElementsByTagName('p');
  for(let p of arreglo){
    p.classList.add('parrafo');
  }

}

function searchWord(){
  var buscar = "el";
  
  
}
window.onload = function () { /*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
  muestra_oculta('contenido_a_mostrar'); /* "contenido_a_mostrar" es el nombre que le dimos al DIV */
  highlighterPen();

}
