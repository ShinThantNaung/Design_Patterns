export class Logger {
  private num: number;
  private constructor(x: number) {
    this.num = x;
  }
  static instance: Logger;

  public static getInstance(x: number): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(x);
    }
    return Logger.instance;
  }
  public logFunciton() {
    console.log(`This is from Logger No. ${this.num}`);
  }
}
