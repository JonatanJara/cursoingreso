/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	document.getElementById("elNombre").value = "Mi nombre es Jose y "
    document.getElementById("laEdad").value = " tengo 86 años "
    var nombre = document.getElementById("elNombre").value + document.getElementById("laEdad").value;
    alert (nombre)
}

