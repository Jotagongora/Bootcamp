Proceso sin_titulo
	Definir tiempo, contador, ritmo, final, espera  Como Entero;
	Definir mensaje_final Como Caracter;;
	mensaje_final = "¡¡¡RING!!!";
	ritmo = -1;
	final = 1;
	espera = 1;
	// EL VALOR ESPERA ES EL TIEMPO QUE TARDA EN APARECER EL ESCRIBIR EN PANTALLA
	leer tiempo;
	Limpiar Pantalla;
	
	// SIRVE PARA CALCULAR UNA CUENTA ATRÁS ( O HACIA DELANTE DEPENDE DE LOS VALORES)
	Para contador = tiempo hasta final Con Paso ritmo Hacer
		Escribir contador ;
		esperar espera Segundos;
		limpiar pantalla;
	FinPara
	Escribir mensaje_final;
FinProceso
