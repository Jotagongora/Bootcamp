Proceso sin_titulo
	Definir maximo, minimo, media, num, contador, num2 Como Real;
	num = 1;
	contador = 1;
	Leer num;
	Mientras num == 0 Hacer
		Escribir " No ha introducido ningun número.";
		Leer num;
	FinMientras
	minimo = num;
	maximo = num;
	num2 = num;
	Mientras num <> 0 Hacer
		leer num;
		si num <> 0 Entonces
			si num > maximo Entonces
				maximo = num;
			FinSi
			si num < minimo Entonces
				minimo = num;
			FinSi
		contador = contador + 1;
		num2 = num2 + num;
		FinSi
	FinMientras
	media = num2 / contador;
	Escribir " La media es ", media, " el máximo ", maximo, " y el mínimo ", minimo;
	
FinProceso
