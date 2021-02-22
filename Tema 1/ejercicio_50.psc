Algoritmo sin_titulo
	Definir i, tamano, contador Como Entero;
	Definir frase, letra, letras Como Caracter;
	
	Escribir "Escriba la letra que quiere contar.";
	contador = 0;
	Leer letra;
	Escribir "Introduzca la frase.";
	leer frase;
	tamano = Longitud(frase);
	Dimension letras[tamano];
	
	
	Para i = 0 Hasta tamano - 1 Hacer
		letras[i] = Subcadena(frase, i, i);
	FinPara

	Para i = 0 Hasta tamano - 1 Hacer
		Si Mayusculas(letras[i]) == Mayusculas(letra) Entonces
			contador = contador + 1;
		FinSi
	FinPara

	
	Escribir "La letra (", letra, ") se repite ", contador, " veces.";
	
FinAlgoritmo
