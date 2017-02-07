import Component from '@glimmer/component';
import Backburner from '../../../types/backburner';
import {
  getOwner
} from '@glimmer/di';

export default class HelloWorld extends Component {
  public count: number;
  private runner: Backburner;

  constructor(args) {
    super(args);
    this.count = 0;
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.runner.run(() => {
      this.count += 1;
    });
  }
};
