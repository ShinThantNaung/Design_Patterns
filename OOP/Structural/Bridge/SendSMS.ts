import type { ContactPlatform } from "./ContactPlatform.ts";
export class SendSMS {
  protected contactPlatform: ContactPlatform;

  constructor(contactPlatform: ContactPlatform) {
    this.contactPlatform = contactPlatform;
    contactPlatform.sendMessage();
  }
}
