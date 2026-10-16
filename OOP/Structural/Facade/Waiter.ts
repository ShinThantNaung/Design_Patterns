export class Waiter {
  private food: string;
  constructor(food: string) {
    this.food = food;
  }
  takeOrder() {
    console.log(`The waiter took order for ${this.food}`);
  }
}
