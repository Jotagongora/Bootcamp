Proceso sin_titulo
//	34.Ejercicio
//	a) Generar un n�mero aleatorio (del 1 al 10) que el usuario debe adivinar.
//   b) Aumentar el l�mite superior a 100 y a�adir una ayuda al usuario: escribir si el n�mero es mayor
	//   o menor que la lectura.
	definir num, num_aleatorio Como Entero;
	
	num_aleatorio = Aleatorio(1,10);
	leer num;
	Mientras num <> num_aleatorio Hacer
		
		Escribir "Has fallado, int�ntalo de nuevo.";
		Leer num;

	FinMientras
	Escribir "Correcto, el n�mero era ", num_aleatorio, ".";
	
	
	
FinProceso
