import { Chef } from "./Chef.ts";
import { Waiter } from "./Waiter.ts";
import { Server } from "./Server.ts";
export class Restaurant {
  public order(food: string) {
    console.log(`Ordering ${food}`);
    const waiter = new Waiter(food);
    waiter.takeOrder();
    const chef = new Chef(food);
    chef.cookFood();
    const server = new Server(food);
    server.serveFood();
  }
}
