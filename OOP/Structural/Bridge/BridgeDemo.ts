import { Messenger } from "./Messenger.ts";
import { Telegram } from "./Telegram.ts";
import { SendSMS } from "./SendSMS.ts";

const messenger = new Messenger();
const telegram = new Telegram();

const sendSMSByMessenger = new SendSMS(messenger);
const sendSMSByTelegram = new SendSMS(telegram);
