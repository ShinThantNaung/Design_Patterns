import { CarFactory } from "./CarFactory.ts";
import { TruckFactory } from "./TruckFactory.ts";

const carFactory = new CarFactory();
const truckFactory = new TruckFactory();

const bmw = carFactory.create("BMW");
bmw.drive();
bmw.speedUp();

const mercedes = carFactory.create("mercedes");
mercedes.drive();
mercedes.speedUp();

const ford = truckFactory.create("Ford");
ford.drive();
ford.load();

const cyberTruck = truckFactory.create("CyberTruck");
cyberTruck.drive();
cyberTruck.load();
