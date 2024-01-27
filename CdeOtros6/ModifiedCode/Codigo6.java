/*
	
	Pedro Antonio Roldán Linares y Marco Antonio Garcia Franco 
	
	Evaluación: Competente 4/5
	
*/

package com.generation;

import java.util.Scanner;

public class Codigo6 { // Se cambio el nombre de la clase siguiendo la estructura CamelCase

    public static void main(String[] args) {
    	
        // Se pasaron las declaraciones de las variables al inicio del programa
    	
        int[] numeros = new int[20]; // Se modificó la sintaxos del arrehlo
        
        int opcion = 0;
        
        int multiplo = 0;
        
        Scanner scan = new Scanner(System.in);

        System.out.println("¿Qué números quiere resaltar? "); // Se agregó una 'n' faltante y se quito '\n'
        
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
        
        opcion = Integer.parseInt(scan.nextLine()); // Se agregó un paréntesis y 'scan'

        multiplo = (opcion == 1) ? 5 : 7; // Se corrigió la sintaxis de está operación

        GenerarNumerosAleatorios(numeros); // Se cambió el nombre de la función según el programa

        compararMultiplos(numeros, multiplo); // Se agregó esta función

        scan.close();
    }

    private static void compararMultiplos(int[] numeros, int multiplo) {
    	
        for (int numero : numeros) {
        	
            if (numero % multiplo == 0) { // Se modificó la sintaxis del ciclo 'if' para el funcionamiento del programa
            	
            	System.out.print(" [ " + numero + " ] ");
            	
            } else {
            	
            	System.out.print(numero + " "); // Se corrigió esta impresion en la sintaxis
            	
            }
            
        }
        
    }
    
    private static void GenerarNumerosAleatorios(int[] numeros) {
    	
        for (int i = 0; i < numeros.length; i++) { // Se corrigio la sintaxis del ciclo 'for' para el funcionamiento adecuado
        	
            numeros[i] = (int) (Math.random() * 381) + 20;
            
            System.out.print(numeros[i] + " "); // Se agrego una impresión
            
        }
        
        System.out.println(); // Se agrego y corrigio 'println'
        
    }
    
}
