import type { KPaySDKInterface } from "./KPaySDKInterface.ts";
export interface PaymentServiceInterface {
  paymentSDK: KPaySDKInterface;
  pay(amount: number): void;
}
