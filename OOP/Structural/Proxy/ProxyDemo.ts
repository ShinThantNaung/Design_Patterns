import { CachedDatabase } from "./CachedDatabase.ts";
import { Postgresql } from "./Postgresql.ts";

const realDb = new Postgresql();
const proxyDb = new CachedDatabase(realDb);

proxyDb.query();
