import java.util.Scanner;

import javax.swing.JOptionPane;

import java.util.InputMismatchException;

public class anoNascimento {

	
	public static void main(String[] args) {
		
	        Scanner input = new Scanner(System.in);

        String nomeCompleto, ano;
   
        int anoNascimento, idade;

        while (true) {
            try {
            	nomeCompleto = JOptionPane.showInputDialog("Digite seu nome completo: ");
            	ano = JOptionPane.showInputDialog(null, "Digite o ano de nascimento (entre 1922 e 2021): ");
            	anoNascimento = Integer.parseInt(ano);
            	
                if (anoNascimento >= 1922 && anoNascimento <= 2021) {
                    break;
                } else {
                	JOptionPane.showInternalMessageDialog(null, "Erro: Ano de nascimento inv�lido.");
                }
            } catch (InputMismatchException e) {
            	JOptionPane.showInternalMessageDialog(null, "Erro: Entrada inv�lida. Digite apenas n�meros.");
                input.nextLine(); // Limpa o buffer do Scanner
            }
        }

        idade = 2022 - anoNascimento;
        JOptionPane.showInternalMessageDialog(null, "Ol�, " + nomeCompleto + "! Voc� completou ou completar� " + idade + " anos em 2022.");

        input.close();
    }
}
