funcion saludar(nombre, apellido, dia)
	
	Escribir "Hola ", nombre, " ", apellido;
	
	Si Minusculas(nombre) == "jhon" Y Minusculas(apellido) == "connor" Entonces
		Escribir "El apocalypsis est� cerca que m�s da todo.";
		SiNo
			Si Minusculas(dia) == "viernes" Entonces
				Escribir "Ya es viernes, �Buen finde!";
			SiNo	
					
			Escribir "�A seguir con la semana!";
		FinSi
	FinSi
	
FinFuncion

Algoritmo  prueba_funcion
	
	Definir nombre, apellido, dia Como Caracter;
	
	Escribir "Introduce nombre.";
	Leer nombre;
	Escribir "Introduce apellido.";
	Leer apellido;
	Escribir "Introduce d�a.";
	Leer dia;
	
	saludar(nombre, apellido, dia);
	
FinAlgoritmo

