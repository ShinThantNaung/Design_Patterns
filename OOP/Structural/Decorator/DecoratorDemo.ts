import { SimpleCoffee } from "./SimpleCoffee.ts";
import { MilkTopping } from "./MilkTopping.ts";
import { WhippedCream } from "./WhippedCream.ts";

const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.brew());

const milkTopping = new MilkTopping(simpleCoffee);
console.log(milkTopping.brew());

const whippedCream = new WhippedCream(milkTopping);
console.log(whippedCream.brew());
