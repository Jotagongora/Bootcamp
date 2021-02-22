Proceso sin_titulo
	Definir array, i, indice, tamano, N Como Entero;
	tamano = 10;
	indice = 0;
	Dimension array[tamano];
	
	Para i = 0 Hasta tamano - 1 Hacer
		array[i] = Aleatorio(1,15);
		Escribir array[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
	Escribir "Introduce número a comparar.";
	Leer N;
	
	Para i = 0 Hasta tamano - 1 Hacer
		Si N == array[i] Entonces
			indice = i;
			i = tamano - 1;
		FinSi
	FinPara
	
	
	Escribir "La coincidencia fue en el indice ", indice;
FinProceso
