Proceso sin_titulo
	definir my_array, indice, tamano, num_aleatorio,suma Como Entero;
	leer tamano;
	Dimension my_array[tamano];
	indice = 0;
	suma = 0;
	Para indice = 0 hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = Aleatorio(0,9);
		suma = suma + my_array[indice];
	FinPara
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir "my_array[",indice,"]", " = ", my_array[indice] ;
	FinPara
	
	Escribir "La suma total de los valores es de ", suma;
	
FinProceso
