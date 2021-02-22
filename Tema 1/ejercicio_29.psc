Proceso sin_titulo
	definir factorial, num, contador, ritmo Como Entero;
	ritmo = -1;
	Leer num;
	factorial = 1;
	// VAMOS A DARLE VALOR 1 A FACTORIAL PARA QUE LA PRIMERA MULTIPLICACION SEA IGUAL A NUM (5 * 1 = 5), Y  VAYA MULTIPLICANDO DESPUES POR 4, 3, 2, 1...
	Para contador = num hasta 1 Con Paso ritmo Hacer
		factorial = contador * factorial;
	FinPara
	Escribir "El factorial de ", num, " es igual a ", factorial;
FinProceso
