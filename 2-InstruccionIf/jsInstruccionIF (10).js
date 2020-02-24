function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 


	var RANDOM;
	RANDOM= Math.floor (Math.random() *10)+1;
	if (RANDOM>8)
	
	{
		alert("Exelente");
	}

		else if (RANDOM>4 && RANDOM<8)
		{
			alert("APROBO");
		}
	
			else
			{
				alert("Vamos la proxima se puede");
			}

}//FIN DE LA FUNCIÓN