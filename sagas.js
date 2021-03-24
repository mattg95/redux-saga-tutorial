import { put, takeEvery, all, call } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const api = (url) => fetch(url).then((res) => res.json);

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* startWarsSaga(action) {
  try {
    const person = yield call(api, "https://swapi.co./api/people");
    yield put({ type: "GETSTARWARS", data: person.results });
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield all([startWarsSaga(), watchIncrementAsync()]);
}
