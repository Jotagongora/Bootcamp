Algoritmo  ejercicio_43
	Definir A, B, option Como Entero;;
	
	Repetir
		
		Escribir "Seleccione el n�mero de una de las siguientes opciones:";
		Escribir "1: Sumar";
		Escribir "2: Restar";
		Escribir "3: Multiplicar";
		Escribir "4: Dividir";
		Escribir "5: Salir del programa";
		
		Leer option;
		Si option > 0 Y option < 5 Entonces
			Escribir "Introduce dos n�meros.";
			Leer A, B;
			
		FinSi
		Segun option Hacer
			1:
				Escribir "La suma de ",A, " y ", B, " es ", A+B;
			2:
				Escribir "La resta de ", A, " menos ", B, " es ", A-B;
			3:
				Escribir "El producto de ", A, " por ", B, " es ", A*B;
			4:
				Escribir "La divisi�n de ", A, " entre ", B, " es ", A/B;
			5:
				Escribir "Gracias por usar esta calculadora, Hasta la pr�xima.";
			De Otro Modo:
				Escribir "Ha seleccionado una opci�n incorrecta.";
		Fin Segun
		
		
	Mientras Que option <> 5;
	
FinAlgoritmo

