function mostrar()
{
	var contador=0;
	var acumulador=0;
	var suma;
	var continuar="s";

while (continuar=="s")
{
	contador=contador+1;
	suma=prompt("ingrese el " + contador + "numero");
	suma=parseInt(suma);

	acumulador=acumulador+suma;

	continuar=prompt("desea continuar?? s/n"); 
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN