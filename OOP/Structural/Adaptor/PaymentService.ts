import type { KPaySDKInterface } from "./KPaySDKInterface.ts";
import type { PaymentServiceInterface } from "./PaymentServiceInterface.ts";

export class PaymentService implements PaymentServiceInterface {
  paymentSDK: KPaySDKInterface;
  constructor(paymentSDK: KPaySDKInterface) {
    this.paymentSDK = paymentSDK;
  }
  pay(amount: number): void {
    console.log(`${amount} kyats has been transferred.`);
    this.paymentSDK.log();
  }
}
