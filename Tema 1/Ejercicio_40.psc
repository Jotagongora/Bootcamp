Algoritmo sin_titulo
	definir my_array, rango, aleat, indice_cero, indice_uno, indice_dos, indice_tres Como Entero;
	Definir check Como Logico;
	check = Verdadero;
	rango = 20;
	Dimension my_array[rango];
	
	indice_cero = 0;
	indice_uno = 0;
	indice_dos = 0;
	indice_tres = 0;
	
	//PRIMERO INICIAMOS TODOS LOS ELEMENTOS DE NUESTRA ARRAY
	Para indice_cero = 0 Hasta rango - 1 Hacer
		my_array[indice_cero] = 0;
	FinPara
	// CON EL PRIMER "PARA" VAMOS A IR GENERANDO UN NÚMERO ALEATORIO
	Para indice_uno = 0 Hasta rango - 1 Hacer
		aleat = Aleatorio(1,20);
		//EL SEGUNDO "PARA" NOS SIRVE PARA COMPROBAR SI EL NÚMERO GENERADO ES IGUAL O DISTINTO DE LOS ANTERIORES QUE HAYAMOS GENERADO
		Para indice_dos = 0 Hasta rango -1 Hacer
			// USAMOS UNA VARIABLE LÓGICA (CHECK) PARA DIFERENCIAR CUANDO EL NÚMERO ALEATORIO SE REPITE O NO Y CON UN "SI ENTONCES" PODEMOS ESCOGER
			// QUE CAMINO QUEREMOS QUE TOME EL FLUJO PARA CADA CASO
			// SI TAN SOLO 1 DE LOS NUMEROS GENERADOS SE REPITE, ENTONCES CHECK SERA FALSO.
			si my_array[indice_dos] == aleat Entonces
				check = Falso;
			FinSi
		FinPara
		//CUANDO SABEMOS QUE EL NUEVO NUMERO GENERADO NO COINCIDE CON NINGUNO DE LOS ANTERIORES, SE LO ASIGNAMOS COMO VALOR AL SIGUIENTE ELEMENTO DE 
		//NUESTRA ARRAY.
		si check == Verdadero Entonces
			my_array[indice_uno] = aleat;
		SiNo 
			// EN CASO DE QUE SE HAYA REPETIDO ALGUNA VEZ, VAMOS A DECIRLE QUE LA CONIDCION CHECK VUELVE A SER VERDADERA (SINO SERA FALSA PARA SIEMPRE)
			//Y LE RESTAMOS UNA POSICION AL BUCLE, ASÍ SI ESTABAMOS EN LA TERCERA VUELTA Y SE HA REPETIDO EL NUMERO, CUANDO VUELVA AL BUCLE EMPEZARÁ
			//DE NUEVO A LA TERCERA VUELTA Y NO PASARÁ A LA CUARTA, Y LA REPETIRÁ TANTAS VECES COMO NECESITE HASTA QUE EL NUMERO NO SE REPITA.
			indice_uno = indice_uno - 1;
			check = Verdadero;
		FinSi
	FinPara
	
	Para indice_tres = 0 Hasta rango - 1 Hacer
		Escribir "my_array[", indice_tres, "] = ",my_array[indice_tres];
	FinPara
FinAlgoritmo
