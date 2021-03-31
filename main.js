import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { starWarsSaga, watchStarWars } from "./sagas";

import Counter from "./Counter";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchStarWars);

const action = (type) => store.dispatch({ type });

console.log(store.getState());

function render() {
  ReactDOM.render(
    <Counter
      state={store.getState()}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
      onGetStarWars={() => action("GETSTARWARS")}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
