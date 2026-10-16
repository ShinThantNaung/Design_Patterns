export class Server {
  private food: string;

  constructor(food: string) {
    this.food = food;
  }
  serveFood() {
    console.log(`Server is serving ${this.food}`);
  }
}
