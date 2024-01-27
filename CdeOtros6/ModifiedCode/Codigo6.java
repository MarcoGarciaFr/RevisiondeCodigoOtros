/*
	
	Pedro Antonio Roldán Linares y Marco Antonio Garcia Franco 
	
	Evaluación: Competente 4/5
	
*/

package com.generation;

import java.util.Scanner; // Se importó la librería de Scanner, ya que en le código se estaba utilizando.

public class Codigo6 { // Se cambio el nombre de la clase siguiendo la estructura CamelCase

    public static void main(String[] args) {
    	
        int[] n = new int[20];

        for (int i = 0; i < 20; i++) {
        	
            n[i] = (int) (Math.random() * 381) + 20;
            
            System.out.print(n[i] + " ");
            
        }

        System.out.println("\n¿Qué números quiere resaltar?");
        
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");

        Scanner scanner = new Scanner(System.in);  // Se agregó un Scanner y se quito ' int opcion = Integer.parseInt(System.console().readLine(); ' ya que Scanner nos fa un mejor rendimiento en el programa.
        
        int opcion = scanner.nextInt();  // Se agrega esta linea para la entrada de datos del usuario

        int multiplo = (opcion == 1) ? 5 : 7; // Se intercambio de lugares las variables '?' y ':'

        for (int e : n) { // En lugar de char, recibimos un dato entero 'int' y cambiamos el bucle 'foreach' por un bucle 'for'
        	
            if (e % multiplo == 0) {
            	
                System.out.print(" [ " + e + " ] ");
                
            } else {
            	
                System.out.print(e + " ");
                
            }
            
        }

        scanner.close();  // Se cerró el scanner
        
    }
    
}