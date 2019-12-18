/*
A straightforward wrapper for manually resolving promises.

This doesn't really achieve anything except organizing the code
a little more neatly — not requiring you to put everything in
a constructor of a promise.

*/

class Promissary<T> {
  public resolve: (value: T) => void;
  public reject: (value: T) => void;

  private promise: Promise<T>;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  public getPromise() {
    return this.promise;
  }
}

export { Promissary };
