Algoritmo sin_titulo
	Definir pagina, columnas, filas, tamano, matriz, num_aleatorio, tamano_filas, tamano_columnas, tamano_pagina, contador Como Entero;
	tamano_pagina = 3;
	tamano_filas = 4;
	tamano_columnas = 5;
	Dimension matriz[tamano_pagina, tamano_filas, tamano_columnas];
	
	Para pagina = 0 Hasta tamano_pagina - 1 Hacer
		
		Para filas = 0 Hasta tamano_filas - 1 Hacer
			
			Para columnas = 0 Hasta  tamano_columnas - 1 Hacer
				
				Escribir matriz[pagina, filas, columnas], "  ", Sin Saltar;
		
			FinPara
			Escribir "";
		FinPara
		Escribir "";
	FinPara
	
FinAlgoritmo
