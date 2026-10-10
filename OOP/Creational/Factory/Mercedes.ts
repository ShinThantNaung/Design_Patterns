import type { Car } from "./CarInterface.ts";

export class Mercedes implements Car {
  drive(): void {
    console.log("Mercedes is being drived like a classed person!");
  }
  park(): void {
    console.log("Mercedes is being parked like a classed person!");
  }
}
