import { Counter } from "./../domain/Counter";
import { autorun } from "mobx";

export class TimeLine {
  private root: HTMLElement;
  private prevNum: number;

  constructor(private counter: Counter) {
    this.root = document.querySelector("#timeline");

    autorun(() => this.addItem());
  }

  addItem() {
    const li = document.createElement("li");
    const item = `${new Date().getTime()}:: ${
      this.counter.num
    } was ${this.getPrevNum()}`;

    li.innerText = item;
    this.root.appendChild(li);
    this.setPrevNum(this.counter.num);
  }

  setPrevNum(num: number) {
    this.prevNum = num;
  }

  getPrevNum() {
    return this.prevNum || 0;
  }
}
