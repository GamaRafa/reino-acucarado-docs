package src;
import java.util.List;

public class MiniCake extends Cake {
  public MiniCake(Dough dough, List<Fillings> fillings, List<Toppings> toppings) {
    super(dough, fillings, toppings);
  }
  
  @Override
  public int getNumberOfSlices() {
    return 6;
  }

  @Override
  public double getBasePrice() {
    return 110;
  }

  @Override
  public PriceModifiers getPriceModifiers() {
    return new PriceModifiers(5.0, 8.0, 8.0);
  }
}
