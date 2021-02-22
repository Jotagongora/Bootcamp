Proceso sin_titulo
//	34.Ejercicio
//	a) Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
//   b) Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor
	//   o menor que la lectura.
	definir num, num_aleatorio, limite_sup, limite_inf Como Entero;
	limite_sup = 10;
	limite_inf = 1;
	
	num_aleatorio = Aleatorio(limite_inf,limite_sup);
	leer num;
	Mientras num <> num_aleatorio Hacer
		
		Escribir "Has fallado, inténtalo de nuevo.";
		Leer num;

	FinMientras
	Escribir "Correcto, el número era ", num_aleatorio, ".";
	
	
	
FinProceso
