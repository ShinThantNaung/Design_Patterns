import type { AbstractVehicleFactory } from "./AbstractVehicleFactory.ts";
import type { Car } from "./Car.ts";
import { BMW } from "./BMW.ts";
import { Mercedes } from "./Mercedes.ts";

export class CarFactory implements AbstractVehicleFactory<Car> {
  create(brand: "BMW" | "mercedes") {
    return brand === "BMW" ? new BMW() : new Mercedes();
  }
}
