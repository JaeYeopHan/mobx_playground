import { Counter } from "./domain/Counter";
import { CountView } from "./view/CountView";
import { Buttons } from "./view/Buttons";
import { TimeLine } from "./view/TimeLine";

class CounterController {
  private counter: Counter;
  private countView: CountView;
  private buttons: Buttons;
  private timeLine: TimeLine;

  constructor() {
    this.counter = new Counter();
    this.countView = new CountView(this.counter);
    this.buttons = new Buttons(this.counter);
    this.timeLine = new TimeLine(this.counter);
  }
}

export default new CounterController();
