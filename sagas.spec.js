import test from "tape";

import { incrementAsync, call } from "./sagas";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

test("incrementAsync Saga test", (assert) => {
  const gen = incrementAsync();
  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "incrementAsync Saga must call delay(1000)"
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: "INCREMENT" }),
    "incrementAsync Saga must dispatch an INCREMENT action"
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "incrementAsync Saga must be done"
  );

  assert.end();
});
