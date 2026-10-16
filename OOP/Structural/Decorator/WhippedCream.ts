import { Toppings } from "./Toppings.ts";
export class WhippedCream extends Toppings {
  public brew(): string {
    return `${super.brew()} and whipped cream is added`;
  }
}
