/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";

const renderStarWars = (props) => {
  return (
    props &&
    props.results.map((person, i) => {
      return <h4 key={i}>{person.name}</h4>;
    })
  );
};

const Counter = ({ state, onIncrement, onDecrement, onGetStarWars }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onGetStarWars}>Get star wars</button>
    <hr />
    <div>Clicked: {state.counter} times</div>
    {renderStarWars(state.starWars)}
  </div>
);

Counter.propTypes = {
  state: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
