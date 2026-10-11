import type { Truck } from "./Truck.ts";
import type { Car } from "./Car.ts";

export interface AbstractVehicleFactory<T extends Truck | Car> {
  create(Brand: string): T;
}
