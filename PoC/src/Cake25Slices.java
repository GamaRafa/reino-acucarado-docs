package src;
import java.util.List;

public class Cake25Slices extends Cake {
  public Cake25Slices(Dough dough, List<Fillings> fillings, List<Toppings> toppings) {
    super(dough, fillings, toppings);
  }

  @Override
  public int getNumberOfSlices() {
    return 25;
  }

  @Override
  public double getBasePrice() {
    return 240.00;
  }

  @Override
  public PriceModifiers getPriceModifiers() {
    return new PriceModifiers(20.00, 24.00, 25.00);
  }
}
