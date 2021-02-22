Proceso sin_titulo
	Definir dulces, bebidas, conservas, i, j, tamano, max, max_mes, suma, min, min_mes, max_dos, max_mes_dos, coste_minimo_dic Como Entero;
	Definir mes, mes_dos, mes_tres, mes_coste_minimo Como Caracter;
	Definir  promedio Como Real;
	tamano = 12;
	max = 0;
	Dimension dulces[tamano], bebidas[tamano], conservas[tamano];
	
	Para i = 0 Hasta tamano - 1 Hacer
		dulces[i] = Aleatorio(100,1000);
		bebidas[i] = Aleatorio(100,1000);
		conservas[i] = Aleatorio(100,1000);
	FinPara
	
	//A)
	Para i = 0 Hasta tamano - 1 Hacer
		Si dulces[i] >= max Entonces
			max = dulces[i];
			max_mes = i;
		FinSi
	FinPara
	
	Segun max_mes Hacer
		0:
			mes = "Enero";
		1:
			mes = "Febrero";
		2:
			mes = "Marzo";
		3:
			mes = "Abril";
		4:
			mes = "Mayo";
		5:
			mes = "Junio";
		6:
			mes = "Julio";
		7:
			mes = "Agosto";
		8:
			mes = "Septiembre";
		9:
			mes = "Octubre";
		10:
			mes = "Noviembre";
		11:
			mes = "Diciembre";
		De Otro Modo:
			Escribir "Error";
	Fin Segun
	
	Escribir "A)";
	Escribir "El mayor coste de producción de dulces fue ", mes, " con un coste de ", max, " euros.";
	
	
	//B)
	Escribir "B)";
	
	suma = 0;
	
	Para i = 0 Hasta tamano - 1 Hacer
		suma = suma + bebidas[i];
	FinPara
	
	promedio = suma / tamano;
	
	Escribir "El promedio anual de los costes de bebidas es ", promedio, " euros.";
	
	
	//C)
	Escribir "C)";
	
	min = 1000;
	min_mes = 11;
	max_dos = 0;
	max_mes_dos = 0;
	
	Para i = 0 Hasta tamano - 1 Hacer
		Si bebidas[i] >= max_dos Entonces
			max_dos = bebidas[i];
			max_mes_dos = i;
		FinSi
		
		Si bebidas[i] <= min Entonces
			min = bebidas[i];
			min_mes = i;
		FinSi
	FinPara
	
	Segun min_mes Hacer
		0:
			mes_dos = "Enero";
		1:
			mes_dos = "Febrero";
		2:
			mes_dos = "Marzo";
		3:
			mes_dos = "Abril";
		4:
			mes_dos = "Mayo";
		5:
			mes_dos = "Junio";
		6:
			mes_dos = "Julio";
		7:
			mes_dos = "Agosto";
		8:
			mes_dos = "Septiembre";
		9:
			mes_dos = "Octubre";
		10:
			mes_dos = "Noviembre";
		11:
			mes_dos = "Diciembre";
		De Otro Modo:
			Escribir "Error";
	Fin Segun
	
	Segun max_mes_dos Hacer
		0:
			mes_tres = "Enero";
		1:
			mes_tres = "Febrero";
		2:
			mes_tres = "Marzo";
		3:
			mes_tres = "Abril";
		4:
			mes_tres = "Mayo";
		5:
			mes_tres = "Junio";
		6:
			mes_tres = "Julio";
		7:
			mes_tres = "Agosto";
		8:
			mes_tres = "Septiembre";
		9:
			mes_tres = "Octubre";
		10:
			mes_tres = "Noviembre";
		11:
			mes_tres = "Diciembre";
		De Otro Modo:
			Escribir "Error";
	Fin Segun
	
	Escribir "El mayor coste de producción de bebidas fue ", mes_tres, " con un coste de ", max_dos;
	Escribir "El menor coste de producción de bebidas fue ", mes_dos, " con un coste de ", min;
	
	//D)
	Escribir "D)";
	
	coste_minimo_dic = 0;
	
	Si dulces[11] < bebidas[11] Y dulces[11] < conservas[11]  Entonces
		coste_minimo_dic = dulces[11];
		mes_coste_minimo = "Dulces";
	SiNo
		Si bebidas[11] < dulces[11] Y bebidas[11] < conservas[11] Entonces
			coste_minimo_dic = bebidas[11];
			mes_coste_minimo = "Bebidas";
		SiNo
			Si conservas[11] < dulces[11] Y conservas[11] < bebidas[11] Entonces
				coste_minimo_dic = conservas[11];
				mes_coste_minimo = "Conservas";
			FinSi
		FinSi
	FinSi
	
	Escribir "El que tuvo menor coste el mes de Diciembre fue ", mes_coste_minimo, " con ", coste_minimo_dic, " euros.";
	
	
FinProceso
