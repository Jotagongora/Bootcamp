Proceso sin_titulo
	definir my_array, indice, tamano, contador, contador2, suma, suma_total Como Entero;
	Escribir "Introduce tamaño de la lista.";
	leer tamano;
	contador = 0;
	Dimension my_array[tamano];
	suma = 0;
	suma_total = 0;
	
	Para indice = 0 hasta tamano -1 Hacer
		my_array[indice] = Aleatorio(-50,50);
		si my_array[indice] > 0 entonces
			contador = contador + 1;
			suma = suma + my_array[indice];
		FinSi
		suma_total = suma_total + my_array[indice];
		Escribir "my_array[", indice, "] = ",my_array[indice];
	FinPara
	
	Escribir "El número de elementos mayores que 0 son ", contador;
	Escribir "";
	Escribir "El promedio de los positivos es ", suma / contador, " .";
	Escribir "";
	Escribir  "El promedio de todos los números es ", suma_total/ tamano;
	
FinProceso
