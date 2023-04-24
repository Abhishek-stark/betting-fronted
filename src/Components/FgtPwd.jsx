import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetpassword, forgotpassword, reset } from "../Reducers/userSlice";

const FgtPwd = () => {
  const [pwddata, setpwddata] = useState({ number: "" });
  const [otp, setotp] = useState({
    getOtp: undefined,
    changePassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getOtp, changePassword } = otp;
  const { number } = pwddata;

  const { user, isError, isSuccess, isLoading } = useSelector(
    (state) => state.user
  );
  const Onchange = (e) => {
    setpwddata((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess) navigate("/dashboard");
    if (isError) navigate("/");
    dispatch(reset());
  }, [isSuccess, isError, isLoading, navigate, dispatch]);

  const Onsubmit = (e) => {
    dispatch(forgotpassword({ number }));
  };

  const Otpchange = (e) => {
    setotp((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };
  const verifyOtp = async (e) => {
    e.preventDefault();
    const otps = { getOtp };
    dispatch(resetpassword(otps, changePassword));
  };
  return (
    <div className="bodycontainer">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={Onsubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Enter Number
            </label>
            <input
              type="text"
              placeholder="Enter your register number to send  OTP"
              required
              minLength={10}
              maxLength={10}
              id="mobileNumber"
              name="number"
              value={number}
              onChange={Onchange}
              autoComplete="off"
            />

            <button type="submit" className="btn--green">
              Send Otp
            </button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={verifyOtp}>
            <label htmlFor="chk" aria-hidden="true">
              Reset Pasword
            </label>
            <input
              type="text"
              placeholder="Enter OTP"
              required
              name="getOtp"
              onChange={Otpchange}
              value={getOtp}
              maxLength={7}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Enter New Password"
              required
              name="changePassword"
              value={changePassword}
              minLength={10}
              onChange={Otpchange}
              autoComplete="off"
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

export default FgtPwd;
