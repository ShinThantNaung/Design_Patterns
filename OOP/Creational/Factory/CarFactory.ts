import type { Car } from "./CarInterface.ts";
export abstract class CarFactory {
  public abstract createCar(): Car;
}
