
function mostrar()
{
var productoDeContagio;
var tipoDeProducto;
var i;
var precio;
var respuesta;
var cantidadDeUnidades;
var contadorDeUnidades;
var contadorDeUnidadesMaximo;
var cantidadDeUnidadesDeJabon;
var marca;
var fabricante;
var contadorDeBarbijos=0;
var precioMayorDeBarbijos;
for (i=0; i<=5; i++)
{

productoDeContagio= prompt("ingrese productos de prevención de contagio");
tipoDeProducto= prompt("ingrese el tipo del producto: barbijo, jabon o alcohol");

while (tipoDeProducto != "barbijo" && tipoDeProducto != jabon && tipoDeProducto != "alcohol")
 {
	 tipoDeProducto = prompt("Error, ingrese barbijo, jabon o alcohol");
	 precio = parseInt (prompt("ingrese un precio entre 100 y 300"));
	 while (isNaN(precio) || precio<100 || precio>300) 
	 {
		precio = parseInt(prompt("Error ingrese un precio valido entre 100 y 300"))
		cantidadDeUnidades = parseInt(prompt("ingrese cantidad de unidades mas de 0 y menos que 1000"));
		while(isNaN(cantidadDeUnidades) || cantidadDeUnidades<0 || cantidadDeUnidades>1000)
		{
			cantidadDeUnidades=prompt("Error reingrese cantidad de unidades entre 0 y 1000");
		if (precioMayorDeBarbijos>0)
		{
			precioMayorDeBarbijos=contadorDeBarbijos+precioMayorDeBarbijos;
			contadorDeBarbijos++;
			if (cantidadDeUnidades>contadorDeUnidades) {
			cantidadDeUnidades=cantidadDeUnidades+contadorDeUnidades;
			contadorDeUnidades++;
			fabricante=prompt("ingrese fabricante");
			if (cantidadDeUnidades>contadorDeUnidades)
			{
				contadorDeUnidadesMaximo=contadorDeUnidadesMaximo+contadorDeUnidades;
				contadorDeUnidadesMaximo++;
				fabricante;
				if (contadorDeUnidades>0 && tipoDeProducto==jabon){
						cantidadDeUnidadesDeJabon=cantidadDeUnidadesDeJabon+contadorDeUnidades;
						cantidadDeUnidadesDeJabon++;
				}
			}
			}

		}	

		}
	 } 
 }


respuesta+="el mas caro de los barbijos " + tipoDeProducto + "cantidad de unidades" + cantidadDeUnidades + "fabricante" + fabricante + "<br>"
respuesta+= "el item con mas unidades es " + contadorDeUnidadesMaximo + "el fabricante es" + fabricante + "<br>";
respuesta+= "cantidad de unidades de jabon " + cantidadDeUnidadesDeJabon;


}









}
