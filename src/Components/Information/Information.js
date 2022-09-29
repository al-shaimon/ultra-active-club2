import React, { useEffect, useState } from "react";
import "./Information.css";
import logo from "../me.jpg";
import { getStorage, saveToStorage } from "../Utility/Utility";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Information = ({ cart }) => {
  const [value, setValue] = useState([]);
  let time = 0;
  for (let item of cart) {
    time += item.time;
  }
  const notify = () => {
    toast("Thank you , you are done for today");
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 6000);
  };
  useEffect(() => {
    const newValue = getStorage();
    if (newValue) {
      setValue(newValue);
    } else {
      setValue("0 s");
    }
  }, []);

  const breakTime = (e) => {
    let breaktime = e.target.innerText;

    setValue(breaktime);
    saveToStorage(breaktime);
  };

  return (
    <div className="">
      <div className="info-details my-5 d-flex flex-sm-column flex-md-row align-items-center">
        <img className="info-logo" src={logo} alt="" />
        <div className="info__details">
          <h4>Abdullah Al Shaimon</h4>
          <h6>Chattogram, Bangladesh</h6>
        </div>
      </div>
      <div className="personal-info row text-center m-3 text-white py-2">
        <div className="col">
          <p className="info  fw-bold fs-5">68 kg</p>
          <p>Weight</p>
        </div>
        <div className="col">
          <p className="info  fw-bold fs-5">5.10 ft</p>
          <p>Height</p>
        </div>
        <div className="col">
          <p className="info  fw-bold fs-5">20 yrs</p>
          <p>Weight</p>
        </div>
      </div>
      <h3 className="mx-3 mt-5">Add A Break</h3>
      <div className="btn-grp text-center py-3 m-3 mb-5">
        <button onClick={breakTime} className="time-btn me-3">
          10s
        </button>
        <button onClick={breakTime} className="time-btn me-3">
          20s
        </button>
        <button onClick={breakTime} className="time-btn me-3">
          30s
        </button>
        <button onClick={breakTime} className="time-btn me-3">
          40s
        </button>
        <button onClick={breakTime} className="time-btn me-3">
          50s
        </button>
      </div>
      <div className="excersize-container mb-5 ">
        <h3 className="mx-3 mt-5">Exercise Details</h3>
        <div className="excersize-details d-flex justify-content-between m-3 p-3 flex-sm-column  flex-md-row flex-lg-row text-white">
          <h5>Exercise time</h5>
          <p>{time} seconds</p>
        </div>
        <div className="excersize-details d-flex justify-content-between m-3 p-3 text-white flex-sm-column  flex-md-row flex-lg-row ">
          <h5>Break time</h5>
          <p>{value}econds</p>
        </div>
      </div>
      <button onClick={notify} className="activity-btn">
        Activity Done
      </button>
      <ToastContainer />
    </div>
  );
};

export default Information;
