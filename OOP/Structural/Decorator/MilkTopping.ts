import { Toppings } from "./Toppings.ts";

export class MilkTopping extends Toppings {
  public brew(): string {
    return `${super.brew()} and milk is added`;
  }
}
