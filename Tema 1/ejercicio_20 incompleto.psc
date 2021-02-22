Proceso sin_titulo
	definir suma, N, media, contador Como Entero;
	suma = 0;
	contador = 0;
	N = 0;
	Mientras N <> -1 hacer
		si N <> -1 Entonces
		escribir " Introduzca un número: ";
		leer N;
			suma = suma + N;
			contador = contador + 1;
	    Finsi
	finmientras
	media = suma/contador;
	escribir "Media es: ", media;
FinProceso
