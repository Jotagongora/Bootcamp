Proceso sin_titulo
	definir precio_gasolina, galon, litros_cliente, galon_cliente, importe Como Real;
	precio_gasolina = 1.333;
	galon = 3.78541;
	Escribir "¿Cuantos galones ha respotado el cliente?.";
	leer galon_cliente;
	litros_cliente = galon_cliente / galon;
	importe = litros_cliente * precio_gasolina;
	Escribir "El cliente tiene que pagar ", importe, " euros.";
	
FinProceso
