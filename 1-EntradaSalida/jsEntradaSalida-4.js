/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre = prompt("ingrese una palabra en la caja de textos") 
    
	document.getElementById("elNombre").value = nombre

}

