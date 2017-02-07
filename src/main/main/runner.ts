import Backburner from 'backburner.js';
import BackburnerType from '../../types/backburner';

export default class Runner {
  private runner: BackburnerType;

  static create({ app }): Runner {
    return new Runner(app);
  }

  constructor(app: any) {
    let backburner = new Backburner(['render'], {});

    backburner.on('begin', () => {
      backburner.scheduleOnce('render', () => {
        app.rerender();
      });
    });

    this.runner = backburner;
  }

  run(task: Function): void {
    this.runner.run(task);
  }
}
