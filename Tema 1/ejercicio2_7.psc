Proceso sin_titulo
	Definir categoria, c1, c2, c3, c4, sueldo Como Entero;
	Escribir "Introduzca categor�a.";
	Leer categoria;
	Escribir "introduzca su sueldo.";
	Leer sueldo;
	c1 = 1.15;
	c2 = 1.10;
	c3 = 1.06;
	c4 = 1.03;
	si categoria == 1 Entonces
		escribir "Categor�a 1,  su sueldo incrementa a  ", sueldo*c1;
	SiNo
		si categoria == 2 Entonces
			escribir "Categor�a 2,  su sueldo incrementa a  ", sueldo*c2;
		SiNo
			si categoria == 3 Entonces
				escribir "Categor�a 3,  su sueldo incrementa a  ", sueldo*c3;
			SiNo
				escribir "Categor�a 4,  su sueldo incrementa a  ", sueldo*c4;
			FinSi
		FinSi
	FinSi
	
	
FinProceso
