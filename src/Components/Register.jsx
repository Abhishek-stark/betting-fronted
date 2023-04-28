import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/Formstyle.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { reset, signup } from "../Reducers/userSlice";
import Loading from "./Loading";

const Registerpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verifymessage = JSON.parse(localStorage.getItem("signupmessage"));
  const [data, setdata] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",

    confirmPassword: "",
  });
  const { name, email, mobileNumber, password, confirmPassword } = data;

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.user
  );

  const Onchange = (e) => {
    setdata((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(verifymessage?.message);
    }
    if (isError) toast.error("Error in signup");
    dispatch(reset());
  }, [isSuccess, isError, isLoading, navigate, dispatch]);

  const Submithandler = async (e) => {
    e.preventDefault();
    const formdata = { name, email, mobileNumber, password, confirmPassword };

    dispatch(signup(formdata));
  };

  if (isLoading) <Loading />;
  return (
    <div className="divformContainer">
      <ToastContainer />
      <form className="divformContainer__form" onSubmit={Submithandler}>
        <input
          type="text"
          className="divformContainer__form--input"
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
          type="email"
          className="divformContainer__form--input"
          required
          placeholder="Enter your email"
          autoComplete="off"
          id="email"
          name="email"
          value={email}
          onChange={Onchange}
        />
        <input
          type="text"
          className="divformContainer__form--input"
          required
          placeholder="Provide your mobile number"
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
          className="divformContainer__form--input"
          required
          placeholder="Enter your password"
          minLength={10}
          autoComplete="off"
          id="password"
          name="password"
          value={password}
          onChange={Onchange}
        />
        <input
          type="password"
          className="divformContainer__form--input"
          required
          placeholder="Confirm Password"
          minLength={10}
          autoComplete="off"
          name="confirmPassword"
          id="confirmPasword"
          value={confirmPassword}
          onChange={Onchange}
        />
        <button className="divformContainer__form--button" type="submit">
          Register
        </button>
      </form>{" "}
    </div>
  );
};

export default Registerpage;
