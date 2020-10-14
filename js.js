
function itemNuevo(){

  function register(dpi,nombre,apellido,email,tel){

  	this.dpi=dpi;
  	this.nombre=nombre;
  	this.apellido=apellido;
  	this.email=email;
  	this.tel=tel;

  }

	var Capdpi = document.getElementById("dpi").value;
	var Capnombre = document.getElementById("nombre").value;
	var Capapellido = document.getElementById("apellido").value;
	var Capemail = document.getElementById("email").value;
	var Captel = document.getElementById("tel").value;

	newregister = new register(Capdpi,Capnombre,Capapellido,Capemail,Captel);
   itemAgregar();
   }
   var basedatos= [];
   function itemAgregar(){
  
   basedatos.push(newregister);
   document.getElementById("tabla").innerHTML += "<tbody><td>"+newregister.dpi+"</td><td>"+newregister.nombre+"</td><td>"+newregister.apellido+"</td><td>"+newregister.email+"</td><td>"+newregister.tel+"</td></tbody>";

   document.getElementById("dpi").value="";
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";
   }


	/*datos.innerHTML +="<p>" +dpi+
						"<br>"+nombre+
						"<br>"+apellido+
						"<br>"+email+
						"<br>"+tel+"</p>";

    document.getElementById("dpi").value="";
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";*/

