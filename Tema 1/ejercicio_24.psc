Proceso Ejercicio_24
	Definir nota, teoria, practica, problemas Como Real;
	Definir alumno Como Caracter;
	Definir porcentaje1, porcentaje2, porcentaje3 Como Real;
	Definir tope_nota, minimo_nota Como Real;
	
	// Dinamizar variables para poder cambiar el código más fácil en futuro ( ya sea la nota mínima o máxima, o el porcentaje que vale una nota respecto a la nota final )//
	porcentaje1 = 0.1;
	porcentaje2 = 0.4;
	porcentaje3 = 0.5;
	tope_nota = 10;
	minimo_nota = 0;
	alumno = "A";
	
	Mientras alumno <> "" Hacer
		Escribir "Introducir nombre de alumno.";
		Leer alumno;
		Si alumno <> "" Entonces
			Escribir " Introduce en orden nota Práctica, Teórica, y Problemas.";
			Leer practica, teoria, problemas;
			si practica < minimo_nota O practica > tope_nota O teoria < minimo_nota O teoria > tope_nota O problemas < minimo_nota O problemas > tope_nota Entonces
				Escribir "Error, siga con el siguiente alumno.";
			SiNo
				nota = practica * porcentaje1 + teoria * porcentaje2 + problemas * porcentaje3;
				Escribir " La nota de ", alumno, " es ", nota, ".";
			FinSi			
		FinSi
	FinMientras	
FinProceso
