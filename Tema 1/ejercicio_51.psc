Algoritmo sin_titulo
	Definir N, i Como Entero;
	Definir no_primo Como Logico;
	Leer N;
	no_primo = Falso;
	Si N == 0 O N == 1 O N < 0 Entonces
		Escribir "Prueba con un número mayor.";
	SiNo
		Para i = 2 Hasta N - 1 Con Paso 1 Hacer
			Si N Es Divisible Por i Entonces
				no_primo = Verdadero;
			FinSi
		FinPara
	
		Si no_primo Entonces
			Escribir "No es primo.";
		SiNo
			Escribir "Es primo.";
		FinSi
	FinSi
	
	
FinAlgoritmo
