import { KPaySDK } from "./KPaySDK.ts";
import { AyaPaySDK } from "./AyaPaySDK.ts";
import { PaymentService } from "./PaymentService.ts";
import type { KPaySDKInterface } from "./KPaySDKInterface.ts";

export class PaymentAdaptor implements KPaySDKInterface {
  constructor(private readonly ayaPaySDK: AyaPaySDK) {}

  log(): void {
    this.ayaPaySDK.log();
  }
}
