import { observable, computed, action } from "mobx";

export class Counter {
  private initNum: number;
  @observable num: number;

  constructor(num: number = 0) {
    this.num = num;
    this.initNum = num;
  }

  @action
  increment() {
    console.log(`[MobX] action trigger:: increment`);
    this.num += 1;
  }

  @action
  decrement() {
    console.log(`[MobX] action trigger:: decrement`);
    this.num -= 1;
  }

  @action
  reset() {
    console.log(`[MobX] action trigger:: reset`);
    this.num = this.initNum;
  }
}
