Proceso sin_titulo
	definir dia, año, mes_inicial Como real;
	definir mes Como Caracter;
	mes = "A";
	Escribir "Introduzca día, mes y año. En ese orden.";
	Leer dia, mes_inicial, año;
	Mientras dia <= 0 o dia > 31 O mes_inicial <= 0 O mes_inicial > 12 O año <= 0 Hacer
		
		si dia <= 0 o dia > 31 Entonces
			escribir " Error. Día es incorrecto, vuelva a introducir los datos.";
			leer dia;
		FinSi
		
		si mes_inicial <= 0 O mes_inicial > 12 Entonces
			escribir " Error. Mes es incorrecto, vuelva a introducir los datos.";
			Leer mes_inicial;
		FinSi
		
		si año <= 0 entonces
			Escribir " Error. Año es incorrecto, vuelva a introducir los datos.";
			Leer año;
		FinSi
		
	FinMientras
	si mes_inicial == 2 Y dia > 28 Entonces
		si año mod 4 <> 0 Y dia > 28 Entonces
			Repetir
				Escribir " Error. Febrero no tiene tantos días, vuelva a introducir día";
				leer dia;
			Mientras Que dia > 28 O dia <= 0
		SiNo
			si año mod 4 == 0 Y dia > 29 Entonces
				Repetir
					Escribir " Error. Febrero no tiene tantos días, vuelva a introducir día.";
					leer dia;
				Mientras Que dia > 30 O dia <= 0
			FinSi
			
		FinSi
	FinSi
	si (mes_inicial == 4 O mes_inicial == 6 O mes_inicial == 9 O mes_inicial == 11) Y dia > 30 Entonces
		Repetir
			Escribir " Error. Ese mes tiene 30 días, vuelva a introducir dia.";
			leer dia;
		Mientras Que dia > 30 O dia <= 0
	FinSi
	Segun mes_inicial Hacer
		1:
			mes = "Enero";
		2:
			mes = "Febrero";
		3:
			mes = "Marzo";
		4:
			mes = "Abril";
		5:
			mes = "Mayo";
		6:
			mes = "Junio";
		7:
			mes = "Julio";
		8:
			mes = "Agosto";
		9:
			mes = "Septiembre";
		10:
			mes = "Octubre";
		11:
			mes = "Noviembre";
		De Otro Modo:
			mes = "Diciembre";
	Fin Segun
	Escribir " ", dia, " de ", mes, " de ", año, ".";
FinProceso
