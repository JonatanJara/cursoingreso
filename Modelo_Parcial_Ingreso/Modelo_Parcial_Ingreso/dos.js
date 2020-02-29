function mostrar()
{
var nombre;
var genero;
var edad;
var peso;
var acumuladorDeEdades;
var pesoMinimo;
var personaMenosPesada;
var contadorDistinto=0;
var respuesta=".";
var promedio=0;
var contadorDeMayores=0;
for (var i = 0; i<4; i++)
{

  nombre=prompt("ingrese nombre");
  genero=prompt("ingrese genero: Masculino/Femenino/Otro");
  while(genero != "masculino" && genero !="femenino " && genero!= "otro"){
    genero=prompt("error ingrese un genero valido  masculino/femenino/otro");}
    edad=parent(prompt("ingrese edad entre 18 y 100"));
    while(isNaN(edad) || edad <=18 || edad>=100){
      edad=parseInt(prompt("error ingrese una edad valida"));}

      //entiendo que peso tiene que ser mayor a 1
      peso=parseInt(prompt("ingrese un peso"));
      while(isNaN(peso) || peso<1){
        peso=parseInt(prompt("error ingresar un peso valido"));}
  if (edad>=25){
    acumuladorDeEdades=acumuladorDeEdades+edad;
    contadorDeMayores25++;}
    if(peso<pesoMinimo){
      pesoMinimo=peso;
      personaMenosPesada=nombre;}
      if(genero!="masculino" || peso>80){
        contadorDistinto++;}
      if(contadorDeMayores25>0){
        promedio=acumuladorDeEdades/contadorDeMayores25;
        respuesta+= " el promedio de edades mayor a 25: " + promedio+"<br>";}
        else{
          respuesta += "no hay edades mayores a 25"+"<br>"
        }
        respuesta+= "nombre de la persona menos pesada y su peso: " +personaMenosPesada+" "+pesoMinimo+"Kg"+"<br>"
        respuesta+= "cantidad de personas de genero distinto a masculino o peso mayor a 80: "+contadorDistinto+"<br>"

} alert(respuesta);





}
