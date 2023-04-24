import React, { useEffect, memo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./../Styles/Style.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { reset, checkColors, resetColor } from "../Reducers/userSlice";

import { CurrencyRupee } from "@mui/icons-material";

const TimePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [timers, settimer] = useState(120);

  const timer = useRef(0);
  const minutetime = new Date();
  const getseconds = minutetime.getSeconds();
  const minutes = minutetime.getMinutes();

  let minute = 3 - (minutes % 3);
  // let minute = minutes % 3;
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

    if (
      minute === 3 &&
      second === 7 &&
      user &&
      (user?.data?.tenthjoin !== "No" ||
        user?.data?.tweentyjoin !== "No" ||
        user?.data?.fourtyjoin !== "No" ||
        user?.data?.sixtyjoin !== "No" ||
        user?.data?.seventyjoin !== "No" ||
        user?.data?.hundredjoin !== "No" ||
        user?.data?.oneFiftyjoin !== "No")
    ) {
      dispatch(checkColors());
      console.log("ColorCheck");
    }

    if (minute === 3 && second === 1 && user) {
      dispatch(resetColor());

      console.log("resetting..");
    }

    return () => clearInterval(timer.current);
  }, [timers]);

  return (
    <div className="timebtn">
      <button className="timebtn--1">
        Remaining :
        <span className="timer">
          {minute === 3 ? 0 : minute}:{second}
        </span>
      </button>
    </div>
  );
};
const Navbar = memo(() => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.user
  );

  const navigation = () => {
    navigate("/setting");
  };

  useEffect(() => {
    if (isError) console.log(message);

    dispatch(reset());
  }, [isError, navigate, message, dispatch]);

  const registerhandler = () => {
    navigate("/signup");
  };
  return (
    <div className="navdiv">
      {user ? (
        <button className="navdiv__btn navdiv__btn--2" onClick={navigation}>
          <AccountCircleIcon />
        </button>
      ) : (
        <button className="register--btn" onClick={registerhandler}>
          Register
        </button>
      )}

      <div className="  navdiv__btn--3">
        {user?.data?.balance ? (
          <span className="navdiv__btn--span">
            <CurrencyRupee />
            {user?.data?.balance}
          </span>
        ) : null}
      </div>
      <TimePage />
    </div>
  );
});

export default Navbar;
