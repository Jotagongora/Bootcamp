Proceso sin_titulo
	definir sec, min, hora Como Entero;
	Definir zero Como Caracter;
	para hora = 0 hasta 23 Con Paso 1 Hacer
		para min = 0 hasta 59 Con Paso 1 Hacer
	
			para sec = 0 hasta 59 con paso 1 Hacer
				si sec <= 9 Entonces 
					escribir hora,":",min,":","0",sec Sin Saltar;
					esperar 1 segundo;
					Limpiar Pantalla;
				SiNo
					escribir hora,":",min,":",sec Sin Saltar;
					esperar 1 Segundos;
					Limpiar Pantalla;


			FinSi
			
				
			FinPara
		FinPara
	FinPara
FinProceso
