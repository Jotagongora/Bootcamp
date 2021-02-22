Proceso sin_titulo
	definir T, N Como Real;;
	Escribir "Introduzca número de sonidos.";
	Leer N;
	T = N/4  + 40 ;
	Mientras N <= 0 Hacer
		escribir "Error.";
		leer N;
		finmientras
	Escribir "La temperatura es de ", T, " grados centigrados.";
FinProceso
