Proceso sin_titulo
	//31.Ejercicio
	//Algoritmo que lea un n�mero entero (altura) y a partir de �l cree una escalera invertida de
	//asteriscos con esa altura. Deber� quedar as�, si ponemos una altura de 5.
	
	definir altura, filas, columnas, contador Como Real;
	leer altura;
	contador = 1;
	Para filas = altura hasta 1 Con Paso -1 Hacer
		para columnas = altura hasta 1 Con Paso -1 Hacer
			si columnas > filas Entonces

				Escribir "  " Sin Saltar;
			sino 
				Escribir "* " Sin Saltar;
				FinSi
		FinPara
		Escribir "";
	FinPara
FinProceso
