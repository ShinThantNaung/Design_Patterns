import { CarFactory } from "./CarFactory.ts";
import type { Car } from "./CarInterface.ts";
import { Mercedes } from "./Mercedes.ts";

export class MercedesFactory extends CarFactory {
  public createCar(): Car {
    return new Mercedes();
  }
}
