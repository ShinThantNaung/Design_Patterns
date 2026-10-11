import type { AbstractVehicleFactory } from "./AbstractVehicleFactory.ts";
import type { Truck } from "./Truck.ts";
import { Ford } from "./Ford.ts";
import { CyberTruck } from "./CyberTruck.ts";

export class TruckFactory implements AbstractVehicleFactory<Truck> {
  create(brand: "Ford" | "CyberTruck") {
    return brand === "Ford" ? new Ford() : new CyberTruck();
  }
}
