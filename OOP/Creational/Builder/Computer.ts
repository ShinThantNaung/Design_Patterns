export interface Computer {
  processor: string;
  videoCard?: string;
  motherboard: string;
  ramSize: number;
  storageSize: number;
  cooler: "air" | "water";
  hasRGB: boolean;
}
