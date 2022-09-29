// import React, { useState } from "react";
import "./Workout.css";

const Workout = ({ workout, addTimeHandle }) => {
  const { id, name, img, details, age, time } = workout;

  const changeColor = (e) => {
    e.target.className = "my-btn";
  };

  return (
    <div className="col">
      <div className="workout-container card h-100 p-2">
        <img className="workout-img" src={img} alt="" />
        <h4>{name}</h4>
        <p>{details}</p>
        <p>For Age: {age}</p>
        <p>Time required : {time}s</p>
        <div onClick={changeColor}>
          <button onClick={() => addTimeHandle(workout)} className="add-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workout;
