function mostrar()
{
//tomo la edad
var edad;
var estadoCivil;

estadoCivil = document.getElementById("estadoCivil").value;

edad = parseInt(edad);
edad = document.getElementById("edad").value;
if (edad<18 && estadoCivil !=="Soltero")
{
    alert ("Es muy pequeño para NO ser soltero");
}

	


}//FIN DE LA FUNCIÓN