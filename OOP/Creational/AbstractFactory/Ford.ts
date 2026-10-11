import type { Vehicle } from "./Vehicle.ts";
import type { Truck } from "./Truck.ts";

export class Ford implements Vehicle, Truck {
  drive(): void {
    console.log("A Ford truck is being drived");
  }
  load(): void {
    console.log("A Ford truck is loading");
  }
}
