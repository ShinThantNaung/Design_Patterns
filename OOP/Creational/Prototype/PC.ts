import type { PCInterface } from "./PCInterface.ts";
import type { PrototypeInterface } from "./PrototypeInterface.ts";

export class PC implements PCInterface, PrototypeInterface<PC> {
  processor: string;
  videoCard: string;
  motherboard: string;
  ramSize: number;
  storageSize: number;
  cooler: "air" | "water";
  hasRGB: boolean;
  constructor(
    processor: string,
    motherboard: string,
    ramSize: number,
    storageSize: number,
    cooler: "air" | "water",
    hasRGB: boolean,
    videoCard: string,
  ) {
    this.cooler = cooler;
    this.hasRGB = hasRGB;
    this.videoCard = videoCard;
    this.processor = processor;
    this.ramSize = ramSize;
    this.storageSize = storageSize;
    this.motherboard = motherboard;

    this.display();
  }
  clone(): PC {
    return new PC(
      this.processor,
      this.motherboard,
      this.ramSize,
      this.storageSize,
      this.cooler,
      this.hasRGB,
      this.videoCard,
    );
  }
  display(): void {
    console.log(
      `A PC with\n${this.processor}
      \n${this.motherboard}
      \n${this.ramSize}
      \n${this.storageSize}
      \n${this.cooler}
      \n${this.hasRGB}
      \n${this.videoCard}`,
    );
  }
}
