import type { Vehicle } from "./Vehicle.ts";
import type { Truck } from "./Truck.ts";
export class CyberTruck implements Vehicle, Truck {
  drive(): void {
    console.log("A CyberTruck truck is being drived");
  }
  load(): void {
    console.log("A CyberTruck truck is loading");
  }
}
