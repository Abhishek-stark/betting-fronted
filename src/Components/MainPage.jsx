import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkColors, resetColor } from "../Reducers/userSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [timers, settimer] = useState(120);

  const timer = useRef(0);
  const minutetime = new Date();
  const getseconds = minutetime.getSeconds();
  const minutes = minutetime.getMinutes();

  let minute = minutes % 2;
  let second = 60 - getseconds;

  useEffect(() => {
    timer.current = setInterval(() => {
      if (timers > 0) {
        settimer((prev) => prev - 1);
      }

      if (timers <= 0) {
        settimer(120);
      }
    }, 1000);
    return () => clearInterval(timer.current);
  }, [timers]);

  // {timers < 100 ? "0" + timers : timers < 10 ? "00" + timers : timers}
  return (
    <div className="timebtn">
      <button className="timebtn--1">
        Remaining :
        <span className="timer">
          {minute}:{second}
        </span>
      </button>
    </div>
  );
};

export default MainPage;
