package src;

public enum Fillings {
  CHOCOLATE_FUDGE("Brigadeiro"),
  WHITE_FUDGE("Branquinho"),
  COCONUT_FUDGE("Beijinho"),
  MILK_CARAMEL("Doce de leite"),
  CREME_BRULEE("Crème brûlée"),
  STRAWBERRY_CREAM("Creme de morango"),
  LEMON_FUDGE("Branquinho de limão"),
  CREAM_CHEESE_FUDGE("Branquinho de Cream Cheese"),
  PISTACHIO_CREAM("Pistache");

  private final String label;

  Fillings(String label) {
      this.label = label;
  }

  public String getLabel() {
      return label;
  }
}
