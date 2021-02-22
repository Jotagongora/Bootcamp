Proceso Arrays
	Definir my_array, tamano, indice Como Entero;
	tamano = 5;
	Dimension my_array[tamano];
	
	my_array[0] = 50;
	my_array[1] = 35;
	my_array[2] = 19;
	my_array[3] = 78;
	my_array[4] = 9;
	
	Escribir my_array[0], " ",my_array[1], " ",my_array[2], " ",my_array[3], " ",my_array[4];
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir my_array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	// EL INDICE ES EL CONTADOR, OJO!! ARRAYS SIEMPRE EMPIEZAN EN CERO!!! SIEMPRE INDICE DEBE EMPEZAR EN 0!!
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = 5;
		Escribir my_array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = indice;
		Escribir my_array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = my_array[indice] + 1;
		Escribir my_array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
FinProceso
