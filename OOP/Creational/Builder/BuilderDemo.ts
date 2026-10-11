import { PCBuilder } from "./ConcretePCBuilder.ts";

const pcBuilder = new PCBuilder();
pcBuilder
  .reset()
  .setProcessor("Intel")
  .setVideoCard("RTX 3060")
  .setRamSize(32)
  .setStorageSize(512)
  .setMotherboard("Asus")
  .setCooler("water")
  .setHasRGB(true)
  .build();
