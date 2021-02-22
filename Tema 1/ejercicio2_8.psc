Algoritmo  sin_titulo
	definir importe, d1, d2, d3, d4 Como Real;
	Escribir "¿Cuanto ha pagado el cliente?.";
	Leer importe;
	d1 = 0.95;
	d2 = 0.90;
	d3 = 0.80;
	d4 = 0.75;
	
si importe <= 0 Entonces
escribir " Importe no valido.";	
SiNo
	si importe < 500 Entonces
		escribir importe, " euros. No se aplican descuentos.";
	SiNo
		si importe <= 1000 Entonces
			escribir importe*d1, " euros. Se le ha aplicado un 5%.";
		SiNo
			si importe <= 7000 Entonces
				escribir importe*d2, " euros.Se le ha aplicado un 10% de descuento.";
			sino 
				si importe <= 15000 Entonces
					escribir importe*d3, " euros. Se le ha aplicado un 20% de descuento.";
				Sino
						escribir importe*d4, " euros. Se le ha aplicado un 25% de descuento.";
				FinSi
			FinSi
		FinSi
	FinSi
FinSi

	
FinAlgoritmo
