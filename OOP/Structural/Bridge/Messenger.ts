import type { ContactPlatform } from "./ContactPlatform.ts";

export class Messenger implements ContactPlatform {
  name: string = "Messenger";

  sendMessage(): void {
    console.log(`A message is sent using ${this.name}`);
  }
}
