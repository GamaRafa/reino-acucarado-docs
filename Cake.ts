import { Dough, Fillings, PriceModifiers, Toppings } from "./types";

export abstract class Cake {
  constructor(
    public dough: Dough,
    public fillings: Fillings[],
    public toppings: Toppings[]
  ) {}

  abstract getNumberOfSlices(): number;
  abstract getBasePrice(): number;
  abstract getPriceModifiers(): PriceModifiers;
}

export class BentoCake extends Cake {
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

export class MiniCake extends Cake {
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

export class Cake15Slices extends Cake {
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

export class Cake25Slices extends Cake {
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