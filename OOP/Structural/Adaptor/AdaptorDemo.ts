import { KPaySDK } from "./KPaySDK.ts";
import { AyaPaySDK } from "./AyaPaySDK.ts";
import { PaymentService } from "./PaymentService.ts";
import { PaymentAdaptor } from "./PaymentAdaptor.ts";

const KPay = new KPaySDK();
const AyaPay = new AyaPaySDK();

const paymentServiceKPay = new PaymentService(KPay);
paymentServiceKPay.pay(10000);

const paymentServiceAya = new PaymentService(new PaymentAdaptor(AyaPay));
paymentServiceAya.pay(20000);
