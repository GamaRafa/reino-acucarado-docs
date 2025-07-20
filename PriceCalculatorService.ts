import { Cake } from "./Cake";
import { Dough, Fillings } from "./types";

export class PriceCalculatorService {
  calculateTotalPrice(cake: Cake): number {
    const basePrice = cake.getBasePrice();
    const modifiers = cake.getPriceModifiers();

    let total = basePrice;

    // Dough modifier
    if (cake.dough === Dough.RED_VELVET) {
      total += modifiers.redVelvet;
    }

    // Pistachio modifier
    if (cake.fillings.some(filling => filling === Fillings.PISTACHIO_CREAM)) {
      total += modifiers.pistachio;
    }

    // Toppings modifiers (up to 2, handled in the ui)
    total += cake.toppings.length * modifiers.topping;

    return total;
  }
}