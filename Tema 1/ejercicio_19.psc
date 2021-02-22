Proceso sin_titulo
	definir num, num2, media, div_media Como Real;
	leer num;
	num2 = num;
	div_media = 1;
	Mientras num <> -1 hacer
		leer num;
		si num <> -1 Entonces
		num2 = num + num2;
		div_media = div_media + 1;
		FinSi
	
	FinMientras
	media = num2 / div_media;
	Escribir "La media es ", media;
FinProceso
