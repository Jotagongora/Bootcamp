Proceso sin_titulo
	definir precio1, precio2, precio3, precio4, importe1, importe2, importe3, importe4, importe_total Como Real;
	definir alimento1, alimento2, alimento3, alimento4 Como Entero;
	precio1 = 1.5;
	precio2 = 1.05;
	precio3 = 0.75;
	precio4 = 2;
	Escribir "¿Cuanto se ha consumido de cada producto?.";
	Escribir "Bocadillo de jamón.";
	Leer alimento1;
	Escribir "Refresco.";
	Leer alimento2;
	Escribir "Cerveza.";
	Leer alimento3;
	Escribir "Pan.";
	Leer alimento4;
	importe1 = alimento1 * precio1;
	importe2 = alimento2 * precio2;
	importe3 = alimento3 * precio3;
	importe4 = alimento4 * precio4;
	importe_total = importe1 + importe2 + importe3 + importe4;

	
	Escribir "El importe a pagar es ", importe_total, " euros.";
FinProceso
