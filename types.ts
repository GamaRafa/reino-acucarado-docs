export enum Dough {
  VANILLA = "Baunilha",
  CHOCOLATE = "Chocolate",
  RED_VELVET = "Red Velvet"
}

export enum Fillings {
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

export enum Toppings {
  KINDER_BUENO = "Kinder Bueno",
  NUTELLA = "Nutella",
  STIKADINHO = "Stikadinho",
  STRAWBERRY_JAM = "Geléia de morango",
  SALTED_CARAMEL = "Caramelo salgado",
  WHITE_CHOCOLATE_SHAVINGS = "Raspas de chocolate branco",
  BLACK_CHOCOLATE_SHAVINGS = "Raspas de chocolate preto"
}

export type PriceModifiers = {
  redVelvet: number,  // talvez mudar isso pra premiumDough e premiumFilling
  pistachio: number,
  topping: number
}