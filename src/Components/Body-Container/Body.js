import React, { useEffect, useState } from "react";
import "./Body.css";
import Workout from "../Workout/Workout";
import Information from "../Information/Information";

const Body = () => {
  const [workouts, setWorkouts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  const addTimeHandle = (workout) => {
    const array = [0, 1, 2, 3, 4, 5];
    setCart([...cart, workout]);
  };

  return (
    <div className="m-5">
      <div className="body-container row">
        <div className="right-container col-8">
          <h3 className="title m-5">Today's Workout</h3>
          <div className="workouts-container row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-col-md-2 g-4 m-5">
            {workouts.map((workout) => (
              <Workout
                addTimeHandle={addTimeHandle}
                workout={workout}
                key={workout.id}
              ></Workout>
            ))}
          </div>
        </div>
        <div className="info-container col-4">
          <Information cart={cart}></Information>
        </div>
      </div>
    </div>
  );
};

export default Body;
