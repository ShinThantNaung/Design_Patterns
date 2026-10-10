import { Logger } from "./Logger.ts";

const myLogger = Logger.getInstance(1);
myLogger.logFunciton();
const newMyLogger = Logger.getInstance(2);
newMyLogger.logFunciton();
const newNewMyLogger = Logger.getInstance(3);
newNewMyLogger.logFunciton();
