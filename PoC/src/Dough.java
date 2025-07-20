package src;

public enum Dough {
  VANILLA("Baunilha"),
  CHOCOLATE("Chocolate"),
  RED_VELVET("Red Velvet");

  private final String label;

  Dough(String label) {
    this.label = label;
  }

  public String getLabel() {
    return label;
  }
}
