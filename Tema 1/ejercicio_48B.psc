Algoritmo ejercicio_48
	Definir nombre, nombre_introducido, aux Como Caracter;
	definir i, j, contador, tamano Como Entero;
	contador = 0;
	tamano = 50;
	Dimension nombre[tamano];
	Escribir "Introduzca los nombres a ordenar a continuación.";
	escribir "Para salir déjelo en blanco";
	
	Leer nombre_introducido;
	
	Mientras nombre_introducido <> "" Hacer
		nombre[contador] = nombre_introducido;
		contador = contador + 1;
		leer nombre_introducido;
	FinMientras

	Limpiar Pantalla;
	
	Si contador <= 1 Entonces
		Escribir "No hay suficientes nombres a comparar.";
	SiNo
		Para i = 0 Hasta contador - 2 Hacer
			Para j = 0 Hasta contador - 2 - i Hacer
				Si nombre[j] > nombre[j + 1] Entonces
					aux = nombre[j];
					nombre[j] = nombre[j + 1];
					nombre[j + 1] = aux;
				FinSi
			FinPara
		FinPara
	FinSi
	
	Si contador <= 1 Entonces
		Escribir "Vuelva a probar introduciendo más nombres.";
	SiNo
		Para i = 0 Hasta contador - 1 Hacer
			Escribir nombre[i];
		FinPara
	FinSi
	
	
	
FinAlgoritmo
