import type { Database } from "./Database.ts";

export class CachedDatabase implements Database {
  private database: Database;
  constructor(database: Database) {
    this.database = database;
  }
  private checkAccess(): boolean {
    if (!this.database) {
      return false;
    }
    return true;
  }
  private logAccess(): void {
    console.log("Connection to database has been established");
  }
  query(): void {
    if (this.checkAccess()) {
      this.database.query();
    }
  }
}
