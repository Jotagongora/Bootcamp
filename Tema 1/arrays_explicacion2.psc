Proceso sin_titulo
	definir my_array, indice, tamano Como Entero;
	tamano = 10;
	Dimension my_array[tamano];
	indice = 0;
	
    //CON ESTO PODEMOS AUTOMATICAMENTE LEER LOS VALORES QUE LE QUEREMOS DAR A CADA POSCION DE LA ARRAY UN VALOR POR TECLADO
	
	Para indice = 0 hasta tamano - 1 Con Paso 1 Hacer
		Leer my_array[indice];
	FinPara
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir "my_array[",indice,"]", " = ", my_array[indice] ;
	FinPara
FinProceso
