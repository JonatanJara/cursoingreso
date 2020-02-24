/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero;
 
    numero = document.getElementById("numeroUno").value;
    numero = parseInt (numero);

    var numeroDos;

    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt (numeroDos);
    
    alert ("La suma es: "  +  (numero+numeroDos));


}

