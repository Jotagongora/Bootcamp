Proceso sin_titulo
	definir cantidad_N, calculo, cantidad_calculo, suma Como Entero;
	escribir "Introduzca el número.";
	leer cantidad_N;
	cantidad_calculo = 1 * cantidad_N;
	si cantidad_N mod 2 == 1 entonces
		cantidad_N = cantidad_N + 1;
	FinSi
	calculo = 0;
	suma = 0;
	mientras calculo < cantidad_calculo hacer
		escribir cantidad_N;
		suma = suma + cantidad_N;
		cantidad_N = cantidad_N + 2;
		calculo = calculo + 1;
	FinMientras
	Escribir " La suma es : ", suma;
FinProceso
