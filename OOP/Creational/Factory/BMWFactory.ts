import { BMW } from "./BMW.ts";
import { CarFactory } from "./CarFactory.ts";
import type { Car } from "./CarInterface.ts";

export class BMWFactory extends CarFactory {
  public createCar(): Car {
    return new BMW();
  }
}
