import { put, takeEvery, take, all, call } from "redux-saga/effects";

const api = (url) => fetch(url).then((res) => res.json());

export function* starWarsSaga(action) {
  console.log("getting star wars...");
  try {
    const person = yield call(api, "https://swapi.dev/api/people");
    console.log(person);
    yield put({ type: "GETSTARWARS", data: person });
  } catch (e) {
    console.log(e);
  }
}

export function* watchStarWars() {
  yield takeEvery("GETSTARWARS", starWarsSaga);
}
