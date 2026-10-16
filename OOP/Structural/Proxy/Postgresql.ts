import type { Database } from "./Database.ts";
export class Postgresql implements Database {
  query(): void {
    console.log("Database processed the query");
  }
}
