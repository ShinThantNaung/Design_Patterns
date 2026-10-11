import type { Computer } from "./Computer.ts";
export interface PCBuilderInterface {
  reset(): this;
  setProcessor(processor: string): this;
  setVideoCard(videoCard: string): this;
  setMotherboard(motherboard: string): this;
  setRamSize(ramSize: number): this;
  setStorageSize(storageSize: number): this;
  setCooler(cooler: "air" | "water"): this;
  setHasRGB(hasRGB: boolean): this;
  build(): Computer;
}
