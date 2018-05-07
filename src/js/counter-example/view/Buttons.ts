import { Counter } from "./../domain/Counter";

export class Buttons {
  constructor(private counter: Counter) {
    document
      .querySelector("#plus")
      .addEventListener("click", () => counter.increment());
    document
      .querySelector("#minus")
      .addEventListener("click", () => counter.decrement());
    document
      .querySelector("#reset")
      .addEventListener("click", () => counter.reset());
  }
}
