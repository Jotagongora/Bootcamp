Algoritmo sin_titulo
	Definir examen1, examen2, examen3, examen4, examen5, notamedia Como Real;
	leer examen1, examen2, examen3, examen4, examen5;
	notamedia = (examen1 + examen2 + examen3 + examen4 + examen5)/5;
	si notamedia >= 5 Entonces
		escribir "La nota media es ", notamedia, ", Aprobado.";
	SiNo
		escribir "La nota media es ", notamedia, ", Suspenso.";
	FinSi
FinAlgoritmo
