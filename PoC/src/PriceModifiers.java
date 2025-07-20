package src;

public class PriceModifiers {
  private double redVelvet;
  private double pistachio;
  private double topping;

  public PriceModifiers(double redVelvet, double pistachio, double topping) {
    this.redVelvet = redVelvet;
    this.pistachio = pistachio;
    this.topping = topping;
  }

  public double getRedVelvet() {
    return redVelvet;
  }

  public void setRedVelvet(double redVelvet) {
    this.redVelvet = redVelvet;
  }

  public double getPistachio() {
    return pistachio;
  }

  public void setPistachio(double pistachio) {
    this.pistachio = pistachio;
  }

  public double getTopping() {
    return topping;
  }

  public void setTopping(double topping) {
    this.topping = topping;
  }
}
