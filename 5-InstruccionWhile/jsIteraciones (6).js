function mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma;
	var promedio;

while (contador<5)
{
	contador=contador+1;
	suma=prompt("ingrese el " + contador + "numero");
	suma=parseInt(suma);

	acumulador=acumulador+suma;

}






document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN