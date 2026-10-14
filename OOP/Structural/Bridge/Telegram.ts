import type { ContactPlatform } from "./ContactPlatform.ts";

export class Telegram implements ContactPlatform {
  name: string = "Telegram";

  sendMessage(): void {
    console.log(`A message is sent using ${this.name}`);
  }
}
