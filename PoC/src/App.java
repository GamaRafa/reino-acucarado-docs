package src;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class App {
  private static PriceCalculatorService service = new PriceCalculatorService();
  private static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    boolean running = true;
    // Cake bento = new BentoCake(
    //   Dough.CHOCOLATE, 
    //   List.of(Fillings.PISTACHIO_CREAM), 
    //   List.of(Toppings.BLACK_CHOCOLATE_SHAVINGS)
    // );

    // Cake mini = new MiniCake(
    //   Dough.RED_VELVET, 
    //   List.of(Fillings.CREAM_CHEESE_FUDGE), 
    //   List.of(Toppings.STRAWBERRY_JAM)
    // );

    // Cake cake15 = new Cake15Slices(
    //   Dough.VANILLA, 
    //   List.of(Fillings.COCONUT_FUDGE), 
    //   List.of()
    // );

    // System.out.println(service.calculateTotalPrice(bento));
    // System.out.println(service.calculateTotalPrice(mini));
    // System.out.println(service.calculateTotalPrice(cake15));

    while (running) {
      System.out.println("\nMenu:");
      System.out.println("1. Adicionar Bentô Cake");
      System.out.println("0. Sair");
      System.out.println("Escolha uma opção: ");

      String input = scanner.nextLine();

      switch (input) {
        case "1":
          createBentoCake();
          break;
        case "0":
          running = false;
          System.out.println("Encerrando...");
          break;
        default:
          System.out.println("Opção inválida!");
      }
    }
  }

  private static void createBentoCake() {
    Dough dough = selecOption("Escolha a massa:", Dough.values());

    // Fillings fillings = selecOption("Escolha o recheio", Fillings.values());
    List<Fillings> fillings = new ArrayList<>();
    System.out.println("Um bentô tem apenas um recheio"); // teria que implementar uma lógica pra escolher o tipo de bolo antes, mas ok
    Fillings filling = selecOption("Escolha o recheio", Fillings.values());
    fillings.add(filling);

    List<Toppings> toppings = new ArrayList<>();
    System.out.println("Quantos adicionais? (0-2): ");
    int count = readInBetween(0, 2);

    for (int i = 0; i < count; i++) {
      Toppings topping = selecOption("Escolha o adicional " + (i + 1) + ":", Toppings.values());
      toppings.add(topping);
    }

    BentoCake bento = new BentoCake(dough, fillings, toppings);
    double total = service.calculateTotalPrice(bento);
    System.out.println("\nPedido criado com sucesso!");
    System.out.println("Bento com massa de " + dough + ", e recheio de " + filling + ". Adicionais: " + toppings);
    System.out.println("Total do pedido: " + total);
  }

  private static <T extends Enum<T>> T selecOption(String message, T[] options) {
    System.out.println("\n" + message);
    for (int i = 0; i < options.length; i++) {
      System.out.println(i + 1 + ". " + getEnumLabel(options[i]));
    }

    int choice = readInBetween(1, options.length);
    return options[choice - 1];
  }

  private static int readInBetween(int min, int max) {
    while (true) {
      try {
        int value = Integer.parseInt(scanner.nextLine());
        if (value >= min && value <= max) {
          return value;
        }
      } catch (NumberFormatException ignored) {
        System.out.println("Valor inválido. Digite um número entre " + min + " e " + max + ": ");
      }
    }
  }

  private static String getEnumLabel(Enum<?> e) {
    try {
      return (String) e.getClass().getMethod("getLabel").invoke(e);
    } catch (Exception ex) {
      return e.name();
    }
  }
}
