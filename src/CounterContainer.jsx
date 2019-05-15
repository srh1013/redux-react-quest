import React from "react";
import { connect } from "react-redux";

const mapStateToProps = counter => ({
  counter
});

const mapDispatchToProps = dispatch => ({
  onAdd1: () => dispatch({ type: "ADD1" }),
  onAdd10: () => dispatch({ type: "ADD10" }),
  onRemove1: () => dispatch({ type: "REMOVE1" }),
  onRemove10: () => dispatch({ type: "REMOVE10" }),
  onReset: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({
  counter,
  onAdd1,
  onAdd10,
  onRemove1,
  onRemove10,
  onReset
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onRemove1}>Counter -10</button>
    <button onClick={onRemove10}>Counter -1</button>
    <button onClick={onReset}>Reset counter</button>
    <button onClick={onAdd1}>Counter +1</button>
    <button onClick={onAdd10}>Counter +10</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
