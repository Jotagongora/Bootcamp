Algoritmo sin_titulo
	Definir categoria, sueldo Como Entero;
	escribir "Introduzca su sueldo.";
	Leer sueldo;
	Escribir "introduzca su categoría.";
	leer categoria;
	Mientras categoria >= 5 O categoria <= 0 Hacer
		Escribir "Categoría no válida, Vuelva a escribir Categoría";
		Leer categoria;
	Fin Mientras
	
	Segun categoria Hacer
		1:
			escribir "Categoría 1,  su sueldo incrementa a  ", sueldo*1.15;
		2:
			escribir "Categoría 2,  su sueldo incrementa a  ", sueldo*1.10;
		3:
			escribir "Categoría 3,  su sueldo incrementa a  ", sueldo*1.06;
		4:
			escribir "Categoría 4,  su sueldo incrementa a  ", sueldo*1.03;
			
	Fin Segun

FinAlgoritmo
