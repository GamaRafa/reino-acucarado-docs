package src;

public enum Toppings {
  KINDER_BUENO("Kinder Bueno"),
  NUTELLA("Nutella"),
  STIKADINHO("Stikadinho"),
  STRAWBERRY_JAM("Geléia de morango"),
  SALTED_CARAMEL("Caramelo salgado"),
  WHITE_CHOCOLATE_SHAVINGS("Raspas de chocolate branco"),
  BLACK_CHOCOLATE_SHAVINGS("Raspas de chocolate preto");

  private final String label;

  Toppings(String label) {
      this.label = label;
  }

  public String getLabel() {
      return label;
  }
}
