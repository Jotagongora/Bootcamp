Funcion print_array(array, tamano)
	Definir i Como Entero;
	
	Para i = 0 Hasta tamano - 1 Hacer
		Escribir  array[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
FinFuncion

Algoritmo  ejemplo_funciones3
	Definir array, tamano, i Como Entero;
	tamano = 10;
	Dimension array[tamano];
	
	Para i = 0 Hasta tamano - 1 Hacer
		array[i] = Aleatorio(1,1000);
	FinPara
	
	print_array(array, tamano);
	
	
FinAlgoritmo

