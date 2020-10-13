function comenzar{
 
var boton=document.getElementById("grabar");
boton.addEventListener("click", itemNuevo, false);

}


function itemNuevo(){
	var dpi = document.getElementById("dpi").value;
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;

	sessionStorage.setItem(dpi,nombre,apellido,email,tel);

	leerymostrar(nombre);
}

function leerymostrar(nombre){
	var zonadatos = document.getElementById("zonadatos");
	var pornombre = sessionStorage.getItem(nombre);

	zonadatos.innerHtml="Nombre:      "+pornombre+
						"<br>Apellido:    "+apellido+
						"<br>DPI:         "+dpi+
						"<br>Correo:      "+email+
						"<br>Telefono:    "+tel;

}

window.addEventListener("load", comenzar, false);