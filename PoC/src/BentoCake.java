package src;
import java.util.List;

public class BentoCake extends Cake {
  public BentoCake(Dough dough, List<Fillings> fillings, List<Toppings> toppings) {
    super(dough, fillings, toppings);
  }

  @Override
  public int getNumberOfSlices() {
    return 4;
  }

  @Override
  public double getBasePrice() {
    return 58.00;
  }

  @Override
  public PriceModifiers getPriceModifiers() {
    return new PriceModifiers(5.0, 8.0, 8.0);
  }
}
