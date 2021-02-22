Proceso sin_titulo
	Definir columnas, filas, lados Como Entero;
	Escribir "Introduce el tamaño cuadrado.";
	Leer Lados;
	Para filas = 1 hasta lados Con Paso 1 Hacer
		Para columnas =1 Hasta lados Con Paso 1 Hacer
			si columnas == 1 O columnas == lados O filas == 1 O filas == lados  Entonces
				Escribir "x " Sin Saltar;
			SiNo
				Escribir "  " Sin Saltar;
			FinSi
		FinPara
		Escribir "  ";
	FinPara
FinProceso
