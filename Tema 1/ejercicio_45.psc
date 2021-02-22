Proceso sin_titulo
	//45. Teniendo un vector con los números naturales que queramos, meter en otro de la misma longitud, auqellos que sean pares y mayores que 25.
	// Después, mostras el vector de origen completo y el de destino solo los números introducidos.
	
	//46. Dados A, B, C que representan a numeros enteros diferentes contruir un diagrama de flujo para escribir estos numeros de forma descendente.
	
	
	Definir array_uno, array_dos, i, j, tamano, aux, contador Como Entero;
	tamano = 10;
	contador = 0;
	Dimension array_uno[tamano], array_dos[tamano];
	
	Para i = 0 Hasta tamano - 1 Hacer
		array_uno[i] = Aleatorio(1,50);
	FinPara
	
	Para j = 0 Hasta tamano - 1 Hacer
		Si array_uno[j] mod 2 == 0 Y array_uno[j] > 25 Entonces
			array_dos[contador] = array_uno[j];
			contador = contador + 1;
		SiNo
			array_dos[j] = 0;
		FinSi
	FinPara
	
	Para i = 0 Hasta tamano - 1 Hacer
		Escribir array_uno[i], " ", sin Saltar;
	FinPara
	Escribir "";
	
	si contador < 1 Entonces
		Escribir "No hay ningún número par mayor de 25 en el primer array.";
	SiNo
		
		Para i = 0 Hasta contador - 1  Hacer
			Escribir array_dos[i], " ", sin Saltar;
		FinPara
	FinSi
	
	Escribir "";
	
FinProceso
