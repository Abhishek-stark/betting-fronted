import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, login, signup, verifyingOtp } from "./../Reducers/userSlice";
import LoginIcon from "@mui/icons-material/Login";
import Loading from "./Loading";

import "./../Styles/Formstyle.scss";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setdata] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    reference: "",

    confirmPassword: "",
  });

  const [otp, setotp] = useState({
    getOtp: "",
  });

  const { name, email, mobileNumber, password, confirmPassword, reference } =
    data;
  const { getOtp } = otp;

  const { isError, isSuccess, isLoading } = useSelector((state) => state.user);

  const Onchange = (e) => {
    setdata((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };
  const Otpchange = (e) => {
    setotp((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (isSuccess) navigate("/dashboard");
    if (isError) navigate("/");
    dispatch(reset());
  }, [isSuccess, isError, isLoading, navigate, dispatch]);

  const Submithandler = async (e) => {
    e.preventDefault();

    if (reference.length > 10) {
      const formdata = {
        name,
        email,
        mobileNumber,
        password,
        confirmPassword,
        reference,
      };
      dispatch(signup(formdata));
    } else {
      const formdata = { name, email, mobileNumber, password, confirmPassword };
      dispatch(signup(formdata));
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const otps = { getOtp };
    dispatch(verifyingOtp(otps));
  };

  if (isLoading) <Loading />;
  return (
    <div className="bodycontainer">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={Submithandler}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              placeholder="Enter your name"
              maxLength={20}
              minLength={4}
              autoComplete="off"
              onChange={Onchange}
            />
            <input
              type="text"
              required
              placeholder="MobileNumber"
              minLength={10}
              maxLength={10}
              autoComplete="off"
              name="mobileNumber"
              id="mobileNumber"
              value={mobileNumber}
              onChange={Onchange}
            />
            <input
              type="password"
              required
              placeholder="Password"
              minLength={10}
              autoComplete="off"
              id="password"
              name="password"
              value={password}
              onChange={Onchange}
            />
            <input
              type="password"
              required
              placeholder="Confirm Password"
              minLength={10}
              autoComplete="off"
              name="confirmPassword"
              id="confirmPasword"
              value={confirmPassword}
              onChange={Onchange}
            />
            <input
              type="string"
              placeholder="Reference Number (optional)"
              minLength={10}
              maxLength={22}
              autoComplete="off"
              name="reference"
              id="reference"
              value={reference}
              onChange={Onchange}
            />

            <button type="submit" className="btn--green">
              Sign up
            </button>
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

export default Form;
