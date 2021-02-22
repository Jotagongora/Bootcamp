Proceso sin_titulo
//	34.Ejercicio
//	a) Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
//   b) Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor
	//   o menor que la lectura.
	definir num, num_aleatorio Como Entero;
	
	num_aleatorio = Aleatorio(1,10);
	leer num;
	Mientras num <> num_aleatorio Hacer
		
		Escribir "Has fallado, inténtalo de nuevo.";
		Leer num;

	FinMientras
	Escribir "Correcto, el número era ", num_aleatorio, ".";
	
	
	
FinProceso
