export class Chef {
  private food: string;
  constructor(food: string) {
    this.food = food;
  }
  cookFood() {
    console.log(`The chef is cooking ${this.food}`);
  }
}
