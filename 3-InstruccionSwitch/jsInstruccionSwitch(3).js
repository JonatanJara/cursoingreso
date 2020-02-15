function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
 case "Febrero":
     alert ("Este mes no tiene mas de 30 dias");
 break;


    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert ("Este mes tiene 30  o mas dias");
 
  break;
}	
}//FIN DE LA FUNCIÓN