/*
	
	Pedro Antonio Roldán Linares y Marco Antonio Garcia Franco 
	
	Evaluación: Competente 4/5
	
*/

package com.generation;

import java.util.Scanner; // Se importó la librería de Scanner, ya que en le código se estaba utilizando.

public class Codigo5 {
	
	public static void main(String[] args) {
		
	Scanner scanner = new Scanner(System.in); // Se agregó System.in para introducir los valores por el usuario y se modifico el scanner 's' por 'scanner'
	    
	System.out.print("Introduzca un número: "); // Se cambió la comilla simple ' por " al final del texto
	    
	int ni = scanner.nextInt();
	    
	int c = ni;
	    
	int afo = 0; 
	    
	int noAfo = 0;
	        
	while (c > 0) { // Se modificó la variable 'ni' por 'c', ya que 'c' es el valor original
		
		int digito = c % 10; // Se modificó está línea de código ya que no hacia la operación esperada, se cambio 'int digito = (int)(ni % 10);' por 'int digito = c % 10;'
	    
		if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
			
			afo++;
			
			c /= 10; // Se cambia 'ni' por 'c'
			
		}else {
			
			noAfo++;
			
			c /= 10; // Tambien se modifica 'ni' por 'c'
			
		}
		
	}
	
	if (afo > noAfo) { // Se saca 'if' del while para no hacer que sea infinito el ciclo
		
		System.out.println("El " + ni + " es un número afortunado."); // Se agregó una 't' en el println que faltaba para completar la palabra reservada y se cambio la letra 'c' por 'ni' para no generar un texto duplicado.
		
	}else {
		
		System.out.println("El " + ni + " no es un número afortunado."); // Se cambia el valor 'c' por 'ni'
		
	}
	
	scanner.close(); // Se cerró el scanner
	
	}

}
