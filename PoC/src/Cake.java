package src;
import java.util.List;

public abstract class Cake {
  protected Dough dough;
  protected List<Fillings> fillings;
  protected List<Toppings> toppings;

  public Cake(Dough dough, List<Fillings> fillings, List<Toppings> toppings) {
    this.dough = dough;
    this.fillings = fillings;
    this.toppings = toppings;
  }
  public Dough getDough() {
    return dough;
  }

  public void setDough(Dough dough) {
    this.dough = dough;
  }

  public List<Fillings> getFillings() {
    return fillings;
  }

  public void setFillings(List<Fillings> fillings) {
    this.fillings = fillings;
  }

  public List<Toppings> getToppings() {
    return toppings;
  }

  public void setToppings(List<Toppings> toppings) {
    this.toppings = toppings;
  }

  public abstract int getNumberOfSlices();
  public abstract double getBasePrice();
  public abstract PriceModifiers getPriceModifiers();
}
