Algoritmo sin_titulo
	Definir precio Como real;
	definir importe Como real;
	precio = 24.99;
	Escribir " El precio del producto es ", precio, " ¿Cuanto va a abonar?.";
	Leer importe;
	si importe > precio Entonces
		escribir " Su cambio es ", importe - precio;
	SiNo
		si precio == importe Entonces
			escribir "Importe exacto.";
		sino 
			escribir "Aún le falta por pagar ", precio - importe;
		
		FinSi
	FinSi
FinAlgoritmo

