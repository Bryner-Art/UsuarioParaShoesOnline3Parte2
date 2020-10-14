
function itemNuevo(){
	var dpi = document.getElementById("dpi").value;
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var datos = document.getElementById("zonadatos")

	datos.innerHTML ="<p>" +dpi+
						"<br>"+nombre+
						"<br>"+apellido+
						"<br>"+email+
						"<br>"+tel+"</p>";

	alert("Felicidades te has registrado correctamente")
}
