import type { Coffee } from "./Coffee.ts";

export class Toppings implements Coffee {
  protected baseCoffee: Coffee;
  constructor(baseCoffee: Coffee) {
    this.baseCoffee = baseCoffee;
  }
  brew(): string {
    return this.baseCoffee.brew();
  }
}
