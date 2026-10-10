import type { Car } from "./CarInterface.ts";

export class BMW implements Car {
  drive(): void {
    console.log("The BMW is being drived like a maniac");
  }
  park(): void {
    console.log("The BMW is being parked like a maniac");
  }
}
