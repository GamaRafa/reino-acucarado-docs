package src;
import java.util.List;

public class Cake15Slices extends Cake {
  public Cake15Slices(Dough dough, List<Fillings> fillings, List<Toppings> toppings) {
    super(dough, fillings, toppings);
  }

  @Override
  public int getNumberOfSlices() {
    return 15;
  }

  @Override
  public double getBasePrice() {
    return 160.00;
  }

  @Override
  public PriceModifiers getPriceModifiers() {
    return new PriceModifiers(10.00, 14.00, 15.00);
  }
}
