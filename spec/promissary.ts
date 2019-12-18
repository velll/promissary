import { SomeTask } from './helpers/some-task';

test('a promise can be resolved', async () => {
  expect(await new SomeTask().run()).toBe(true);
});

test('a promise can be rejected', async () => {
  new SomeTask().fail().catch( e =>
    expect(e).toBe(false));
});

test('a promise can be resolved after a timeout', async () => {
  const before = Date.now();

  expect(await new SomeTask().runSlow()).toBe(true);

  const after = Date.now();
  expect(after - before).not.toBeLessThan(SomeTask.timeout);
});
