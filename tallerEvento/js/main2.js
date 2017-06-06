var sentences = document.getElementsById("sentences");
var buscar = document.getElementById("buscar");

var palabra = "i";
var encontrado = false;

buscar.addEventListener('click', function (event) {
    var text = sentences.textContent;
    var regex = new RegExp('(' + palabra + ')', 'ig');


    if (encontrado) {
        text = text.text.replace(regex, '<span class="">$1</span>');
        buscar.textContent = "off";
        encontrado = false;

    } else {
        text = text.replace(regex, '<span class="on">$1</span>');
        buscar.textContent = "on";
        encontrado = true;
    }

    sentences.innerHTML = Text;

}, false);
