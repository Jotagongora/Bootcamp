Algoritmo sin_titulo
	Definir categoria, sueldo Como Entero;
	escribir "Introduzca su sueldo.";
	Leer sueldo;
	Escribir "introduzca su categor�a.";
	leer categoria;
	Mientras categoria >= 5 O categoria <= 0 Hacer
		Escribir "Categor�a no v�lida, Vuelva a escribir Categor�a";
		Leer categoria;
	Fin Mientras
	
	Segun categoria Hacer
		1:
			escribir "Categor�a 1,  su sueldo incrementa a  ", sueldo*1.15;
		2:
			escribir "Categor�a 2,  su sueldo incrementa a  ", sueldo*1.10;
		3:
			escribir "Categor�a 3,  su sueldo incrementa a  ", sueldo*1.06;
		4:
			escribir "Categor�a 4,  su sueldo incrementa a  ", sueldo*1.03;
			
	Fin Segun

FinAlgoritmo
