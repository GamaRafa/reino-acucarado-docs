// import { BentoCake } from "./Cake";
// import { PriceCalculatorService } from "./PriceCalculatorService";
// import { Dough, Fillings, Toppings } from "./types";
 enum Dough {
  VANILLA = "Baunilha",
  CHOCOLATE = "Chocolate",
  RED_VELVET = "Red Velvet"
}

 enum Fillings {
  CHOCOLATE_FUDGE = "Brigadeiro",
  WHITE_FUDGE = "Branquinho",
  COCONUT_FUDGE = "Beijinho",
  MILK_CARAMEL = "Doce de leite",
  CREME_BRULEE = "Crème brûlée",
  STRAWBERRY_CREAM = "Creme de morango",
  LEMON_FUDGE = "Branquinho de limão",
  CREAM_CHEESE_FUDGE = "Branquinho de Cream Cheese",
  PISTACHIO_CREAM = "Pistache"
}

 enum Toppings {
  KINDER_BUENO = "Kinder Bueno",
  NUTELLA = "Nutella",
  STIKADINHO = "Stikadinho",
  STRAWBERRY_JAM = "Geléia de morango",
  SALTED_CARAMEL = "Caramelo salgado",
  WHITE_CHOCOLATE_SHAVINGS = "Raspas de chocolate branco",
  BLACK_CHOCOLATE_SHAVINGS = "Raspas de chocolate preto"
}

 type PriceModifiers = {
  redVelvet: number,  // talvez mudar isso pra premiumDough e premiumFilling
  pistachio: number,
  topping: number
}


////////////////////////////////
 abstract class Cake {
  constructor(
    public dough: Dough,
    public fillings: Fillings[],
    public toppings: Toppings[]
  ) {}

  abstract getNumberOfSlices(): number;
  abstract getBasePrice(): number;
  abstract getPriceModifiers(): PriceModifiers;
}

 class BentoCake extends Cake {
  getNumberOfSlices(): number {
      return 4;
  }

  getBasePrice(): number {
    return 58.00;
  }

  getPriceModifiers(): PriceModifiers {
    return {
      redVelvet: 5.0,
      pistachio: 8.0,
      topping: 8.0
    };
  }
}

 class MiniCake extends Cake {
  getNumberOfSlices(): number {
      return 6;
  }

  getBasePrice(): number {
    return 110.00;
  }

  getPriceModifiers(): PriceModifiers {
      return {
        redVelvet: 5.00,
        pistachio: 8.00,
        topping: 8.00
      }
  }
}

 class Cake15Slices extends Cake {
  getNumberOfSlices(): number {
      return 15;
  }

  getBasePrice(): number {
      return 160.00;
  }

  getPriceModifiers(): PriceModifiers {
      return {
        redVelvet: 10.00,
        pistachio: 14.00,
        topping: 15.00
      }
  }
}

 class Cake25Slices extends Cake {
  getNumberOfSlices(): number {
      return 25;
  }

  getBasePrice(): number {
      return 240.00;
  }

  getPriceModifiers(): PriceModifiers {
      return {
        redVelvet: 20.00,
        pistachio: 24.00,
        topping: 25.00
      }
  }
}

////////////////////////////////////////////

 class PriceCalculatorService {
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

////////////////////////////////

const bento = new BentoCake(
  Dough.RED_VELVET,
  [Fillings.PISTACHIO_CREAM],
  [Toppings.SALTED_CARAMEL, Toppings.BLACK_CHOCOLATE_SHAVINGS]
)

const service = new PriceCalculatorService();
const price = service.calculateTotalPrice(bento);
console.log(price);
