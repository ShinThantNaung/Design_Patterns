import type { PCBuilderInterface } from "./PCBuilderInterface.ts";
import type { Computer } from "./Computer.ts";

export class PCBuilder implements PCBuilderInterface {
  private processor!: string;
  private videoCard?: string;
  private motherboard!: string;
  private ramSize!: number;
  private storageSize!: number;
  private cooler!: "air" | "water";
  private hasRGB!: boolean;

  constructor() {
    this.reset();
  }

  reset(): this {
    this.processor = "";
    this.videoCard = undefined;
    this.motherboard = "";
    this.ramSize = 0;
    this.storageSize = 0;
    this.cooler = "air";
    this.hasRGB = false;

    return this;
  }
  setProcessor(processor: string): this {
    this.processor = processor;
    console.log(`The processor is set as ${this.processor}`);
    return this;
  }
  setVideoCard(videoCard: string): this {
    this.videoCard = videoCard;
    console.log(`The videoCard is set as ${this.videoCard}`);
    return this;
  }
  setMotherboard(motherboard: string): this {
    this.motherboard = motherboard;
    console.log(`The motherboard is set as ${this.motherboard}`);
    return this;
  }
  setRamSize(ramSize: number): this {
    this.ramSize = ramSize;
    console.log(`The ramSize is set as ${this.ramSize}`);
    return this;
  }
  setStorageSize(storageSize: number): this {
    this.storageSize = storageSize;
    console.log(`The storageSize is set as ${this.storageSize}`);
    return this;
  }
  setCooler(cooler: "air" | "water"): this {
    this.cooler = cooler;
    console.log(`The cooler is set as ${this.cooler}`);
    return this;
  }
  setHasRGB(hasRGB: boolean): this {
    this.hasRGB = hasRGB;
    console.log(`The rgb is ${this.hasRGB ? "set" : "not set"}`);
    return this;
  }
  build(): Computer {
    if (
      !this.processor ||
      !this.motherboard ||
      !this.cooler ||
      typeof this.hasRGB !== "boolean" ||
      this.ramSize <= 0 ||
      this.storageSize <= 0
    ) {
      throw new Error("Invalid PC configuration");
    }
    return {
      processor: this.processor,
      videoCard: this.videoCard,
      motherboard: this.motherboard,
      ramSize: this.ramSize,
      storageSize: this.storageSize,
      cooler: this.cooler,
      hasRGB: this.hasRGB,
    };
  }
}
