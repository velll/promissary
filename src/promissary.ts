export default class Promissary<T> {

  public resolve: (value: T) => void;
  public reject: (value: T) => void;

  public readonly promise: Promise<T>;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
