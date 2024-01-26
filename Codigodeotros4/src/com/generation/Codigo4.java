/*

	Código Modificado:
	
	Eunice Ceja Santos y Marco Antonio García Franco. 
	
	Evaluación: Competente 4/5
	
*/

package com.generation;

import java.util.Scanner; // Se importó la librería de Scanner, ya que en le código se estaba utilizando.

public class Codigo4 {
	
    public static void main(String[] args) {
    	
    	Scanner scanner = new Scanner(System.in); // Se agregó System.in para introducir los valores por el usuario y se modifico el scanner 's' por 'scanner'
    	
    	System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    	
    	String j1 = scanner.nextLine(); //Se modificó el nombre del 's' por 'scanner'
        
        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); // Se eliminó un Scanner extra que estaba debajo de esta línea
        
        String j2 = scanner.nextLine();

        if (j1 == j2) { // Se eliminó un paréntesis extra
        	
        	System.out.println("Empate");
          
        }else{
        	
        	int g = 2;
            
        	switch(j1){
        	
        	case "piedra":
        		
        		if (j2 == "tijeras") {
        			
        			g = 1;
        			
        		}
        		
        		break; // Se agregó break
        		
        	case "papel":
        		
        		if (j2 == "piedra") {
                
        			g = 1;  
        		
        		}
        		
        		break; // Se agregó una llave faltante y un break
              
            case "tijeras": // Se le agrego una 's' a la palabra 'tijera'
            	
            	if (j2 == "papel") { //Se eleiminó parentesis  extra y se reemplazó '.equal' por '=='
                
            		g = 1;
              
            	}
              
            	break;
            
            default:
            	
        	}
        	
          System.out.println("Gana el jugador " + g);

        }
        
        scanner.close(); // Se cerró el scanner
        
    }
    
}


/*

	Código Original:
	
	
	package com.generation;

public class Codigo4 {

    Scanner s = new Scanner();
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    Scanner s2 = new Scanner();
    String j2 = s.nextLine();
    
    if (j1 == j2)) {
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2 == "tijeras") {
            g = 1;
          }

        case "papel":
          if (j2 == "piedra") {
            g = 1;
          
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:
      }
      System.out.println("Gana el jugador " + g);
    }
  
  
}


*/