import type { Vehicle } from "./Vehicle.ts";
import type { Car } from "./Car.ts";

export class BMW implements Vehicle, Car {
  drive(): void {
    console.log("A BMW is being drived!");
  }
  speedUp(): void {
    console.log("A BMW is being speeed up");
  }
}
