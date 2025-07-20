package src;

public class PriceCalculatorService {
  public double calculateTotalPrice(Cake cake) {
    double basePrice = cake.getBasePrice();
    PriceModifiers modifiers = cake.getPriceModifiers();

    double total = basePrice;

    if (cake.dough == Dough.RED_VELVET) {
      total += modifiers.getRedVelvet();
    }

    if (cake.fillings.contains(Fillings.PISTACHIO_CREAM)) {
      total += modifiers.getPistachio();
    }

    total += cake.toppings.size() * modifiers.getTopping();

    return total;
  }
}
