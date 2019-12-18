# Promisssary
A library for manually resolving promises.

# Why?

I needed callbacks, but I didn't want to end up in a callback hell. I like Promises and this is what I wanted.

```
new SomeTask(<params>).run().then(val => (...));
// or
const val = await new SomeTask(<params>).run();
```

Q: ES6 Promises work. Why would anybody want to resolve them manually?

A: When using `requestAnimationFrame`, `setTimeout` or such you just don't have enough control to put everything in the Promise constructor. Well, you can of course, but I ended up with a messy code. So I built a wrapper around Promises to resolve them manually for this extra bit of flexibility.

# Usage
For the love of god, please define a _promissary_ as private. You don't want anybody outside of your task to resolve it, do you?

```
class SomeTask {
  private finished: Promissary<boolean>;
  ...
}
```

Initialize it in a public method or a constructor
```
  constructor() {
    ...
    this.finished = new Promissary<boolean>();
    ...
  }
```

Do the actual asynchronous part in a private method and resolve.
```
  private doTheWork() {
    ...
    // however you're gonna check if it is done
    if (this.done()) {
      this.finished.resolve(true);
    }

    // as an example of why you might want to need to resolve the promise manually
    requestAnimationFrame(doTheWork.bind(this));
  }
```

Make a public method returning the promise
```
  public run() {
    this.doTheWork();
    return this.finished.getPromise();
  }
```

Now you can execute your asynchronous task with `then` or `await`.

# Typescript
It's written in typescript and the type definitions are included. Tbh, I don't think it's a good idea to use this in vanilla javascript. At least the typescript compiler does enforce private functions.
