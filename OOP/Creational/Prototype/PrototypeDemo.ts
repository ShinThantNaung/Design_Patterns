import { PC } from "./PC.ts";

const gamingPC = new PC("intel i5", "Asus", 32, 512, "water", true, "rtx 5060");
const officePC = gamingPC.clone();
