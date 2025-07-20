var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import { BentoCake } from "./Cake";
// import { PriceCalculatorService } from "./PriceCalculatorService";
// import { Dough, Fillings, Toppings } from "./types";
var Dough;
(function (Dough) {
    Dough["VANILLA"] = "Baunilha";
    Dough["CHOCOLATE"] = "Chocolate";
    Dough["RED_VELVET"] = "Red Velvet";
})(Dough || (Dough = {}));
var Fillings;
(function (Fillings) {
    Fillings["CHOCOLATE_FUDGE"] = "Brigadeiro";
    Fillings["WHITE_FUDGE"] = "Branquinho";
    Fillings["COCONUT_FUDGE"] = "Beijinho";
    Fillings["MILK_CARAMEL"] = "Doce de leite";
    Fillings["CREME_BRULEE"] = "Cr\u00E8me br\u00FBl\u00E9e";
    Fillings["STRAWBERRY_CREAM"] = "Creme de morango";
    Fillings["LEMON_FUDGE"] = "Branquinho de lim\u00E3o";
    Fillings["CREAM_CHEESE_FUDGE"] = "Branquinho de Cream Cheese";
    Fillings["PISTACHIO_CREAM"] = "Pistache";
})(Fillings || (Fillings = {}));
var Toppings;
(function (Toppings) {
    Toppings["KINDER_BUENO"] = "Kinder Bueno";
    Toppings["NUTELLA"] = "Nutella";
    Toppings["STIKADINHO"] = "Stikadinho";
    Toppings["STRAWBERRY_JAM"] = "Gel\u00E9ia de morango";
    Toppings["SALTED_CARAMEL"] = "Caramelo salgado";
    Toppings["WHITE_CHOCOLATE_SHAVINGS"] = "Raspas de chocolate branco";
    Toppings["BLACK_CHOCOLATE_SHAVINGS"] = "Raspas de chocolate preto";
})(Toppings || (Toppings = {}));
////////////////////////////////
var Cake = /** @class */ (function () {
    function Cake(dough, fillings, toppings) {
        this.dough = dough;
        this.fillings = fillings;
        this.toppings = toppings;
    }
    return Cake;
}());
var BentoCake = /** @class */ (function (_super) {
    __extends(BentoCake, _super);
    function BentoCake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BentoCake.prototype.getNumberOfSlices = function () {
        return 4;
    };
    BentoCake.prototype.getBasePrice = function () {
        return 58.00;
    };
    BentoCake.prototype.getPriceModifiers = function () {
        return {
            redVelvet: 5.0,
            pistachio: 8.0,
            topping: 8.0
        };
    };
    return BentoCake;
}(Cake));
var MiniCake = /** @class */ (function (_super) {
    __extends(MiniCake, _super);
    function MiniCake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiniCake.prototype.getNumberOfSlices = function () {
        return 6;
    };
    MiniCake.prototype.getBasePrice = function () {
        return 110.00;
    };
    MiniCake.prototype.getPriceModifiers = function () {
        return {
            redVelvet: 5.00,
            pistachio: 8.00,
            topping: 8.00
        };
    };
    return MiniCake;
}(Cake));
var Cake15Slices = /** @class */ (function (_super) {
    __extends(Cake15Slices, _super);
    function Cake15Slices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cake15Slices.prototype.getNumberOfSlices = function () {
        return 15;
    };
    Cake15Slices.prototype.getBasePrice = function () {
        return 160.00;
    };
    Cake15Slices.prototype.getPriceModifiers = function () {
        return {
            redVelvet: 10.00,
            pistachio: 14.00,
            topping: 15.00
        };
    };
    return Cake15Slices;
}(Cake));
var Cake25Slices = /** @class */ (function (_super) {
    __extends(Cake25Slices, _super);
    function Cake25Slices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cake25Slices.prototype.getNumberOfSlices = function () {
        return 25;
    };
    Cake25Slices.prototype.getBasePrice = function () {
        return 240.00;
    };
    Cake25Slices.prototype.getPriceModifiers = function () {
        return {
            redVelvet: 20.00,
            pistachio: 24.00,
            topping: 25.00
        };
    };
    return Cake25Slices;
}(Cake));
////////////////////////////////////////////
var PriceCalculatorService = /** @class */ (function () {
    function PriceCalculatorService() {
    }
    PriceCalculatorService.prototype.calculateTotalPrice = function (cake) {
        var basePrice = cake.getBasePrice();
        var modifiers = cake.getPriceModifiers();
        var total = basePrice;
        // Dough modifier
        if (cake.dough === Dough.RED_VELVET) {
            total += modifiers.redVelvet;
        }
        // Pistachio modifier
        if (cake.fillings.some(function (filling) { return filling === Fillings.PISTACHIO_CREAM; })) {
            total += modifiers.pistachio;
        }
        // Toppings modifiers (up to 2, handled in the ui)
        total += cake.toppings.length * modifiers.topping;
        return total;
    };
    return PriceCalculatorService;
}());
////////////////////////////////
var bento = new BentoCake(Dough.RED_VELVET, [Fillings.PISTACHIO_CREAM], [Toppings.SALTED_CARAMEL, Toppings.BLACK_CHOCOLATE_SHAVINGS]);
var service = new PriceCalculatorService();
var price = service.calculateTotalPrice(bento);
console.log(price);
