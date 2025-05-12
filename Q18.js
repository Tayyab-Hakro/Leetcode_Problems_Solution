class Money {
  constructor(amount) {
    this.amount = amount;
  }

  valueOf() {
    return this.amount; // used when JS tries to convert object to a number
  }
}
const wallet1 = new Money(50);
const wallet2 = new Money(30);

const total = wallet1 + wallet2; // JS calls valueOf() on both objects

console.log(total); // Output: 80
