Proceso sin_titulo
//	34.Ejercicio
//	a) Generar un n�mero aleatorio (del 1 al 10) que el usuario debe adivinar.
//   b) Aumentar el l�mite superior a 100 y a�adir una ayuda al usuario: escribir si el n�mero es mayor
	//   o menor que la lectura.
	definir num, num_aleatorio, limite_sup, limite_inf, contador Como Entero;
	contador = 1;
	limite_sup = 100;
	limite_inf = 1;
	num_aleatorio = Aleatorio(limite_inf,limite_sup);
	leer num;
	Mientras num <> num_aleatorio Hacer
		contador = contador + 1;
		si num < num_aleatorio Entonces
			Escribir "Has fallado, la solci�n es mayor.";
		SiNo
			Escribir "Has fallado, la solci�n es menor.";
		FinSi
		
		Leer num;

	FinMientras
	si contador < 8 Entonces
		
		Escribir "Correcto, eres un crack.";
	SiNo
		Escribir "Correcto, pero en demasiados intentos, mejor juega al fifa.";
	
	FinSi
	
	
FinProceso
