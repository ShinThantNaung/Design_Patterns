import type { Vehicle } from "./Vehicle.ts";
import type { Car } from "./Car.ts";

export class Mercedes implements Vehicle, Car {
  drive(): void {
    console.log("A Mercedes is being drived!");
  }
  speedUp(): void {
    console.log("A Mercedes is being speeed up");
  }
}
