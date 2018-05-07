import { Counter } from "./../domain/Counter";
import { autorun } from "mobx";

export class CountView {
  private numberElement: HTMLElement;

  constructor(private counter: Counter) {
    this.numberElement = document.querySelector("#number");

    autorun(() => {
      console.log(`render number of counter`);
      this.numberElement.innerText = `${counter.num}`;
    });
  }
}
