function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;

switch (mesDelAño) 
    {
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert ("Falta para el invierno");
    break;

    case "Julio" :
    case "Agosto":
    case "Septiembre":
        alert ("abrigate que hace frio");
    break;

    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert ("Ya pasamos el frio, ahora calor");
    break;
    }   
}//FIN DE LA FUNCIÓN