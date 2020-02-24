/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroArriba;
    var numeroAbajo;
    var resto;
    var resultado;
    
    numeroArriba = document.getElementById("numeroDividendo").value;
    numeroArriba = parseInt (numeroArriba);

    numeroAbajo = document.getElementById("numeroDivisor").value;
    numeroAbajo = parseInt (numeroAbajo);

    
    resto = numeroArriba % numeroAbajo;

    alert ("el resto es " + resto);








}
