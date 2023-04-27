import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, login, verifyingOtp } from "./../Reducers/userSlice";

import Loading from "./Loading";

import "./../Styles/Formstyle.scss";

const Login = () => {
  const [loginData, setloginData] = useState({
    mobileNumber: "",
    password: "",
  });

  const [otp, setotp] = useState({
    getOtp: "",
  });
  const [messages, setmessages] = useState(false);
  const { mobileNumber, password } = loginData;
  const { getOtp } = otp;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message, joinedUsers } =
    useSelector((state) => state.user);

  useEffect(() => {
    if (isError) navigate("/");
    if (message) setmessages(message);
    // if (!user) navigate("/");
    if (isSuccess) navigate("/dashboard");

    dispatch(reset());
  }, [
    isError,
    isLoading,
    isSuccess,
    dispatch,
    navigate,
    user,
    message,
    joinedUsers,
  ]);
  if (isLoading) <Loading />;
  // if (message) console.log(`message is ${message}`);

  const Onchange = (e) => {
    setloginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const Otpchange = (e) => {
    setotp((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };

  const Onsubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      mobileNumber,
      password,
    };

    dispatch(login(loginData));
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const otps = { getOtp };
    dispatch(verifyingOtp(otps));
  };

  return (
    <div className="bodycontainer">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={Onsubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              placeholder="MobileNumber"
              required
              minLength={10}
              maxLength={10}
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={Onchange}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength={10}
              id="password"
              name="password"
              value={password}
              onChange={Onchange}
              autoComplete="off"
            />

            <button type="submit" className="btn--green">
              Login
            </button>
            <div className="forgotandsignup">
              <Link to={"/signup"}>Forgot Password ?</Link>
              <Link to={"/signup"}>Sign Up</Link>
            </div>
          </form>
        </div>
        <div className="login">
          <form onSubmit={verifyOtp}>
            <label htmlFor="chk" aria-hidden="true">
              verify Otp
            </label>
            <input
              type="text"
              placeholder="Enter Otp"
              required
              name="getOtp"
              onChange={Otpchange}
              value={getOtp}
              maxLength={7}
            />
            <button className="btn--green" type="submit">
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
