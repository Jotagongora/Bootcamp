Proceso sin_titulo
	Definir array, i, j, tamano, aux Como Entero;
	tamano = 5;
	dimension array[tamano];
	
	Para i = 0 Hasta tamano -1 hacer
		array[i] = Aleatorio(1,100);
	FinPara
	
	
	Para i = 0 Hasta tamano - 1 Hacer
		Escribir array[i], " ", Sin Saltar;
	FinPara
	Escribir "";
	
	
	Para i = 0 Hasta tamano - 2 Hacer
		Para j = 1 Hasta tamano - 1 - i Hacer
			Si array[j] > array[j - 1] Entonces
				aux = array[j];
				array[j] = array[j - 1];
				array[j - 1] = aux;
			FinSi
		FinPara
	FinPara
	
	
	Para i = 0 Hasta tamano - 1 Hacer
		Escribir array[i], " ", Sin Saltar;
	FinPara
	Escribir "";
FinProceso
