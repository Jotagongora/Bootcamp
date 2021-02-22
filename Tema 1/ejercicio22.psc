Proceso sin_titulo
	Definir multiplos, multiplo_1, multiplo_2, limite Como Entero;
	multiplo_1 = 2;
	multiplo_2 = 3;
	limite = 100;
	
	Repetir
	Escribir " Introduzca ", multiplo_1, " o ", multiplo_2, " dependiendo de los multiplos que se quiera ver por pantalla.";
	Leer multiplos;
	Hasta Que  multiplos == multiplo_1 O multiplos == multiplo_2;

	Segun multiplos hacer
		multiplo_1:
			Para multiplos <- multiplo_1 Hasta limite Con Paso multiplo_1 Hacer
				Escribir multiplos;
			Fin Para
		multiplo_2:
			Para multiplos <- multiplo_2 Hasta limite Con Paso multiplo_2 Hacer
				Escribir multiplos;
			Fin Para
		De Otro Modo:
			Escribir " Error, solo multiplos de ", multiplo_1, " o de ", multiplo_2;
	FinSegun
	
FinProceso
