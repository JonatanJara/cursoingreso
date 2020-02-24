/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

var sueldo;
var resultado;
var importe;

sueldo = document.getElementById("sueldo").value;
sueldo = parseInt(sueldo);

importe = sueldo * 0.1;
resultado = sueldo + importe;
document.getElementById("resultado").value= resultado;










	
}
