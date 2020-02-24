function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo !="m" && sexo != "f")
{
    sexo= prompt("sexo incorrecto ingrese f o m");
}

alert ("bienvenido");
document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN