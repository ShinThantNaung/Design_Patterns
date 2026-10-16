import type { Coffee } from "./Coffee.ts";

export class SimpleCoffee implements Coffee {
  brew(): string {
    return "A Simple coffee is being brewed";
  }
}
