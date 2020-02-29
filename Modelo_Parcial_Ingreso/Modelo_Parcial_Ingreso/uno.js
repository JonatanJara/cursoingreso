
function mostrar()
{
var ladoA=document.getElementById("ladoA").value;
var ladoB=document.getElementById("ladoB").value;
var angulosRectos=document.getElementById("angulosRectos").value;
ladoA=parseInt(ladoA);
ladoB=parseInt(ladoB);
if (angulosRectos == "SI") {

  if (ladoA == ladoB) {
 //cuadrado
    resultado = ladoA*ladoB;
    alert("Resultados: lados concatenados: " +ladoA +ladoB  +  " la multiplicacion es: " + resultado);
    }
    else {
      //rectangulo
      resultado = ladoA*ladoB;
      alert("Resultados: lados concatenados: " + ladoA+ladoB + " la superficie es: " + resultado);
    }
}
else if(ladoA == ladoB){
  //rombo
  resultado = ladoA+ladoB;
  alert("Resultado: lados concatenados: " +ladoA+ladoB + " la suma de sus lados es: " + resultado);
  }
else {
  //rombide
  resultado = (ladoA+ladoB)*2;
  alert("Resultado: lados concateados: "+ladoA+ladoB+ " el perimetro es: " + resultado);
}



}
