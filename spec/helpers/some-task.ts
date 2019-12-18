import { Promissary } from '../../src/promissary';

// an example implementation
class SomeTask {
  public static timeout = 1000;
  private finished: Promissary<boolean>;

  constructor() {
    this.finished = new Promissary<boolean>();
  }

  public run() {
    this.finished.resolve(true);

    return this.finished.getPromise();
  }

  public runSlow() {
    setTimeout(this.finished.resolve, SomeTask.timeout, true);

    return this.finished.getPromise();
  }

  public fail() {
    this.finished.reject(false);

    return this.finished.getPromise();
  }
}

export { SomeTask };
