Proceso sin_titulo
	definir base, altura, superficie, perimetro Como Real;
	Escribir "Introduzca base.";
	leer base;
	Escribir "Introduzca altura.";
	leer altura;
	
	mientras base < 0 O altura < 0 Hacer
		escribir "Datos incorrectos, introduzca de nuevo los datos.";
		
		si base < 0 Entonces
			Escribir "Introduzca base.";
			leer base;
		FinSi
		
		Si altura < 0 Entonces
			Escribir "Introduzca altura.";
			leer altura;
		FinSi
	FinMientras
	
	superficie = base*altura;
	perimetro = 2*(base + altura);
	
	Escribir " La superficie es ", superficie, ", y el perimetro ", perimetro;
	
FinProceso
